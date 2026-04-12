const images = [
  "img1.jpg",
  "img2.jpg",
  "img3.jpg"
  "img5.jpg"
   "img5.jpg"
  "poster.png"
"poster2.png"
];

let i = 0;
let timer;

// ELEMENT
const slide = document.getElementById("slide");
const dotsContainer = document.getElementById("dots");

// INIT DOTS
function createDots(){
  images.forEach((_, index)=>{
    const dot = document.createElement("span");
    dot.classList.add("dot");
    dot.onclick = ()=> goToSlide(index);
    dotsContainer.appendChild(dot);
  });
}

// UPDATE SLIDE
function showSlide(index){
  i = index;

  slide.style.opacity = 0;

  setTimeout(()=>{
    slide.src = images[i];
    slide.style.opacity = 1;
    updateDots();
  },200);
}

// NEXT
function nextSlide(){
  i = (i+1)%images.length;
  showSlide(i);
}

// PREV
function prevSlide(){
  i = (i-1+images.length)%images.length;
  showSlide(i);
}

// DOT ACTIVE
function updateDots(){
  const dots = document.querySelectorAll(".dot");
  dots.forEach(d=>d.classList.remove("active-dot"));
  dots[i].classList.add("active-dot");
}

// GO TO SLIDE
function goToSlide(index){
  showSlide(index);
}

// AUTO PLAY
function startAuto(){
  timer = setInterval(nextSlide,3000);
}

// PAUSE ON HOVER
document.addEventListener("DOMContentLoaded",()=>{
  createDots();
  updateDots();
  startAuto();

  const container = document.querySelector(".slider-container");

  container.addEventListener("mouseenter",()=>clearInterval(timer));
  container.addEventListener("mouseleave",startAuto);
});
