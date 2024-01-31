// quotes from https://absoluteshakespeare.com/trivia/quotes/quotes.htm

let quote1;
let quote2;
let result;
let myFont1;

function preload() {
    myFont1 = loadFont('fonts/SyrCOMAntioch.otf');
}

function setup() {
    createCanvas(400, 400).parent('sketch-container');

    // Shakespeare, The Merchant of Venice 
    quote1 = "But love is blind, and lovers cannot see";
    quote2 = "I like not fair terms and a villain's mind";
}

function draw() {
    background(220);

    // find where is the word 'lovers' in the first quote
    let indexQ1 = quote1.indexOf("lovers");

    // let's get the index from the mouse postion
    let lengthQ2 = quote2.length;
    let indexQ2 = map(mouseX, 0, width, 0, lengthQ2);

    // get substrings of both quotes
    let subQ1 = quote1.substring(0, indexQ1);
    let subQ2 = quote2.substring(0, indexQ2)

    // concatenate strings
    result = subQ1 + subQ2

    textFont(myFont1);
    textSize(24)
    text(result, 40, 50, 300);
}