// ─── Logger ──────────────────────────────────────────────────────────────────
function log(level, msg, data) {
  const ts = new Date().toISOString();
  const prefix = `[SEF][script.js][${ts}]`;
  if (data !== undefined) {
    console[level](`${prefix} ${msg}`, data);
  } else {
    console[level](`${prefix} ${msg}`);
  }
}
// ─────────────────────────────────────────────────────────────────────────────

// FIX: was missing commas between array items — syntax error
const images = [
  "qr.jpeg",
  "img1.jpg",
  "img2.jpg",
  "img3.jpg",
  "img4.jpg",
  "img5.jpg",
  "img6.jpg",
  "poster.png",
  "poster2.png"
];

let i = 0;

function startSlider(){
  log("info", "startSlider: initializing slider", { totalImages: images.length });

  const imgElement = document.getElementById("slide");

  if(!imgElement){
    log("warn", "startSlider: slider image element #slide not found — slider disabled");
    return;
  }

  setInterval(() => {
    i = (i + 1) % images.length;
    imgElement.src = images[i];
    log("info", "startSlider: slide changed", { index: i, src: images[i] });
  }, 3000);
}

// start slider when page loads
window.onload = function() {
  log("info", "window.onload: page loaded, starting slider");
  startSlider();
};
