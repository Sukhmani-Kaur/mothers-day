var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;
var trackImg,car1_Img,car2_Img,car3_Img,car4_img,groundImg;

function preload(){
  //trackImg=loadImage("images/track.jpg");
  //car1_Img=loadImage("images/car1.png");
  //car2_Img=loadImage("images/car2.png");
  //car3_Img=loadImage("images/car3.png");
  //car4_img=loadImage("images/car4.png");
  //groundImg=loadImage("images/ground.png");
  trackImg=loadImage("floral.jpg");
  car1_Img=loadImage("mothers day.jpg");
  car2_Img=loadImage("mompic.jpg");
  //car3_Img=loadImage("mypic.jpg");


}


function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState===2){
    game.end();
  }
}
