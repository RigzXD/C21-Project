
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var radius=40;
var groundObj;
var leftSide,rightSide;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_option={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	
	groundObj=new Ground(width/2,2670,width,20);
	leftSide = new Ground(1100,700,20,120);
	rightSide = new Ground(1350,700,20,120);
	ball=Bodies.circle(260,100,radius/2,ball_option);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  groundObj.display();
  leftSide.display();
  rightSide.display();

  ellipse(ball.position.x,ball.position.y,radius,radius);
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})
	}
}

