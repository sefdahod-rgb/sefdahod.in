let images = [
  "img1.jpg",
  "img2.jpg",
  "img3.jpg"
];

let i = 0;

setInterval(() => {
  document.getElementById("slide").src = images[i];
  i = (i + 1) % images.length;
}, 3000);