/* =========================
   SHOW SITE
========================= */

function showSite() {
    document.getElementById("landing-container").style.display = "none";
    document.getElementById("main-site").style.display = "block";

    /* ENABLE SCROLL ON DESKTOP AFTER LANDING */
    document.body.style.overflow = "auto";
    document.documentElement.style.overflow = "auto";

    document.querySelector("nav a:nth-of-type(1)").click();



}

/* =========================
   PAGE SWITCHING
========================= */

function showPage(id, link) {
    document.querySelectorAll(".page").forEach(p => p.style.display = "none");
    document.getElementById(id).style.display = "block";
    document.querySelectorAll("nav a").forEach(a => a.classList.remove("active"));
    link.classList.add("active");
    hidePreview(true);
}

/* POPUP DOM */
const previewBox = document.getElementById("event-preview");
const previewImg = document.getElementById("preview-img");
const previewInfo = document.getElementById("preview-info");
const previewVideos = document.getElementById("preview-videos");

/* EVENT DATA */
const EVENT_DATA = {
    "EVT-005": {
        img: "assets/STRATA 5 HORSE HOSPITAL POSTER.jpg",
        venue: "THE HORSE HOSPITAL [LONDON]",
        artists: ["CANAAN BALSAM","ONAS UENO","PARTIAL DEFRAG","VITTORIA ASSEMBRI & PAOLA LESINA"]
    },
    "EVT-004": {
        img: "assets/STRATA 4 ENGINE ROOMS.jpg",
        venue: "THE ENGINE ROOMS [LONDON]",
        artists: ["ONAS UENO","CASTLE MAOL","PARTIAL DEFRAG","LAILA SAKINI"]
    },
    "EVT-003": {
        img: "assets/STRATA 3 RCA.jpg",
        venue: "RCA VISLAB [LONDON]",
        artists: ["CASTLE MAOL","PARTIAL DEFRAG","VERONICA+","GLOVES TO BOUQUET"]
    },
    "EVT-002": {
        img: "assets/STRATA 2 GOLDSMITHS IKLECTIK POSTER.jpg",
        venue: "GOLDSMITHS SPATLAB [LONDON]",
        artists: ["PARTIAL DEFRAG","MICHAEL-JON MIZRA","ISIDORA EDWARDS"]
    },
    "EVT-001": {
        img: "assets/STRATA POSTER A4.jpg",
        venue: "SPANNERS [LONDON]",
        artists: ["PARTIAL DEFRAG","ANS M","GLOVES TO BOUQUET","VERONICA+","CASTLE MAOL"]
    }
};

/* RELEASE DATA (MAG LINKS RESTORED) */
const RELEASE_DATA = {
    "STR-004": {
        img: "assets/Memory Recoil Mid Res.png",
        title: "MEMORY RECOIL",
        quotes: [],
        bandcamp: ``,
        youtube: []
    },
    "STR-003": {
        img: "assets/Umwelt Artwork.jpg",
        title: "UMWELT",
        quotes: [
            `"Onas Ueno's Umwelt EP is a haunting, immersive journey through ambient and experimental soundscapes. Blending glitch, spectral melodies, and neoclassical tones, each track unfolds with emotional depth and textural richness." — <a class='review-link' target="_blank" href="https://igloomag.com/reviews/onas-ueno-umwelt-strata">Igloo Mag</a>`
        ],
        bandcamp: `
<iframe style="border:0; width:100%; height:120px;"
src="https://bandcamp.com/EmbeddedPlayer/album=2963886556/size=large/bgcol=ffffff/linkcol=333333/tracklist=false/artwork=none/transparent=true/"
seamless></iframe>`,
        youtube: []
    },
    "STR-002": {
        img: "assets/Ettrick Sites Cover 1024x1024.jpg",
        title: "ETTRICK SITES",
        quotes: [
            `"Named after Loch Ettrick in Scotland’s Dumfries and Galloway where it was created, this new AV collaboration evokes a primeval digital universe." — <a class='review-link' target="_blank" href="https://www.thewire.co.uk">The Wire</a>`
        ],
        bandcamp: `
<iframe style="border:0; width:100%; height:120px;"
src="https://bandcamp.com/EmbeddedPlayer/album=4057023817/size=large/bgcol=ffffff/linkcol=333333/tracklist=false/artwork=none/transparent=true/"
seamless></iframe>`,
        youtube: ["AvJs1v066kA", "aFJNOryu5lU"]
    },
    "STR-001": {
        img: "assets/ScanDiskCover.png",
        title: "SCANDISK",
        quotes: [
            `"Snapshots of voices and digital debris conjuring up a journey through London’s nocturnal streets" — <a class='review-link' target="_blank" href="https://thequietus.com/quietus-reviews/partial-defrag-scandisk-review/">The Quietus</a>`,
            `"Prickly compositions pulled from the dregs of hard drive compression" — <a class='review-link' target="_blank" href="https://www.ninaprotocol.com/articles/partial-defrag-scandisk">NINA Protocol</a>`
        ],
        bandcamp: `
<iframe style="border:0; width:100%; height:120px;"
src="https://bandcamp.com/EmbeddedPlayer/album=1119581680/size=large/bgcol=ffffff/linkcol=333333/tracklist=false/artwork=none/transparent=true/"
seamless></iframe>`,
        youtube: ["npcC32gz2KQ", "mrEraBWjmkA", "3WujZG_iTCk"]
    }
};

/* EVENT POPUP */
function previewEvent(id) {
    const d = EVENT_DATA[id];
    previewBox.style.display = "flex";
    previewImg.src = d.img;
    previewInfo.innerHTML = `
        <div class="event-label">VENUE</div><br>${d.venue}<br><br>
        <div class="event-label">ARTISTS</div><br>${d.artists.join("<br>")}
    `;
    previewVideos.innerHTML = "";
}

/* RELEASE POPUP */
function previewRelease(id) {
    const d = RELEASE_DATA[id];
    previewBox.style.display = "flex";

    previewImg.src = d.img;

    const q = d.quotes.length
        ? d.quotes.map(c => `<p>${c}</p>`).join("")
        : "";

    previewInfo.innerHTML = `
        <div class="event-label">${d.title}</div>
        ${q}
        ${d.bandcamp}
    `;

    previewVideos.innerHTML = d.youtube.length
        ? d.youtube.map(videoId =>
            `<iframe
                src="https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1"
                frameborder="0"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowfullscreen>
            </iframe>`
        ).join("")
        : "";
}

/* CLICK-AWAY CLOSE */
document.addEventListener("click", e => {
    const isPopup = previewBox.contains(e.target);
    const isClickableText = e.target.closest(".text.clickable");

    if (!isPopup && !isClickableText) {
        previewBox.style.display = "none";
    }
});

function hidePreview(force=false) {
    if (force) previewBox.style.display = "none";
}

/* =========================
   FOOTER LOGO MOUSE PLAYBACK
========================= */

const footerVideo = document.getElementById("footer-logo");
let stopTimeout = null;

// Detect mobile devices
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

if (isMobile) {
    /* --------------------
       MOBILE: ALWAYS LOOP
    -------------------- */
    footerVideo.loop = true;
    footerVideo.autoplay = true;
    footerVideo.play().catch(() => {});
} else {
    /* --------------------
       DESKTOP: LOOP + MOUSE CONTROL
    -------------------- */
    footerVideo.loop = true;         // ★ Loop always enabled
    footerVideo.pause();             // Start paused

    let lastMove = Date.now();

    function playOnMove() {
        lastMove = Date.now();
        footerVideo.play().catch(() => {});
    }

    function checkStop() {
        const now = Date.now();
        if (now - lastMove > 80) {   // ★ Pause immediately when mouse stops
            footerVideo.pause();
        }
        requestAnimationFrame(checkStop);
    }

    // Listen for mouse movement
    document.addEventListener("mousemove", playOnMove);

    // Begin stop watcher
    requestAnimationFrame(checkStop);
}
