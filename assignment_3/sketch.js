// Get two sentences

let sntnc1, sntnc2, sntnc3, sntnc4;

let s1Start, s1End, s2Start, s2End, s3Start, s3End, s4Start, s4End;

let s1MarginX, s2MarginX, s3MarginX, s4MarginX;

let s1StartOff,
    s1EndOff,
    s2StartOff,
    s2EndOff,
    s3StartOff,
    s3EndOff,
    s4StartOff,
    s4EndOff;

let charWidth = 12.5;

let fontStyle;

function preload(){
    fontStyle = loadFont("fonts/JetBrainsMono-Bold.ttf")
}

function setup() {
    createCanvas(800, 400);

    sntnc1 = "Do you think I am easier to be played on than a pipe?";
    sntnc2 = "For you and I are past our dancing days";
    sntnc3 = "So wise so young, they say, do never live long";
    sntnc4 = "Having nothing, nothing can he lose";

    //Split ther first one by a term/index
    let indexTo = sntnc1.indexOf("be");
    s1Start = sntnc1.substring(0, indexTo);
    s1End = sntnc1.substring(indexTo - 1, sntnc1.length);

    //Split the second sentence by words
    indexTo = sntnc2.indexOf("past");
    s2Start = sntnc2.substring(0, indexTo);
    s2End = sntnc2.substring(indexTo - 1, sntnc2.length);

    //Split ther first one by a term/index
    indexTo = sntnc3.indexOf("say");
    s3Start = sntnc3.substring(0, indexTo);
    s3End = sntnc3.substring(indexTo - 1, sntnc3.length);

    //Split the second sentence by words
    indexTo = sntnc4.indexOf("can");
    s4Start = sntnc4.substring(0, indexTo);
    s4End = sntnc4.substring(indexTo - 1, sntnc4.length);

    // initialize the margins
    s1MarginX = random(30, 150);
    s2MarginX = random(30, 150);
    s3MarginX = random(30, 150);
    s4MarginX = random(30, 150);

    // initialize the vertical offsets
    s1StartOff = random(30, height - 20);
    s1EndOff = random(30, height - 20);
    s2StartOff = random(30, height - 20);
    s2EndOff = random(30, height - 20);
    s3StartOff = random(30, height - 20);
    s3EndOff = random(30, height - 20);
    s4StartOff = random(30, height - 20);
    s4EndOff = random(30, height - 20);

    console.log(s1Start);
    console.log(s1End);
    console.log(s2Start);
    console.log(s2End);

    textFont(fontStyle);

    textSize(22);
}

function draw() {
    background("#FFC30020");
    noStroke();

    fill("#900C3F")

    // first sentence
    let s1StartPos = map(mouseY, 0, height, s1EndOff, s1StartOff);
    let s1EndPos = map(mouseY, 0, height, s1StartOff, s1EndOff);
    text(s1Start, s1MarginX, s1StartPos);
    text(s1End, s1MarginX + s1Start.length * charWidth, s1EndPos);

    // second sentence
    let s2StartPos = map(mouseY, 0, height, s2EndOff, s2StartOff);
    let s2EndPos = map(mouseY, 0, height, s2StartOff, s2EndOff);
    text(s2Start, s2MarginX, s2StartPos);
    text(s2End, s2MarginX + s2Start.length * charWidth, s2EndPos);

    // third sentence
    let s3StartPos = map(mouseY, 0, height, s3EndOff, s3StartOff);
    let s3EndPos = map(mouseY, 0, height, s3StartOff, s3EndOff);
    text(s3Start, s3MarginX, s3StartPos);
    text(s3End, s3MarginX + s3Start.length * charWidth, s3EndPos);

    // fourth sentence
    let s4StartPos = map(mouseY, 0, height, s4EndOff, s4StartOff);
    let s4EndPos = map(mouseY, 0, height, s4StartOff, s4EndOff);
    text(s4Start, s4MarginX, s4StartPos);
    text(s4End, s4MarginX + s4Start.length * charWidth, s4EndPos);
}
