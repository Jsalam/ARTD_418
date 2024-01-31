let font;

let example = function (p) {

    p.preload = function() {
        font = p.loadFont("font/PlayfairDisplay-Medium.ttf");
    }

    p.setup = function() {
        p.createCanvas(600, 400);
        p.textFont(font);
    }

    p.draw = function() {
        p.background("#DBB68F");

        p.fill("#0892A5")
        // Absolute coordinates 
        p.rect(100, 100, 50, 50);
        p.fill("#BB7E5D")
        p.rect(150, 100, 50, 50);
        p.fill("#0892A5")
        p.rect(200, 100, 50, 50);


        //Relative coordinates
        let w = 50 + p.mouseX / 4;
        p.fill("#610F7F")
        p.rect(100, 200, w, 50);
        p.fill("#B9929F")
        p.rect(100 + w, 200, 50, 50);
        p.fill("#610F7F")
        p.rect(100 + w + 50, 200, w, 50);


        p.fill(0);
        p.textSize(18);

        p.text("Absolute coordinates", 100, 90);
        p.text("Relative coordinates (click and move the mouse)", 100, 190);
    }
}


let example2 = function (pE) {

    pE.setup = function () {
        pE.createCanvas(600, 400);
        pE.textFont(font);
    }

    pE.draw = function () {
        pE.background("#DBB68F");

  

        let gap = pE.map(pE.mouseX, 0, 600, 0, 20);
        let x = 250 ;
        let y = 150 ;
        let w = 100 ;

        pE.fill("#610F7F33")
        pE.rect(x, y, w, w);
        pE.rect(x - gap, y  - gap, w + 2* gap,  w + 2* gap);
        pE.rect(x - 2* gap, y - 2* gap, w + 4 * gap, w + 4 * gap);
        pE.rect(x - 3 * gap, y - 3 * gap, w + 6 * gap, w + 6 * gap);

        pE.fill(0);
        pE.textSize(18);

        pE.text("Relative coordinates (click and move the mouse)", 100, pE.height - 30);
    }
}

let p = new p5(example, "sketchDiv");
let pE = new p5(example2, "sketchDiv2");