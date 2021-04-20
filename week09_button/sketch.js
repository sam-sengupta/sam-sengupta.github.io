
var gif;
let thebody = document.querySelector('body');
let rightpressed = document.getElementById('press');
let wrongpressed = document.getElementById('dontpress')
let thetitle = document.querySelector('h1');
 
rightpressed.addEventListener('click', correctPress);
wrongpressed.addEventListener('click', wrongPress);

function preload() {
    gif = loadImage("200.gif");
}

function correctPress() {
    // console.log("working!!!");
    thebody.style.backgroundColor = "black";
    thetitle.textContent = "I GUESS U REALLY LIKE THE RULES. YAWN. :/";
    thetitle.style.color = "white";
}

function wrongPress() {
    // console.log("working 222");
    thebody.style.backgroundImage = 'url(200.gif)';
    thebody.style.color = "black";
    thetitle.textContent = "C H A O S";
    thetitle.style.color = "white";
}

document.addEventListener('keydown', theEvent => {
    console.log("key UwU");
})