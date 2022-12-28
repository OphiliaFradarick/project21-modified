
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;

function preload()
{
	
}

function setup() {
	createCanvas(900, 800);
	var ball_options = {
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = Bodies.circle(200,100,40,ball_options)
	World.add(world,ball)

	Engine.run(engine);
	groundObj = new Ground(450,770,200,20)
	leftSide = new Ground(650,765,10,70)
	rightSide = new Ground(700,765,10,70)
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  ellipse(ball.position.x,ball.position.y,40,40)
  verticalForce()

  groundObj.display()
  leftSide.display()
  rightSide.display()
}

function verticalForce(){
	if(keyCode == UP_ARROW){
		Matter.Body.applyForce(ball,{x:85,y:-85},{x:0,y:-0.04})
	}
}




