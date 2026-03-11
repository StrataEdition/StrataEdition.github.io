/* =========================
   UTILS & DEVICE DETECTION
========================= */

const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

// Helper to handle overflow without fighting the CSS Media Queries
function setScrollState(shouldLock) {
    if (isMobile) {
        // Mobile should always be scrollable
        document.body.style.overflow = "auto";
        document.documentElement.style.overflow = "auto";
    } else {
        // Desktop can be locked/unlocked as needed
        const state = shouldLock ? "hidden" : "auto";
        document.body.style.overflow = state;
        document.documentElement.style.overflow = state;
    }
}

/* =========================
   SHOW SITE
========================= */

function showSite() {
    document.getElementById('landing-container').style.display = 'none';
    document.getElementById('main-site').style.display = 'block';
    
    // Initial scroll state check
    setScrollState(false);
    
    showPage('label', document.querySelector('a[onclick*="label"]'));
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
const previewBox   = document.getElementById("event-preview");
const previewImg   = document.getElementById("preview-img");
const previewInfo  = document.getElementById("preview-info");
const previewVideos = document.getElementById("preview-videos");

const POPUP_OFFSET = 20;

function positionPopupBelowList(listSelector) {
    const list    = document.querySelector(listSelector);
    const content = document.querySelector(".content");
    if (!list || !content || !previewBox || isMobile) return; // Don't manually position on mobile

    const listRect    = list.getBoundingClientRect();
    const contentRect = content.getBoundingClientRect();
    const relativeTop = (listRect.bottom - contentRect.top) + POPUP_OFFSET;

    previewBox.style.top = relativeTop + "px";
}

/* EVENT DATA */
const EVENT_DATA = {
      "EVT-006": {
        img: "assets/STRATA-6-ENGINE-ROOMS.jpg",
        venue: "THE ENGINE ROOMS [LONDON]",
        artists: ["PIETRO BARDINI","MIEDO TOTAL","ENGLAND'S COUNCIL OF LEGISLATION AND GOVERNING BODY OF HYPER REAL SIMULATIONS AND CONSTRUCTS","NEW NAME WORLD TOUR"]
    },
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
    "STR-005": {
        img: "assets/ParallelRooms1024x1024.jpg",
        title: "PARALLEL ROOMS",
        quotes: [],
        bandcamp: `<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=1255637387/size=large/bgcol=ffffff/linkcol=333333/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://strataedition.bandcamp.com/album/parallel-rooms">Parallel Rooms by Pietro Bardini</a></iframe>`,
        youtube: []
    },
    "STR-004": {
        img: "assets/MemoryRecoilMidRes.jpg",
        title: "MEMORY RECOIL",
        quotes: ['Shifting from swirling sound design to teetering piano motifs, Memory Recoil ventures deeper into the heart of the hard drive...'],
        bandcamp: `<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=707364654/size=large/bgcol=ffffff/linkcol=333333/tracklist=false/artwork=small/transparent=true/" seamless></iframe>`,
        youtube: ["iX9x_s5Wp7E"]
    },
    "STR-003": {
        img: "assets/UmweltArtwork.jpg",
        title: "UMWELT",
        quotes: [`"Onas Ueno’s Umwelt EP is a haunting, immersive journey..."`],
        bandcamp: `<iframe style="border:0; width:100%; height:120px;" src="https://bandcamp.com/EmbeddedPlayer/album=2963886556/size=large/bgcol=ffffff/linkcol=333333/tracklist=false/artwork=none/transparent=true/" seamless></iframe>`,
        youtube: []
    },
    "STR-002": {
        img: "assets/EttrickSitesCover1024x1024.jpg",
        title: "ETTRICK SITES",
        quotes: [`"Named after Loch Ettrick in the Scottish Borders..."`],
        bandcamp: `<iframe style="border:0; width:100%; height:120px;" src="https://bandcamp.com/EmbeddedPlayer/album=4057023817/size=large/bgcol=ffffff/linkcol=333333/tracklist=false/artwork=none/transparent=true/" seamless></iframe>`,
        youtube: ["AvJs1v066kA", "aFJNOryu5lU"]
    },
    "STR-001": {
        img: "assets/ScanDiskCover.jpg",
        title: "SCANDISK",
        quotes: [`"Snapshots of voices and digital debris..."`],
        bandcamp: `<iframe style="border:0; width:100%; height:120px;" src="https://bandcamp.com/EmbeddedPlayer/album=1119581680/size=large/bgcol=ffffff/linkcol=333333/tracklist=false/artwork=none/transparent=true/" seamless></iframe>`,
        youtube: ["npcC32gz2KQ", "mrEraBWjmkA", "3WujZG_iTCk"]
    }
};

/* EVENT POPUP */
function previewEvent(id) {
    setScrollState(false); // Enable scroll when preview is open
    const d = EVENT_DATA[id];
    if (!d || !previewBox) return;

    previewBox.style.display = "flex";
    positionPopupBelowList("#events .release-list");

    if (previewImg) previewImg.src = d.img;
    if (previewInfo) {
        previewInfo.innerHTML = `
            <div class="event-label">VENUE</div><br>${d.venue}<br><br>
            <div class="event-label">ARTISTS</div><br>${d.artists.join("<br>")}
        `;
    }
    if (previewVideos) previewVideos.innerHTML = "";
}

/* RELEASE POPUP */
function previewRelease(id) {
    setScrollState(false);
    const d = RELEASE_DATA[id];
    if (!d || !previewBox) return;

    previewBox.style.display = "flex";
    positionPopupBelowList("#label .release-list");

    if (previewImg) previewImg.src = d.img;
    const q = d.quotes.length ? d.quotes.map(c => `<p>${c}</p>`).join("") : "";
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
                `<iframe src="https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1" frameborder="0" allowfullscreen></iframe>`
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
        // Only lock scroll on desktop when preview is hidden
        setScrollState(true);
    }
});

function hidePreview(force = false) {
    if (!previewBox) return;
    if (force) {
        previewBox.style.display = "none";
        setScrollState(true);
    }
}

/* =========================
   FOOTER LOGO MOUSE PLAYBACK
========================= */

const footerVideo = document.getElementById("footer-logo");

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
            if (Date.now() - lastMove > 80) footerVideo.pause();
            requestAnimationFrame(checkStop);
        }
        document.addEventListener("mousemove", playOnMove);
        requestAnimationFrame(checkStop);
    }
}