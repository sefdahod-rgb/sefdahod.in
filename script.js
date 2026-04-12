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
function login(e){
  e.preventDefault();

  const u = document.getElementById("user").value;
  const p = document.getElementById("pass").value;

  if(u==="admin" && p==="admin123"){
    localStorage.setItem("isAdmin","true");
    alert("Login success");
  }
}
