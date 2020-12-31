const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var engine ,world,object
var ground,ball
var box1;
var box2;



function setup() {
  var canvas=createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
  var ground_options={
    isStatic:true
  }

  object=Bodies.rectangle(200,390,50,50)

  World.add(world,object)
 // console.log(object)
 
 ground=Bodies.rectangle(50,390,400,20,ground_options)
 World.add(world,ground)
 box1=new Box(200,100,50,50);
 box2=new Box(100,50,50,100);
}

function draw() {
  background(255,255,255);
  Engine.update(engine)
  rect(ground.position.x,ground.position.y,400,50)
  box1.display();
  box2.display();  
  drawSprites();
}


