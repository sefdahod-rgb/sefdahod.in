const images = [
  "qr.jpeg",
  "img1.jpg",
  "img2.jpg",
  "img3.jpg"
  "img4.jpg"
"img5.jpg"
"img6.jpg"
"poster.png"
"poster2.png"
];

let i = 0;

function startSlider(){

  const imgElement = document.getElementById("slide");

  if(!imgElement){
    console.warn("Slider image element not found: #slide");
    return;
  }

  setInterval(() => {
    i = (i + 1) % images.length;
    imgElement.src = images[i];
  }, 3000);
}

// start slider when page loads
window.onload = startSlider;
