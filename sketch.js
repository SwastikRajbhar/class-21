
/*var fix,move;
var o1,o2,o3,o4;

function setup() {
  createCanvas(1200,800);
fix=createSprite(600,400,50,80);
fix.shapeColor="green";
fix.debug=true;
move=createSprite(400,200,80,30);
move.shapeColor="green";
move.debug=true;

o1=createSprite(100,100,50,50);
o1.shapeColor="green";

o2=createSprite(200,100,50,50);
o2.shapeColor="green";

o3=createSprite(300,100,50,50);
o3.shapeColor="green";

o4=createSprite(400,100,50,50);
o4.shapeColor="green";



}

function draw() {
  background(255,255,255); 
  
  move.x=World.mouseX;
  move.y=World.mouseY;

isTouching(move,o2);
isTouching(move,o3);
isTouching(move,o4);
isTouching(move,o1);
isTouching(move,fix);


  drawSprites();
}

function isTouching(a,b){
  if(a.x-b.x<b.width/2+a.width/2
    &&b.x-a.x<b.width/2+a.width/2
    &&a.y-b.y<b.height/2+a.height/2
    &&b.y-a.y<b.height/2+a.height/2){
  a.shapeColor="red";
  b.shapeColor="red";
   }
  
  else{
    a.shapeColor="green";
    b.shapeColor="green";
  }
}*/

var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
bounceOff(movingRect,fixedRect);
 
  drawSprites();
}
function bounceOff(a,b){
  if (a.x - b.x < b.width/2 + a.width/2
    && b.x - a.x < b.width/2 + a.width/2) {
  a.velocityX = b.velocityX * (-1);
  b.velocityX = a.velocityX * (-1);
}
if (a.y - b.y < b.height/2 + a.height/2
  && b.y - a.y < b.height/2 + a.height/2){
  a.velocityY = a.velocityY * (-1);
  b.velocityY = b.velocityY * (-1);
}
}