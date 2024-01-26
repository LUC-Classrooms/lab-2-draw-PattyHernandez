function setup(){
  createCanvas(600, 400);
}

function draw(){
  background(200);
  // add your drawing code here ...
  fill (155, 200 , 360)
  ellipse(width/2, height/2, 100)
triangle(width/2-45, height/2-55, width/2-25, height/2-40, width/2-45, height/2-20)
triangle(width/2+45, height/2-55, width/2+25, height/2-40, width/2+45, height/2-20)
ellipse(width/2, height/2 ,100);// head
ellipse(width/2-20, height/2- 10, 10);// left eye
ellipse(width/2+ 20, height/2-10, 10);//right eye
triangle(width/2 -5, height/2 + 5, width/2 + 5, height/2, width/2, height/2+ 8)
line(width/2-10 , height/2+ 5, width/2-25 , height/2);// left top whisker
line(width/2+10 , height/2+ 5, width/2+25 , height/2);// right top whisker
line(width/2-10 , height/2+ 5, width/2-25 , height/2+5) ;// left middle whisker
line(width/2-10 , height/2+ 5, width/2-25 , height/2) 
