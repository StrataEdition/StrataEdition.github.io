/* =========================================================
   STRATA SERVICE WORKER

   Keeps a copy of the site's images and fonts in the visitor's
   browser, so repeat visits (and moving between pages / popups)
   load instantly instead of re-downloading.

   - Images / fonts: shown instantly from the saved copy, and
     quietly refreshed in the background, so if you replace a file
     visitors get the new one on their next visit.
   - HTML / CSS / JS: always tries the network first so changes you
     publish appear straight away; falls back to the saved copy if
     offline or slow.
   - Videos (.mp4) are left to the browser's own cache. Video needs
     "range" requests, which Safari is very strict about.
========================================================= */

const CACHE = "strata-v1";

/* Small files saved on first visit so the site shell is fast. */
const CORE = [
    "./",
    "index.html",
    "style.css",
    "script.js",
    "assets/AzeretMono-Variable.woff",
    "assets/landing-poster.jpg"
];


self.addEventListener("install", event => {

    event.waitUntil(
        caches
            .open(CACHE)
            .then(cache =>
                /* One missing file must not stop the worker installing. */
                Promise.all(
                    CORE.map(url =>
                        cache.add(url).catch(() => {})
                    )
                )
            )
            .then(() => self.skipWaiting())
    );
});


self.addEventListener("activate", event => {

    event.waitUntil(
        caches
            .keys()
            .then(keys =>
                Promise.all(
                    keys
                        .filter(key => key !== CACHE)
                        .map(key => caches.delete(key))
                )
            )
            .then(() => self.clients.claim())
    );
});


function isCacheable(response) {

    /* 200 only: never store errors or partial (206) responses. */
    return response && response.status === 200 && response.type === "basic";
}


/* Saved copy now, refresh it in the background. */
function staleWhileRevalidate(request) {

    return caches.open(CACHE).then(cache =>

        cache.match(request).then(cached => {

            const refresh =
                fetch(request)
                    .then(response => {

                        if (isCacheable(response)) {
                            cache.put(request, response.clone());
                        }

                        return response;
                    })
                    .catch(() => cached);

            return cached || refresh;
        })
    );
}


/* Fresh from the network, saved copy if that fails. */
function networkFirst(request) {

    return fetch(request)
        .then(response => {

            if (isCacheable(response)) {

                const copy = response.clone();

                caches
                    .open(CACHE)
                    .then(cache => cache.put(request, copy));
            }

            return response;
        })
        .catch(() =>
            caches
                .match(request)
                .then(cached => cached || caches.match("index.html"))
        );
}


self.addEventListener("fetch", event => {

    const request = event.request;

    if (request.method !== "GET") {
        return;
    }

    const url = new URL(request.url);

    /* Only our own files (not YouTube, Bandcamp, etc.). */
    if (url.origin !== self.location.origin) {
        return;
    }

    /* Leave video and any range request to the browser. */
    if (
        request.headers.has("range") ||
        request.destination === "video" ||
        /\.(mp4|webm|mov)$/i.test(url.pathname)
    ) {
        return;
    }

    /* Never cache the service worker itself. */
    if (url.pathname.endsWith("/sw.js")) {
        return;
    }

    if (
        request.mode === "navigate" ||
        /\.(html|css|js)$/i.test(url.pathname)
    ) {
        event.respondWith(networkFirst(request));
        return;
    }

    if (
        /\.(jpe?g|png|webp|gif|svg|avif|woff2?|ttf|otf)$/i.test(url.pathname)
    ) {
        event.respondWith(staleWhileRevalidate(request));
    }
});
