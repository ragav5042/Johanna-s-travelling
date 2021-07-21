
function preload(){
ship1=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
bg=loadImage("sea.png");
}
function setup(){
  createCanvas(400,400);
  back=createSprite(100,100,20,20)
  back.addImage("bac1", bg)
  back.scale=0.3
  ship=createSprite(100 ,125,120,120)
  ship.addAnimation("ship2", ship1)
  ship.scale=0.1
  edges = createEdgeSprites();
  
}

function draw() {
 
  background("white");
  back.velocityX=-5
  if(back.x<0){
    
    back.x=(back.width)/8
   }

  //  back.x = 200
   console.log(back)
 drawSprites();
}