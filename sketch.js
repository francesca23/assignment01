function setup() {
  createCanvas(800,600);
  background(213,232,250);
  
  noStroke();
  fill(180,205,230);
  rect(0,480,800,120);
}

function draw() {
  //head
  noStroke();
  fill(83,89,95);
  ellipse(400,150,180,140);
  
  //eyes
  noStroke();
  fill(255,255,255);
  ellipse(370,140,20,20);
  
  noStroke();
  fill(255,255,255);
  ellipse(430,140,20,20);
  
  stroke(255,255,255);
  strokeWeight(2);
  line(380,140,420,140);
  
  //body
  noStroke();
  fill(83,89,95);
  ellipse(400,350,250,300);
  
  noStroke();
  fill(255,255,255);
  ellipse(400,380,150,200);
  
  stroke(0,0,0);
  strokeWeight(3);
  line(390,400,410,420);
  
  stroke(0,0,0);
  strokeWeight(3);
  line(390,420,410,400);
  
  //arms
  noStroke();
  fill(108,116,124);
  ellipse(280,350,60,150);
  
  noStroke();
  fill(108,116,124);
  ellipse(520,350,60,150);
  
  //shadow
  noStroke();
  fill(150,177,203);
  ellipse(400,550,300,30);
}