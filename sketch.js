var  rect1,rect2;



function setup() {
  createCanvas(800,400);
 rect1= createSprite(400, 200, 50, 50);
rect1.shapeColor='red';

rect2=createSprite(100,200,50,50);
rect2.shapeColor='black';
}

function draw() {
  background(220,100,0);
  rect1.x=mouseX;
  rect1.y=mouseY ;
  console.log(rect2.x-rect1.x);
  if(rect1.x-rect2.x<(rect1.width+rect2.width)/2 &&
  rect2.x-rect1.x<(rect1.width+rect2.width)/2&&
  rect1.y-rect2.y<(rect1.height+rect2.height)/2&&
  rect2.y-rect1.y<(rect1.height+rect2.height)/2 ){
    rect1.shapeColor='blue'
    rect2.shapeColor='blue'
  }else{
    rect1.shapeColor='red'
    rect2.shapeColor='black'
  }
  

  drawSprites();
}