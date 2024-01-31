let fontSize = 12;
let font;

let sntc1;
let sntc2;

let txt;
let yPos;
let finalSentence;
let paragraphCharacterIndex;

let pgraph;

function preload() {
    font = loadFont("font/PlayfairDisplay-Medium.ttf");
    txt = loadStrings("assets/words.txt");
}

function setup() {
    createCanvas(600, 400).parent("sketchDiv");
    textFont(font);
    // assigne sentence to a variable
    sntc1 = txt[0];
    sntc2 = txt[2];

    // subdivding strings

    // first get a random index
    let index = random(0, sntc1.length)

    //then divide the first string
    sntc1 = sntc1.substring(0, index);

    // get the last index of the second string
    let last = sntc2.length - 1;

    // then divide the second string
    sntc2 = sntc2.substring(index, last);

    finalSentence = sntc1.concat("\n", sntc2);

    paragraphCharacterIndex = 0;

    yPos = height;

    pgraph = createP('').parent("paragraphDiv");
}

function draw() {
    background(" #f4f4f433");

    fontSize = 30;
    textAlign(LEFT, TOP);
    textSize(fontSize);

    fill(0);
    text(sntc1, 30, yPos, width - 50);
    fill(255, 0, 0);
    text(sntc2, 30, yPos + 300, width - 50);

    yPos -= 1;

    if (yPos < -400) {
        yPos = height;
    }

    // this section is for the HTML element

    if (paragraphCharacterIndex > finalSentence.length) {
        paragraphCharacterIndex = 0;
    }

    paragraphCharacterIndex += 0.6;

    pgraph.html(finalSentence.substring(0, paragraphCharacterIndex));
    
    pgraph.style("scrollTop", "30px"); 

    window.scrollTo(0, pgraph.elt.scrollHeight)
}