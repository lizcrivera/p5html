function setup() {
  createCanvas(650, 650);
}

function draw() {
  background(100,0,200);
  
 push();
  translate(mouseX, mouseY, pmouseX, pmouseY);
  rotate(frameCount / -20.0);
  fill(225, 204, 0)
  star(0, 0, 60, 140, 5);
  pop();
  textSize (45)
  text('star light, star bright', 10, 40 )
  fill(0, 134, 153)
  text('first star I see tonight', 70, 80 )
}

function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
