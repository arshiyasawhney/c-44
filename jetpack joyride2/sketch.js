var player, playerImage;
var bg, bgImage
var coin, coinImg;
function preload(){
  playerImage = loadImage("images/character1.png");
  bgImage = loadImage("images/bg.png");
}


function setup(){
  createCanvas(windowWidth,windowHeight);
  background = createSprite(width/2,height/2);
  background.addImage(bgImage);
  background.scale = 2;
  player = createSprite(width/8,height);
  player.addImage(playerImage);
  player.scale = 0.5;
  edges = createEdgeSprites();
  background.velocityX = -2
}


function draw(){
  drawSprites();
  spawnCoins();
if (keyDown(UP_ARROW)){
player.y -= 10;
}
if(keyDown(DOWN_ARROW)){
  player.y += 10;
}
player.collide(edges[2])
player.collide(edges[3])
if(background.x<width/4){
  background.x = width/2;
}
}
function spawnCoins(){
  if (frameCount % 60 === 0){
    var coin = createSprite(width,100);
    coin.y = Math.round(random(80,120));
    coin.velocityX = -3;
    coin.lifetime = 200;
  }
}