
var img;
let thebody = document.querySelector('body');
let donePressed = document.getElementById('done');
let thep = document.querySelector('p');
let backImg = document.querySelector('img');
let btn = document.querySelector('button');
let header = document.querySelector('h1');
 
donePressed.addEventListener('click', pressed);

function preload() {
    img = loadImage("bandw.png");
}

function pressed() {
    var t = new Date();
    console.log("working!!!");
    thebody.style.backgroundColor = "black";
    backImg.src = "bandw.png";
    backImg.width = 500;
    backImg.height = 700;
    backImg.style.position = "absolute";
    backImg.style.padding = 0;
    backImg.style.top = "50px";
    backImg.style.left = "10%";
    btn.style.color = "rgb(0, 0, 0, 0)";
    btn.style.backgroundColor = "rgb(0, 0, 0, 0)";
    header.textContent = "YOU WATCHED THE PRISONER TILL: " + t;
    thep.textContent = "The idea of detention in a closed space as a form of human punitive corrective action seems to have come in very much in the thirteenth and fourteenth centuries—at the time perspective and pictorial space was developing in our Western world. The whole concept of enclosure as a means of con- straint and as a means of classifying doesn't work as well in our electronic world. The new feeling that people have about guilt is not something that can be privately assigned to some individual, but is, rather, something shared by everybody, in some mysterious way. This feeling seems to be returning to our midst. In tribal societies we are told that it is a familiar reaction, when some hideous event occurs, for some people to say, 'How horrible it must be to feel like that,' instead of blaming some- body for having done something horrible. This feel- ing is an aspect of the new mass culture we are moving into—a world of total involvement in which everybody is so profoundly involved with every- body else and in which nobody can really imagine what private guilt can be anymore.";
}

document.addEventListener('keydown', theEvent => {
    console.log("key UwU");
})