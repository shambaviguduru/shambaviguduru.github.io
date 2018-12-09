var y = 100;
var dy = 3;
function setup() {
  createCanvas(1000, 700 );
}

function draw() {
  background(0);
   ellipse(500, y, 50, 50);
  fill(random(255),random(255),random(255));
  y +=  dy;
  if(y+25 > height || y-25 < 0) {
      dy *= -1;
  }
}
  

