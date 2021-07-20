const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;

function preload(){
  polygon_img=loadImage("polygon.png");
}

function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
 
  //level one
  block1 = new Block(300,275,30,40);
  blocks1 = new Block(625,100,30,40);
  console.log(block1);
  block2 = new Block(330,275,30,40);
  blocks2 = new Block(655,100,30,40);
  block3 = new Block(360,275,30,40);
  blocks3 = new Block(685,100,30,40);
  block4 = new Block(390,275,30,40);
  blocks4 = new Block(715,100,30,40);
  block5 = new Block(420,275,30,40);
  blocks5 = new Block(745,100,30,40);
  block6 = new Block(450,275,30,40);
  blocks6 = new Block(775,100,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  blocks8 = new Block(655,80,30,40);
  block9 = new Block(360,235,30,40);
  blocks9 = new Block(685,80,30,40);
  block10 = new Block(390,235,30,40);
  blocks10 = new Block(715,80,30,40);
  block11 = new Block(420,235,30,40);
  blocks11 = new Block(745,80,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  blocks13 = new Block(685,40,30,40);
  block14 = new Block(390,195,30,40);
  blocks14 = new Block(715,40,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);
  blocks16 = new Block(700,10,30,40);

  ball = Bodies.circle(50,200,20);
  World.add(world,ball);
  slingShot = new slingshot(this.ball,{x:200,y:200});
  

}
function draw() {
  background("yellow"); 
  Engine.update(engine);

  textSize(20);
  fill("lightyellow");
  

  ground.display();
  stand1.display();
  stand2.display();

  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  blocks1.display();
  block2.display();
  blocks2.display();
  block3.display();
  blocks3.display();
  block4.display();
  blocks4.display();
  block5.display();
  blocks5.display();
  block6.display();
  blocks6.display();
  block7.display();
  fill("pink");
  block8.display();
  blocks8.display();
  block9.display();
  blocks9.display();
  block10.display();
  blocks10.display();
  block11.display();
  blocks11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  blocks13.display();
  block14.display();
  blocks14.display();
  block15.display();
  fill("grey");
  block16.display();
  blocks16.display();
 
  textSize(20)
  text("Drag the ball to hit all the boxes!",270,70);
  fill("white");
   ellipse(ball.position.x,ball.position.x,20);
  
   slingShot.display();
}

function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}

function released(){
  slingShot.fly();
}




