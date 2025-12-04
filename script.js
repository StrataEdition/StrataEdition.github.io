/* =========================
   SHOW SITE
========================= */

function showSite() {
    document.getElementById("landing-container").style.display = "none";
    document.getElementById("main-site").style.display = "block";

    // Keep desktop non-scrolling at start (scroll is enabled only for popups)
    const firstNavLink = document.querySelector("nav a:nth-of-type(1)");
    if (firstNavLink) {
        firstNavLink.click();
    }
}

/* =========================
   PAGE SWITCHING
========================= */

function showPage(id, link) {
    document.querySelectorAll(".page").forEach(p => p.style.display = "none");
    const page = document.getElementById(id);
    if (page) {
        page.style.display = "block";
    }

    document.querySelectorAll("nav a").forEach(a => a.classList.remove("active"));
    if (link) {
        link.classList.add("active");
    }

    hidePreview(true);
}

/* POPUP DOM */
const previewBox   = document.getElementById("event-preview"); // container
const previewImg   = document.getElementById("preview-img");
const previewInfo  = document.getElementById("preview-info");
const previewVideos = document.getElementById("preview-videos");

/* EDITABLE GAP BELOW LIST */
const POPUP_OFFSET = 20; // px – space between list and popup

/* === Position popup just under a given release list === */
function positionPopupBelowList(listSelector) {
    const list    = document.querySelector(listSelector);
    const content = document.querySelector(".content");
    if (!list || !content || !previewBox) return;

    const listRect    = list.getBoundingClientRect();
    const contentRect = content.getBoundingClientRect();

    // distance from top of .content to bottom of the list, plus offset
    const relativeTop = (listRect.bottom - contentRect.top) + POPUP_OFFSET;

    previewBox.style.top = relativeTop + "px";
}

/* EVENT DATA */
const EVENT_DATA = {
    "EVT-005": {
        img: "assets/STRATA-5-HORSE-HOSPITAL-POSTER.jpg",
        venue: "THE HORSE HOSPITAL [LONDON]",
        artists: ["CANAAN BALSAM","ONAS UENO","PARTIAL DEFRAG","VITTORIA ASSEMBRI & PAOLA LESINA"]
    },
    "EVT-004": {
        img: "assets/STRATA-4-ENGINE-ROOMS.jpg",
        venue: "THE ENGINE ROOMS [LONDON]",
        artists: ["ONAS UENO","CASTLE MAOL","PARTIAL DEFRAG","LAILA SAKINI"]
    },
    "EVT-003": {
        img: "assets/STRATA-3-RCA.jpg",
        venue: "RCA VISLAB [LONDON]",
        artists: ["CASTLE MAOL","PARTIAL DEFRAG","VERONICA+","GLOVES TO BOUQUET"]
    },
    "EVT-002": {
        img: "assets/STRATA-2-GOLDSMITHS-IKLECTIK-POSTER.jpg",
        venue: "GOLDSMITHS SPATLAB [LONDON]",
        artists: ["PARTIAL DEFRAG","MICHAEL-JON MIZRA","ISIDORA EDWARDS"]
    },
    "EVT-001": {
        img: "assets/STRATA-POSTER-A4.jpg",
        venue: "SPANNERS [LONDON]",
        artists: ["PARTIAL DEFRAG","ANS M","GLOVES TO BOUQUET","VERONICA+","CASTLE MAOL"]
    }
};

/* RELEASE DATA */
const RELEASE_DATA = {
    "STR-004": {
        img: "assets/MemoryRecoilMidRes.jpg",
        title: "MEMORY RECOIL",
        quotes: ['Shifting from swirling sound design to teetering piano motifs, Memory Recoil ventures deeper into the heart of the hard drive, where the haunted remnants of compressed data are mechanically recombined into uncanny, heartfelt confabulations.'],
        bandcamp: `<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=707364654/size=large/bgcol=ffffff/linkcol=333333/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://strataedition.bandcamp.com/album/memory-recoil">Memory Recoil by Partial Defrag</a></iframe>`,
        youtube: []
    },
    "STR-003": {
        img: "assets/UmweltArtwork.jpg",
        title: "UMWELT",
        quotes: [
            `"Onas Ueno’s Umwelt EP is a haunting, immersive journey through ambient and experimental soundscapes. Blending glitch, spectral melodies and neoclassical tones, each track unfolds with emotional depth and textural richness. The EP manages to feel both intimate and alien — like an encounter with the memory of a place you’ve never been to." — <a class='review-link' target="_blank" href="https://igloomag.com/reviews/onas-ueno-umwelt-strata">Igloo Mag</a>`
        ],
        bandcamp: `
<iframe style="border:0; width:100%; height:120px;"
src="https://bandcamp.com/EmbeddedPlayer/album=2963886556/size=large/bgcol=ffffff/linkcol=333333/tracklist=false/artwork=none/transparent=true/"
seamless></iframe>`,
        youtube: ["iX9x_s5Wp7E"]
    },
    "STR-002": {
        img: "assets/EttrickSitesCover1024x1024.jpg",
        title: "ETTRICK SITES",
        quotes: [
            `"Named after Loch Ettrick in the Scottish Borders, Ettrick Sites evokes a primeval digital universe. The duo build landscapes that feel ancient and computational at once, folding field-recordings, granular murmurs and synthetic erosion into something uncanny and alive." — <a class='review-link' target="_blank" href="https://www.thewire.co.uk">The Wire</a>`
        ],
        bandcamp: `
<iframe style="border:0; width:100%; height:120px;"
src="https://bandcamp.com/EmbeddedPlayer/album=4057023817/size=large/bgcol=ffffff/linkcol=333333/tracklist=false/artwork=none/transparent=true/"
seamless></iframe>`,
        youtube: ["AvJs1v066kA", "aFJNOryu5lU"]
    },
    "STR-001": {
        img: "assets/ScanDiskCover.jpg",
        title: "SCANDISK",
        quotes: [
            `"Snapshots of voices and digital debris, arranged in a way that feels archaeological rather than narrative. Each track feels like brushing dust off something mechanical, revealing form and function at the same time.” — <a class='review-link' target="_blank" href="https://thequietus.com/quietus-reviews/partial-defrag-scandisk-review/">The Quietus</a>`,
            `"Prickly compositions, half-remembered textures, corrupted motifs, and an uncanny sense of digital place-making. SCANDISK feels like peering into a fragmented directory of someone else’s subconscious.” — <a class='review-link' target="_blank" href="https://www.ninaprotocol.com/articles/partial-defrag-scandisk">NINA Protocol</a>`
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

    // ENABLE SCROLL on popup open
    document.body.style.overflow = "auto";
    document.documentElement.style.overflow = "auto";

    const d = EVENT_DATA[id];
    if (!d || !previewBox) return;

    previewBox.style.display = "flex";
    // place popup under EVENTS list
    positionPopupBelowList("#events .release-list");

    if (previewImg) {
        previewImg.src = d.img;
    }
    if (previewInfo) {
        previewInfo.innerHTML = `
        <div class="event-label">VENUE</div><br>${d.venue}<br><br>
        <div class="event-label">ARTISTS</div><br>${d.artists.join("<br>")}
    `;
    }
    if (previewVideos) {
        previewVideos.innerHTML = "";
    }
}

/* RELEASE POPUP */
function previewRelease(id) {

    // ENABLE SCROLL on popup open
    document.body.style.overflow = "auto";
    document.documentElement.style.overflow = "auto";

    const d = RELEASE_DATA[id];
    if (!d || !previewBox) return;

    previewBox.style.display = "flex";
    // place popup under LABEL list
    positionPopupBelowList("#label .release-list");

    if (previewImg) {
        previewImg.src = d.img;
    }

    const q = d.quotes.length
        ? d.quotes.map(c => `<p>${c}</p>`).join("")
        : "";

    if (previewInfo) {
        previewInfo.innerHTML = `
        <div class="event-label">${d.title}</div>
        ${q}
        ${d.bandcamp}
    `;
    }

    if (previewVideos) {
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
}

/* CLICK-AWAY CLOSE */
document.addEventListener("click", e => {
    if (!previewBox) return;

    const isPopup = previewBox.contains(e.target);
    const clickableText = e.target.closest(".text.clickable");

    if (!isPopup && !clickableText) {

        previewBox.style.display = "none";

        // DISABLE SCROLL again when popup closes
        document.body.style.overflow = "hidden";
        document.documentElement.style.overflow = "hidden";
    }
});

function hidePreview(force = false) {
    if (!previewBox) return;

    if (force) {
        previewBox.style.display = "none";

        // Also disable scroll on forced close
        document.body.style.overflow = "hidden";
        document.documentElement.style.overflow = "hidden";
    }
}

/* =========================
   FOOTER LOGO MOUSE PLAYBACK
========================= */

const footerVideo = document.getElementById("footer-logo");

// Detect mobile devices
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

if (footerVideo) {
    if (isMobile) {
        footerVideo.loop = true;
        footerVideo.autoplay = true;
        footerVideo.play().catch(() => {});
    } else {
        footerVideo.loop = true;
        footerVideo.pause();

        let lastMove = Date.now();

        function playOnMove() {
            lastMove = Date.now();
            footerVideo.play().catch(() => {});
        }

        function checkStop() {
            const now = Date.now();
            if (now - lastMove > 80) {
                footerVideo.pause();
            }
            requestAnimationFrame(checkStop);
        }

        document.addEventListener("mousemove", playOnMove);
        requestAnimationFrame(checkStop);
    }
}
