var speed = 0.5;
var rnd;
var x;
var y;
var m;
function setup() {
  createCanvas(720, 400);
  y = 50;
}

function draw() {
  background(0);
  stroke(255);

  speed = speed + 1;

  if (speed > width) {
    speed = 0.5
    y = getRandomArbitrary(0, height);
  }
  //console.log(rnd);
  ellipse(speed,y, 50, 50);
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
