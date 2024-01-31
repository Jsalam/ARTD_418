let string1;
let string2;
let string3;
let string4;
let string5;
let string6;

let yOffset1;
let yOffset2;
let yOffset3;
let yOffset4;
let yOffset5;
let yOffset6;

let xMargin;
let xOffset1;
let xOffset2;
let xOffset3;
let xOffset4;
let xOffset5;
let xOffset6;

let charWidth;
let txtSize;
let font;
let fontBold;

function preload() {
    font = loadFont('fonts/JetBrainsMono-Light.ttf');
    fontBold = loadFont('fonts/JetBrainsMono-Bold.ttf');
}

function setup() {
    createCanvas(400, 400);

    string1 = 'try';
    string2 = 'to';
    string3 = 'make';
    string4 = 'sense';
    string5 = 'of';
    string6 = 'this';

    yOffset1 = random(20, 380);
    yOffset2 = random(20, 380);
    yOffset3 = random(20, 380);
    yOffset4 = random(20, 380);
    yOffset5 = random(20, 380);
    yOffset6 = random(20, 380);

    txtSize = 40;
    charWidth = txtSize / 2;
    xOffset1 = charWidth * random(-4, 4);
    xOffset2 = charWidth * random(-4, 4);
    xOffset3 = charWidth * random(-4, 4);
    xOffset4 = charWidth * random(-4, 4);
    xOffset5 = charWidth * random(-4, 4);
    xOffset6 = charWidth * random(-4, 4);
    xMargin = 150;

    // setup text attributes

    textSize(txtSize);
}

function draw() {
    background(230, 210, 200, 20);
    fill(0, 200, 200);

    // ***** word 1 ******
    textFont(fontBold);
    text(string1.charAt(0), xMargin, mouseY);
    textFont(font);
    text(string1.charAt(1), xMargin + charWidth, yOffset1 - mouseY);
    text(string1.charAt(2), xMargin + 2 * charWidth, mouseY);

    // ***** word 2 ******
    textFont(fontBold);
    text(string2.charAt(0), xMargin + xOffset1, mouseY + 20);
    textFont(font);
    text(string2.charAt(1), xMargin + xOffset1 + charWidth, yOffset2 - mouseY + 20);

    // ***** word 3 ******
    textFont(fontBold);
    text(string3.charAt(0), xMargin + xOffset2, mouseY + 40);
    textFont(font);
    text(string3.charAt(1), xMargin + xOffset2 + 1 * charWidth, yOffset3 - mouseY + 40);
    text(string3.charAt(2), xMargin + xOffset2 + 2 * charWidth, yOffset3 - mouseY + 40);
    text(string3.charAt(3), xMargin + xOffset2 + 3 * charWidth, mouseY + 40);

    // ***** word 4 ******
    textFont(fontBold);
    text(string4.charAt(0), xMargin + xOffset3, mouseY + 60);
    textFont(font);
    text(string4.charAt(1), xMargin + xOffset3 + 1 * charWidth, yOffset4 - mouseY + 60);
    text(string4.charAt(2), xMargin + xOffset3 + 2 * charWidth, yOffset4 - mouseY + 60);
    text(string4.charAt(3), xMargin + xOffset3 + 3 * charWidth, yOffset4 - mouseY + 60);
    text(string4.charAt(4), xMargin + xOffset3 + 4 * charWidth, mouseY + 60);

    // ***** word 5 ******
    textFont(fontBold);
    text(string5.charAt(0), xMargin + xOffset4, mouseY + 80);
    textFont(font);
    text(string5.charAt(1), xMargin + xOffset4 + 1 * charWidth, yOffset5 - mouseY + 80);

    // ***** word 6 ******
    textFont(fontBold);
    text(string6.charAt(0), xMargin + xOffset6, mouseY + 100);
    textFont(font);
    text(string6.charAt(1), xMargin + xOffset6 + 1 * charWidth, yOffset6 - mouseY + 100);
    text(string6.charAt(2), xMargin + xOffset6 + 2 * charWidth, yOffset6 - mouseY + 100);
    text(string6.charAt(3), xMargin + xOffset6 + 3 * charWidth, mouseY + 100);
}