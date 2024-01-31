let font;


let example2 = function (pE) {

    pE.preload = function () {
        font = pE.loadFont("font/PlayfairDisplay-Medium.ttf");
    }

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
    }
}

let pE = new p5(example2, "sketchDiv2");