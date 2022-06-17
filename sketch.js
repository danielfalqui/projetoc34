
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var button;
var fruit,rope;


function preload(){

}

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
  button = createImg('cut_button.png');
  button.position(300,50);
  button.size(50,50);
  button.mouseClicked(drop);

  rope = new Rope(7,{x:300,y:50})

}


function draw() 
{
  background(51);

  rope.show();


  Engine.update(engine);
  

  drawSprites();
}

function drop(){

}