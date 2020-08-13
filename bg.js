// JS DOM
const body = document.querySelector("body");

// consts
const IMG_COUNT = 3;

function paintImage(imgNumber) {
    const img = new Image();
    img.src = `images/${imgNumber + 1}.jpg`;
    img.classList.add("bgImage");
    body.prepend(img);
}

function genRandom() {
    const number = Math.floor(Math.random() * IMG_COUNT);
    return number;
}
function init() {
    const randomNumber = genRandom();
    paintImage(randomNumber);
}
init();
