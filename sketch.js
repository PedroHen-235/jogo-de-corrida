var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player;
var playercount;
var gamestate
var pistaimg
var spritecar1,imgcar1
var spritecar2,imgcar2
var matrixdecarros=[]
var allPlayers



function preload() {
  backgroundImage = loadImage("./assets/planodefundo.png");
  pistaimg = loadImage("./assets/PISTA.png")
  imgcar1 = loadImage("./assets/car1.png")
  imgcar2 = loadImage("./assets/car2.png")

}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getstate()
  game.start();

}

function draw() {
  background(backgroundImage);
  if(playercount===2){
game.update(1)
  }
if(gamestate===1){
game.play()
}
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
