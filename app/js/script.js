const hamButton = document.querySelector("#ham");
const outlaySec = document.querySelector(".outlay");

const openImg = "./images/icon-hamburger.svg";
const closeImg = "./images/icon-close.svg";
hamButton.addEventListener("click", () => {
  hamButton.src === openImg
    ? (hamButton.src = closeImg)
    : (hamButton.src = openImg);
  outlaySec.classList.toggle("fade-in");
});
