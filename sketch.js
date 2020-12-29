const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine1 , world1;
var ground;
var ball;
function setup() {
  createCanvas(400,400);
  //create the Universe
  engine1 = Engine.create();

  //create the Earth
  world1 = engine1.world;

   //create the ground
  ground=Bodies.rectangle(200,390,200,20,{isStatic:true});
  ball = Bodies.circle(200,100,20,{restitution:1.0});
  World.add(world1,ground);
  World.add(world1,ball);
}

function draw() {
  background(0);  
  console.log(ground);
  Engine.update(engine1);
  rectMode(CENTER);
 rect (ground.position.x,ground.position.y,400,20);

 ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,20,20);
}