var ball;
var box,box2,box3;
var dustbimgree;
var paper;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){	
	dustbingreen = loadImage("dustbingreen.png");
	paper = loadImage("paper.png");
}

function setup() {
	createCanvas(800, 700);
	

	engine = Engine.create();
	world = engine.world;
   

	ball=createSprite(100,650,20,20);
	ball.shapeColor=255;
	box=createSprite(600,650,150,20);
	box.shapeColor=255;
	box2=createSprite(670,610,20,100);
	box2.shapeColor=255;
	box3=createSprite(530,610,20,100);
	box3.shapeColor=255;
	
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);



	var options={
	isStatic:false,
	restitution:0.3,
    friction:0.5,
	density:1.2
	}
	//Create the Bodies Here.


	Engine.run(engine);





	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
  
}


function draw() {
  
 
  rectMode(CENTER);
  background(0);
  
  
  drawSprites();
 
}


function keyPressed(){
 if(keyCode === UP_ARROW) {

  matter.Body.applyForce(paperObject.body.paperObject.body.position,{x:100,y:-650});	
 }
}


