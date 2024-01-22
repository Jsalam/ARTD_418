// Image to ASCII
// Modified from The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/166-ascii-image.html
// https://youtu.be/55iwMYv8tGI


let sourceText;
let alma;
const density = "Ñ@#W$9?!abc;:+=-,._ ";
let video;


function preload() {
  alma = loadImage("images/alma50.png");
}

function setup() {
  createCanvas(800, 800);
  textFont("Courier-Bold");
  video = createCapture(VIDEO);
  video.size(64, 48);
}

function draw() {
  background(0);

  let charIndex = 2;
  // distribute the canvas with on the number of horizontal pixels
  let w = width / video.width;
  // distribute the canvas height on the number of vertical pixels
  let h = height / video.height;
  // load the pixels array from the image
  video.loadPixels();
  // loop through the pixels array
  for (let j = 0; j < video.height; j++) {
    for (let i = 0; i < video.width; i++) {

      // read each pixel's color
      const pixelIndex = (i + j * video.width) * 4;
      const r = video.pixels[pixelIndex + 0];
      const g = video.pixels[pixelIndex + 1];
      const b = video.pixels[pixelIndex + 2];

      // calculate the brightness
      const avg = (r + g + b) / 3;

      let charIndex = floor(map(avg, 0, 255, 0, density.length));
      // set the color
      fill(avg);
      // set the size
      textSize(w*1.2);
      // center the text
      textAlign(CENTER, CENTER);
      // compute the row and column position
      let column = i * w + w * 0.5;
      let row = j * h + h * 0.5
      // draw the ASCII character
        text(density[charIndex], column, row);

    }
  }
}