const btn = document.querySelector("#myBtn");
const modal = document.querySelector("#myModal");
const span = document.querySelector(".close");
const year = document.querySelector("#info");

const date = new Date();

window.onload = () => {
  year.innerHTML = 'The website is made with ExpressJS and MongoDB. ' + date.getFullYear()
}


btn.addEventListener('click', () => {
    modal.style.display = "flex";
})


span.addEventListener('click', () => {
    modal.style.display = "none";
})


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

