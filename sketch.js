
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

function preload()
{
	
}

function setup() {
	createCanvas(900, 350);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
     ball = Bodies.circle(100,150,20,ball_options);
	 World.add(world,ball);

    groundObj = new Ground(width/2,330,width,20);
	leftSide = new Ground(700,260,20,120);
	rightside = new Ground(850,260,20,120);
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(0);
  ellipse(ball.position.x,ball.position.y,20);

 // Matter.Bodies.rectangle(3,5,6);
  
  groundObj.display();
  leftSide.display();
  rightside.display();
  // drawSprites();
 
}

function keyPressed(){
	if( keyCode ===  UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:70,y:-70});

	}
}



