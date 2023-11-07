const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball;
var buttonUp;
var buttonRight;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);

  var ball_options = {restitution:0.9 }
  ball = Bodies.circle(200,100,30,ball_options);
  World.add(world,ball);

  buttonUp = createImg("up.png");
  buttonUp.position(20,30);
  buttonUp.size(75,75);
  buttonUp.mouseClicked(vforce);

  buttonRight = createImg("right.png");
  buttonRight.position(100,30);
  buttonRight.size(75,75);
  buttonRight.mouseClicked(hforce);
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  fill("brown");
  ellipse(ball.position.x , ball.position.y , 30);
  Engine.update(engine);

}

function hforce()
{
  Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});




}

function vforce()
{
  Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});




}