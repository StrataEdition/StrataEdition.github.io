/* =========================================================
   UTILS & DEVICE DETECTION
========================================================= */

const isMobile =
    /iPhone|iPad|iPod|Android/i.test(
        navigator.userAgent
    );


function setScrollState(shouldLock) {

    if (isMobile) {

        document.body.style.overflow = "auto";
        document.documentElement.style.overflow = "auto";

    } else {

        const state =
            shouldLock
                ? "hidden"
                : "auto";

        document.body.style.overflow = state;
        document.documentElement.style.overflow = state;
    }
}


/* =========================================================
   SHOW SITE
========================================================= */

function showSite() {

    const landing =
        document.getElementById("landing-container");

    const mainSite =
        document.getElementById("main-site");


    if (landing) {
        landing.style.display = "none";
    }


    if (mainSite) {
        mainSite.style.display = "block";
    }


    setScrollState(false);


    showPage(
        "label",
        document.querySelector(
            'a[onclick*="label"]'
        )
    );
}


/* =========================================================
   PAGE SWITCHING
========================================================= */

function showPage(id, link) {

    document
        .querySelectorAll(".page")
        .forEach(page => {
            page.style.display = "none";
        });


    const page =
        document.getElementById(id);


    if (page) {
        page.style.display = "block";
    }


    document
        .querySelectorAll("nav a")
        .forEach(a => {
            a.classList.remove("active");
        });


    if (link) {
        link.classList.add("active");
    }


    hidePreview(true);
}


/* =========================================================
   POPUP DOM
========================================================= */

const previewBox =
    document.getElementById("event-preview");

const previewImg =
    document.getElementById("preview-img");

const previewInfo =
    document.getElementById("preview-info");

const previewVideos =
    document.getElementById("preview-videos");


const POPUP_OFFSET = 20;


/* =========================================================
   POSITION POPUP
========================================================= */

function positionPopupBelowList(listSelector) {

    const list =
        document.querySelector(listSelector);

    const content =
        document.querySelector(".content");


    if (
        !list ||
        !content ||
        !previewBox ||
        isMobile
    ) {
        return;
    }


    const listRect =
        list.getBoundingClientRect();

    const contentRect =
        content.getBoundingClientRect();


    const relativeTop =
        (listRect.bottom - contentRect.top) +
        POPUP_OFFSET;


    previewBox.style.top =
        relativeTop + "px";
}


/* =========================================================
   EVENT DATA
========================================================= */

/* PORTAL:BEGIN event-data */
const EVENT_DATA = {

    "EVT-007": {

        img:
            "assets/EVENT007_SPANNERS_2026_GRAINY.png",

        venue:
            "SPANNERS [LONDON]",

        artists: [
            "PIETRO BARDINI",
            "ONAS UENO",
            "CASTLE MAOL",
            "RẮN CẠP ĐUÔI"
        ]
    },


    "EVT-006": {

        img:
            "assets/STRATA-6-ENGINE-ROOMS.jpg",

        venue:
            "THE ENGINE ROOMS [LONDON]",

        artists: [
            "PIETRO BARDINI",
            "MIEDO TOTAL",
            "ENGLAND'S COUNCIL OF LEGISLATION AND GOVERNING BODY OF HYPER REAL SIMULATIONS AND CONSTRUCTS",
            "NEW NAME WORLD TOUR"
        ]
    },


    "EVT-005": {

        img:
            "assets/STRATA-5-HORSE-HOSPITAL-POSTER.jpg",

        venue:
            "THE HORSE HOSPITAL [LONDON]",

        artists: [
            "CANAAN BALSAM",
            "ONAS UENO",
            "PARTIAL DEFRAG",
            "VITTORIA ASSEMBRI & PAOLA LESINA"
        ]
    },


    "EVT-004": {

        img:
            "assets/STRATA-4-ENGINE-ROOMS.jpg",

        venue:
            "THE ENGINE ROOMS [LONDON]",

        artists: [
            "ONAS UENO",
            "CASTLE MAOL",
            "PARTIAL DEFRAG",
            "LAILA SAKINI"
        ]
    },


    "EVT-003": {

        img:
            "assets/STRATA-3-RCA.jpg",

        venue:
            "RCA VISLAB [LONDON]",

        artists: [
            "CASTLE MAOL",
            "PARTIAL DEFRAG",
            "VERONICA+",
            "GLOVES TO BOUQUET"
        ]
    },


    "EVT-002": {

        img:
            "assets/STRATA-2-GOLDSMITHS-IKLECTIK-POSTER.jpg",

        venue:
            "GOLDSMITHS SPATLAB [LONDON]",

        artists: [
            "PARTIAL DEFRAG",
            "MICHAEL-JON MIZRA",
            "ISIDORA EDWARDS"
        ]
    },


    "EVT-001": {

        img:
            "assets/STRATA-POSTER-A4.jpg",

        venue:
            "SPANNERS [LONDON]",

        artists: [
            "PARTIAL DEFRAG",
            "ANS M",
            "GLOVES TO BOUQUET",
            "VERONICA+",
            "CASTLE MAOL"
        ]
    }
};
/* PORTAL:END event-data */


/* =========================================================
   RELEASE DATA
========================================================= */

/* PORTAL:BEGIN release-data */
const RELEASE_DATA = {

    "STR-006": {

        img:
            "assets/fever-cover.png",

        title:
            "FEVER BINDS THE IMAGE",

        quotes: [
            "Fever Binds The Image is a ten-track compilation bringing together artists from across the globe with STRATA's own. Each artist was invited to respond to the theme of 'vestibules', providing artists with guidelines and images as a starting point.<br><br>The resulting album hints toward imaginary non-spaces, thresholds between inside and outside, moments of brief isolation between one state and the next.<br><br>1. PIETRO BARDINI: The flood has left but the wood is rotten<br>2. YIKII: 月光标本室，合鸣枯萎时 (Moonlight Specimen Room, As Resonances Withered)<br>3. ONAS UENO: The Glint of His Veneers<br>4. ANS M: Unfurl Silvers<br>5. HOLODEC: Reappear<br>6. CASTLE MAOL: Summer drives people crazy, and that makes them commit terrible acts<br>7. KELMAN DURAN: july 23-8 b lues 2-4<br>8. KENT WATARI: iNhaleeXhale<br>9. FAUSTO MERCIER: angels morts<br>10. RẮN CẠP ĐUÔI FT. IMRYLL: Long Marshes<br><br>Mastering: Fausto Mercier<br>Album cover: STRATA"
        ],

        bandcamp:
            "<iframe style=\"border:0;width:100%;height:120px;\" src=\"https://bandcamp.com/EmbeddedPlayer/album=340048183/size=large/bgcol=ffffff/linkcol=333333/tracklist=false/artwork=small/transparent=true/\" seamless></iframe>",

        youtube: [

        ]
    },


    "STR-005": {

        img:
            "assets/ParallelRooms1024x1024.jpg",

        title:
            "PARALLEL ROOMS",

        quotes: [
            "Parallel Rooms is a two-track composition for strings and electronics recorded in 2024-25. The pieces came together by recording improvisations guided by a set of graphic notations and arranged harmonic motifs, editing and layering them, then re-amping and improvising again over those takes.<br><br>1. Room One<br>2. Room Two<br>3. Extract: Room One, Section VI<br>4. Extract: Room Two, Section I<br><br>Composed and Produced: Pietro Bardini<br><br>Violin: Angharad Davies<br>Double Bass: Caius Williams<br>Cello: Isidora Edwards<br>Viola: Charis Morgan / Ariane Alexander<br>Piano: Pietro Bardini<br><br>Additional Arrangements for Room One: Tim Pottier<br><br>Additional Mixing: Sean Woodford<br>Mastering: Noel Summerville<br><br>Album cover miniature models: Pietro Bardini<br>Album cover photograph: Sotiris Gonis"
        ],

        bandcamp:
            "<iframe style=\"border:0;width:100%;height:120px;\" src=\"https://bandcamp.com/EmbeddedPlayer/album=1255637387/size=large/bgcol=ffffff/linkcol=333333/tracklist=false/artwork=small/transparent=true/\" seamless></iframe>",

        youtube: [

        ]
    },


    "STR-004": {

        img:
            "assets/MemoryRecoilMidRes.jpg",

        title:
            "MEMORY RECOIL",

        quotes: [
            "Shifting from swirling sound design to teetering piano motifs, Memory Recoil ventures deeper into the heart of the hard drive, where the haunted remnants of compressed data are mechanically recombined into uncanny, heartfelt confabulations.<br><br>1. Optical Eraser<br>2. Non-Recoverable Read Errors<br>3. Bad Sectors<br>4. Memory Recoil<br><br>Written and Produced: Partial Defrag<br>Mixing &amp; Mastering: Pietro Bardini<br>Album cover: Partial Defrag"
        ],

        bandcamp:
            "<iframe style=\"border:0;width:100%;height:120px;\" src=\"https://bandcamp.com/EmbeddedPlayer/album=707364654/size=large/bgcol=ffffff/linkcol=333333/tracklist=false/artwork=small/transparent=true/\" seamless></iframe>",

        youtube: [
            "iX9x_s5Wp7E"
        ]
    },


    "STR-003": {

        img:
            "assets/UmweltArtwork.jpg",

        title:
            "UMWELT",

        quotes: [
            "1. Too Ghost To Body<br>2. Lo<br>3. Every Dread Delight<br>4. Qualia<br>5. Tools For A Second<br>6. What Angels<br><br>Across its runtime, Onas Ueno builds immersive soundscapes that shift and fracture like thoughts mid-formation. Blending ambient atmospheres, digital dissonance and tactile textures, Umwelt sketches a fragmented world; half hyper-real, half doodle.<br><br>Written and Produced: Jonas Pequeno<br>Mixing Engineer: Jonas Pequeno<br>Master Engineer: Conor Dalton<br>Album cover: Amelia Galliford",
            "\"Onas Ueno's Umwelt EP is a haunting, immersive journey through ambient and experimental soundscapes. Blending glitch, spectral melodies, and neoclassical tones, each track unfolds with emotional depth and textural richness.\" — <a class=\"review-link\" target=\"_blank\" href=\"https://igloomag.com/reviews/onas-ueno-umwelt-strata\">Igloo Mag</a>"
        ],

        bandcamp:
            "<iframe style=\"border:0;width:100%;height:120px;\" src=\"https://bandcamp.com/EmbeddedPlayer/album=2963886556/size=large/bgcol=ffffff/linkcol=333333/tracklist=false/artwork=none/transparent=true/\" seamless></iframe>",

        youtube: [

        ]
    },


    "STR-002": {

        img:
            "assets/EttrickSitesCover1024x1024.jpg",

        title:
            "ETTRICK SITES",

        quotes: [
            "Ettrick Sites is the debut release of the London-based collaborative project Gloves to Bouquet. Conceived and produced during a week-long reclusive trip to Loch Ettrick, each song unfolds as a piece of speculative fiction; caricatures spanning rotten fantasy to digital horror.<br><br>1. Sleeper Build<br>2. Tales to Spin<br>3. Billy Walk Cycle<br>4. Blue Dragon<br><br>Written and Produced: Jonas Pequeno and Alexander MacKinnon<br>Mixing &amp; Mastering: Jonas Pequeno<br>Album cover: Zhe Con and Alexander MacKinnon<br>Video Productions: Jonas Pequeno and Alexander MacKinnon",
            "\"Named after Loch Ettrick in Scotland’s Dumfries and Galloway where it was created, this new AV collaboration evokes a primeval digital universe.\" — <a class=\"review-link\" target=\"_blank\" href=\"https://www.thewire.co.uk\">The Wire</a>"
        ],

        bandcamp:
            "<iframe style=\"border:0;width:100%;height:120px;\" src=\"https://bandcamp.com/EmbeddedPlayer/album=4057023817/size=large/bgcol=ffffff/linkcol=333333/tracklist=false/artwork=none/transparent=true/\" seamless></iframe>",

        youtube: [
            "AvJs1v066kA",
            "aFJNOryu5lU"
        ]
    },


    "STR-001": {

        img:
            "assets/ScanDiskCover.jpg",

        title:
            "SCANDISK",

        quotes: [
            "ScanDisk is the debut release of London-based artist Partial Defrag. Whispered voices, car engines, and ethereal club hooks are cut up, compressed, and congealed into a fluid, late-night motif for a spectral, industrial London. Partial Defrag’s free-form compositions are the leftovers of a hard drive compression: space-optimised memories tainted with artifacts.<br><br>1. Elmelin<br>2. Bates<br>3. Pulsarnet<br>4. Wholesalers<br>5. Squat<br>6. VFS<br><br>Written and Produced: Partial Defrag<br>Videos: Partial Defrag<br>Mastering: Fausto Mercier<br>Mixing: Pietro Bardini at RCA Studios<br>Cover and CD design: Partial Defrag",
            "\"Snapshots of voices and digital debris conjuring up a journey through London’s nocturnal streets\" — <a class=\"review-link\" target=\"_blank\" href=\"https://thequietus.com/quietus-reviews/partial-defrag-scandisk-review/\">The Quietus</a>",
            "\"Prickly compositions pulled from the dregs of hard drive compression\" — <a class=\"review-link\" target=\"_blank\" href=\"https://www.ninaprotocol.com/articles/partial-defrag-scandisk\">NINA Protocol</a>"
        ],

        bandcamp:
            "<iframe style=\"border:0;width:100%;height:120px;\" src=\"https://bandcamp.com/EmbeddedPlayer/album=1119581680/size=large/bgcol=ffffff/linkcol=333333/tracklist=false/artwork=none/transparent=true/\" seamless></iframe>",

        youtube: [
            "npcC32gz2KQ",
            "mrEraBWjmkA",
            "3WujZG_iTCk"
        ]
    }
};
/* PORTAL:END release-data */


/* =========================================================
   THEME-AWARE BANDCAMP PLAYER
========================================================= */

function themedBandcamp(html) {

    const isDark =
        document.documentElement.getAttribute("data-theme") !== "light";

    return html
        .replace(
            /bgcol=[0-9a-f]{6}/i,
            isDark ? "bgcol=000000" : "bgcol=ffffff"
        )
        .replace(
            /linkcol=[0-9a-f]{6}/i,
            isDark ? "linkcol=ffffff" : "linkcol=333333"
        );
}


/* =========================================================
   EVENT POPUP
========================================================= */

function previewEvent(id) {

    setScrollState(false);

    const data =
        EVENT_DATA[id];


    if (!data || !previewBox) {
        return;
    }


    previewBox.style.display = "flex";


    positionPopupBelowList(
        "#events .release-list"
    );


    if (previewImg) {
        previewImg.src = data.img;
    }


    if (previewInfo) {

        previewInfo.innerHTML = `

            <div class="event-label">
                VENUE
            </div>

            <br>

            ${data.venue}

            <br><br>

            <div class="event-label">
                ARTISTS
            </div>

            <br>

            ${data.artists.join("<br>")}

        `;
    }


    if (previewVideos) {
        previewVideos.innerHTML = "";
    }
}


/* =========================================================
   RELEASE POPUP
========================================================= */

function previewRelease(id) {

    setScrollState(false);

    const data =
        RELEASE_DATA[id];


    if (!data || !previewBox) {
        return;
    }


    previewBox.style.display = "flex";


    positionPopupBelowList(
        "#label .release-list"
    );


    if (previewImg) {
        previewImg.src = data.img;
    }


    const quotes =
        data.quotes.length

            ? data.quotes
                .map(
                    quote => `<p>${quote}</p>`
                )
                .join("")

            : "";


    if (previewInfo) {

        previewInfo.innerHTML = `

            <div class="event-label">
                ${data.title}
            </div>

            ${quotes}

            ${themedBandcamp(data.bandcamp)}

        `;
    }


    if (previewVideos) {

        previewVideos.innerHTML =
            data.youtube.length

                ? data.youtube
                    .map(
                        videoId =>
                            `<button class="yt-lite" type="button" data-video="${videoId}" aria-label="Play video">` +
                                `<img src="https://i.ytimg.com/vi/${videoId}/hqdefault.jpg" alt="" loading="lazy">` +
                                `<span class="yt-play"></span>` +
                            `</button>`
                    )
                    .join("")

                : "";
    }
}


/* =========================================================
   CLICK-AWAY CLOSE
========================================================= */

document.addEventListener("click", event => {

    if (!previewBox) {
        return;
    }


    const isPopup =
        previewBox.contains(event.target);


    const clickableText =
        event.target.closest(".text.clickable");


    if (!isPopup && !clickableText) {

        previewBox.style.display = "none";

        setScrollState(true);

        window.scrollTo(0, 0);
    }
});


/* =========================================================
   HIDE PREVIEW
========================================================= */

function hidePreview(force = false) {

    if (!previewBox) {
        return;
    }


    if (force) {

        previewBox.style.display = "none";

        setScrollState(true);

        window.scrollTo(0, 0);
    }
}


/* =========================================================
   FOOTER LOGO MOUSE PLAYBACK
========================================================= */

const footerVideo =
    document.getElementById("footer-logo");


if (footerVideo) {

    if (isMobile) {

        footerVideo.loop = true;

        footerVideo.autoplay = true;

        footerVideo
            .play()
            .catch(() => {});

    } else {

        footerVideo.loop = true;

        footerVideo.pause();


        let lastMove =
            Date.now();


        function playOnMove() {

            lastMove =
                Date.now();

            footerVideo
                .play()
                .catch(() => {});
        }


        function checkStop() {

            if (
                Date.now() -
                lastMove > 80
            ) {
                footerVideo.pause();
            }

            requestAnimationFrame(checkStop);
        }


        document.addEventListener(
            "mousemove",
            playOnMove
        );


        requestAnimationFrame(
            checkStop
        );
    }
}


/* =========================================================
   THEME TOGGLE (INVERT)
========================================================= */

(function () {

    const toggle =
        document.getElementById("theme-toggle");

    if (!toggle) {
        return;
    }

    const root =
        document.documentElement;


    function syncButton() {

        toggle.setAttribute(
            "aria-pressed",
            root.getAttribute("data-theme") === "dark"
                ? "true"
                : "false"
        );
    }


    toggle.addEventListener("click", event => {

        /* Don't let the click-away handler close an open popup. */
        event.stopPropagation();

        const next =
            root.getAttribute("data-theme") === "dark"
                ? "light"
                : "dark";

        root.setAttribute("data-theme", next);

        /* Tint the browser's own bars to match (iOS Safari / Android). */
        const meta =
            document.querySelector('meta[name="theme-color"]');

        if (meta) {

            const cfg =
                (window.STRATA_THEME || {})[next];

            meta.setAttribute(
                "content",
                cfg && cfg.bg
                    ? cfg.bg
                    : (next === "dark" ? "#000000" : "#ffffff")
            );
        }

        /* Force one clean repaint so no old-colour blocks are left behind. */
        window.requestAnimationFrame(() => {
            root.style.backgroundColor = "";
            void root.offsetHeight;
        });

        try {
            localStorage.setItem("theme-v2", next);
        } catch (e) {}

        syncButton();

        /* Refresh an open Bandcamp player so it matches the new theme. */
        document
            .querySelectorAll("#preview-info iframe")
            .forEach(frame => {
                frame.outerHTML = themedBandcamp(frame.outerHTML);
            });
    });


    syncButton();

})();



/* =========================================================
   SERVICE WORKER (CACHING)
========================================================= */

if (
    "serviceWorker" in navigator &&
    (location.protocol === "https:" || location.hostname === "localhost")
) {

    window.addEventListener("load", () => {

        navigator.serviceWorker
            .register("sw.js")
            .catch(() => {});
    });
}



/* =========================================================
   SIMPLE VIDEO PLAYERS (YouTube loads only when clicked)
========================================================= */

/*
    Each video is shown as its thumbnail with one plain play button.
    The real YouTube player (and its title / channel / "Watch on
    YouTube" overlays) is only created when a video is clicked, and then
    starts playing straight away. This also makes the popups load faster.
*/

if (previewVideos) {

    previewVideos.addEventListener("click", event => {

        const button =
            event.target.closest(".yt-lite");

        if (!button) {
            return;
        }

        /* Stop the click-away handler closing the popup, since the
           button is removed from the page by this click. */
        event.stopPropagation();

        const id =
            button.getAttribute("data-video");

        const frame =
            document.createElement("iframe");

        frame.src =
            "https://www.youtube-nocookie.com/embed/" + id +
            "?autoplay=1&rel=0&modestbranding=1&playsinline=1&iv_load_policy=3";

        frame.allow =
            "autoplay; encrypted-media; picture-in-picture; fullscreen";

        frame.allowFullscreen = true;

        frame.setAttribute("frameborder", "0");

        button.replaceWith(frame);
    });
}
