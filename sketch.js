var grid = 50;
var width = 1366;
var carGroup1,logGroup1;
var grassHeight = 100;
var gameState = "play";
var carAnimation1,carAnimation2, logAnimation, playerAnimation;
var school;
var player;
var city;
var gameState = "play";
function preload()
{
  carAnimation1=loadAnimation("images/car1.png");
  carAnimation2=loadAnimation("images/car2.png");
  playerAnimation=loadAnimation("images/Player-03.png");
  logAnimation=loadAnimation("images/log2.png");
  city = loadAnimation("images/city1.png");
 
}

function setup() {
  createCanvas(1366,700);
  carGroup1 = new Group();
  logGroup1 = new Group();


  city = createSprite(width/2,-1500);
  city.addAnimation("city",city)
  
  for(var i =0; i<6; i++){
    var bottomGrass1 = createSprite(683,height-50-(i*400),width,grassHeight);
    if(i%2===0){
      var road = createSprite(683,height-150-(i*400)-grassHeight,width,300);
      road.shapeColor ="black"

    }

    bottomGrass1.shapeColor = "green"
  }
 
for(var i=0; i<40; i++){
  cars = new Car(2);
  carGroup1.add(cars.spt);
}
for(var i=0; i<40; i++){
  logs = new Log();
  
  logGroup1.add(logs.spt);
}

for(i=1; i<logGroup1.length;i++){
  if(logGroup1[i].x<0){
    logGroup1[i].x=width;
  }
}

 player = new Player(width/2,height-25);

 
   
 }

function draw() {
  background("skyblue");

translate(0,-player.spt.y+height-150);
  gap = 100;

  if(city.isTouching(player.spt)){
    gameState = "Win"
  }

  if(gameState === "Win"){
    stroke("Green");
    fill("green");
    textSize(40);
    text("Congratulations!",width/2-250,-1700);
    carGroup1.destroyEach();
    logGroup1.destroyEach();
 
  }

  drawSprites();
}

function keyPressed(){
  if(keyDown("up")){
    player.move(0,-2);
}else if(keyDown("down")){
  player.move(0,2);

}else if(keyDown("right")){
  player.move(2,0);
}else if(keyDown("left")){
  player.move(-2,0);
}
}

