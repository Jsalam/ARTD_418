let particle;
let paddle;

// Set up canvas
function setup() {
    createCanvas(400, 400).parent('sketchDiv');

    // Define particle properties
    particle = {
        vect: createVector(200, 200),
        speed: 2,
        direction: 1,
    };

    // Define paddle properties
    paddle = {
        x: 0,
        y: 380,
        width: 80,
        height: 20
    };
}

// Update particle position
function updateParticle() {
    particle.vect.x += particle.speed * particle.direction;
    particle.vect.y += particle.speed * particle.direction;

    // Check if particle hits upper or lower border
    if (particle.vect.y <= 0 || particle.vect.y >= height) {
        particle.direction *= -1; // Reverse Y direction
    }
    
    // Check if particle hits paddle
    if (particle.vect.y + 10 >= paddle.y && particle.vect.y + 10 <= paddle.y + paddle.height) {
        if (particle.vect.x >= paddle.x && particle.vect.x <= paddle.x + paddle.width) {
            particle.direction *= -1; // Reverse Y direction
        }
    }
}


// Draw function
function draw() {
    background(220);
    ellipse(particle.vect.x, particle.vect.y, 20, 20);
    updateParticle();
    
    paddle.x = mouseX - paddle.width / 2; // Update paddle x-coordinate based on mouseX
    
    rect(paddle.x, paddle.y, paddle.width, paddle.height);
}
