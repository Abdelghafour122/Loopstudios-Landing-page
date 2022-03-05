const hamButton = document.querySelector("#ham");
const outlaySec = document.querySelector(".outlay");

const openImg =
  "http://127.0.0.1:5500/loopstudios-landing-page/images/icon-hamburger.svg";
const closeImg =
  "http://127.0.0.1:5500/loopstudios-landing-page/images/icon-close.svg";
hamButton.addEventListener("click", () => {
  hamButton.src === openImg
    ? (hamButton.src = closeImg)
    : (hamButton.src = openImg);
  outlaySec.classList.toggle("fade-in");
});
