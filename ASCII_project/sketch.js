// Image to ASCII
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/166-ascii-image.html
// https://youtu.be/55iwMYv8tGI


let sourceText;
let alma;
const density = "Ñ@#W$9876543210?!abc;:+=-,._ ";


function preload() {
  alma = loadImage("images/alma50.png");
}

function setup() {
  createCanvas(800, 800);
  textFont("Courier-Bold");
}

function draw() {
  background(0);

  let charIndex = 2;
  // distribute the canvas with on the number of horizontal pixels
  let w = width / alma.width;
  // distribute the canvas height on the number of vertical pixels
  let h = height / alma.height;
  // load the pixels array from the image
  alma.loadPixels();
  // loop through the pixels array
  for (let j = 0; j < alma.height; j++) {
    for (let i = 0; i < alma.width; i++) {

      // read each pixel's color
      const pixelIndex = (i + j * alma.width) * 4;
      const r = alma.pixels[pixelIndex + 0];
      const g = alma.pixels[pixelIndex + 1];
      const b = alma.pixels[pixelIndex + 2];

      // calculate the brightness
      const avg = (r + g + b) / 3;
      // set the color
      fill(avg);
      // set the size
      textSize(8);
      // center the text
      textAlign(CENTER, CENTER);
      // compute the row and column position
      let column = i * w + w * 0.5;
      let row = j * h + h * 0.5
      // draw the ASCII character
      text(row, column, row);

    }
  }
}