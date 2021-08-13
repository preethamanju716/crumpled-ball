
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var wall1,wall2
var ground
var ball

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
  var ball_options={
    isStatic:false,
    restitution:0.3,
    friction:0,
    density:1.2
  }
  ball=Bodies.circle(300,300,30,ball_options)
  World.add(world,ball)


	//Create the Bodies Here.
  wall1=new Ground(1100,600,20,120)
  ground=new Ground(800,670,1600,20)
  wall2=new Ground(800,600,20,120)

	Engine.run(engine);


  

  
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  wall1.show()
  ground.show()
  wall2.show()
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,30)
  
}
function keyPressed(){

  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})
  }
}


