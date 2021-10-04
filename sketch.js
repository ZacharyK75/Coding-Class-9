var box;
var bg_color = "black";
function setup() {
  createCanvas(400,400);
  box = createSprite(200, 200, 50, 50);
  box.shapeColor = "blue";
}

function draw() 
{
  background(bg_color);

  if(keyDown("right")){
    box.velocityX = 5;
  }

  if(keyDown("up")){
    box.velocityY = -5;
  }

  if(keyDown("left")){
    box.velocityX = -5;
  }

  if(keyDown("down")){
    box.velocityY = 5;
  }

  if(keyDown("r")){
    bg_color = "red";
  }

  if(keyDown("p")){
    bg_color = "purple";
  }

  drawSprites();
}




