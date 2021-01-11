const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20, ground;
var ball, rope

function setup() {
  createCanvas(2000, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(100, 790, 2000, 20);
}

function draw() {
  background(180);
  Engine.update(engine);
  ground.display();


}



