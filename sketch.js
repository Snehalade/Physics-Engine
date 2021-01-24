const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var MyWorld,MyEngine; 
var ground;
var ball;



function setup() {
  createCanvas(400,400);
  
  MyEngine = Engine.create();
  MyWorld = MyEngine.world;

  var groundOptions = {
    isStatic:true
  }

var ballOptions = {
  restitution:1,
  density:1.5
}
  ball = Bodies.circle(200,100,20,ballOptions);
  World.add(MyWorld,ball);


 ground = Bodies.rectangle(200,390,400,20,groundOptions);
  World.add(MyWorld,ground);
console.log(ground);

}

function draw() {
  background(0);
  Engine.update(MyEngine);
  
rectMode(CENTER);
rect (ground.position.x,ground.position.y,400,20);
 
ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,20,20);



}