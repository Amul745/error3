const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
let engine;
let world;
var pipe
var blower 
var ball
var blowermouth
function setup() {
  createCanvas(500,500);
  engine = Engine.create();
  world = engine.world;
  var options = {
    restitution:0.8
    
  }
  ball=Bodies.circle(width/2+80,height/2-80,40,options)
  World.add(world,ball)
//blower=createSprite(width/2-50,height/2+50,150,20);
  //pipe=createSprite(350,220,100,10);
  var options = {
    isStatic:true
  }
  blower=Bodies.rectangle(width/2-50,height/2+50,150,20,options)
  World.add(world,blower)
  var options = {
    isStatic:true
  }
 blowermouth=Bodies.rectangle(width/2+70,height/2+20,100,90,options)
 World.add(world,blowermouth)
button = createButton("Click to Blow");
button.position (width / 2, height-100); 
button.class("blowButton");
button.mousePressed (blow);
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  rectMode(CENTER)
  rect(blowermouth.position.x,blowermouth.position.y,100,91)
  ellipseMode(CENTER)
  ellipse(ball.position.x,ball.position.y,80,80)
  rect(blower.position.x,blower.position.y,150,20)
  drawSprites();
 
}

function blow() {
  Matter.Body.applyForce(ball.body, { x: 0, y: 0 }, { x: 0, y: 0.5 });
}