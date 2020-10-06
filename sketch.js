const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var block;
var ball;
var slingshot;
var bgIMG;

function preload()
{
  bgIMG = loadImage("bg.png");
}

function setup() 
{
  var canvas = createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(400, 390, 800, 20);
  ground2 = new Ground(450, 300, 170, 20);
  ground3 = new Ground(650, 250, 150, 20);

  block1 = new Block_red(390, 275, 30, 30);
  block2 = new Block_blue(420, 275, 30, 30);
  block3 = new Block_green(450, 275, 30, 30);
  block4 = new Block_yellow(480, 275, 30, 30);
  block5 = new Block_pink(510, 275, 30, 30);

  block6 = new Block_orange(405, 245, 30, 30);
  block7 = new Block_brown(435, 245, 30, 30);
  block8 = new Block_grey(465, 245, 30, 30);
  block9 = new Block_white(495, 245, 30, 30);

  block10 = new Block_red(420, 215, 30, 30);
  block11 = new Block_blue(450, 215, 30, 30);
  block12 = new Block_green(480, 215, 30, 30);

  block13 = new Block_yellow(435, 185, 30, 30);
  block14 = new Block_pink(465, 185, 30, 30);

  block15 = new Block_orange(450, 155, 30, 30);

  block16 = new Block_brown(605, 225, 30, 30);
  block17 = new Block_grey(635, 225, 30, 30);
  block18 = new Block_white(665, 225, 30, 30);
  block19 = new Block_red(695, 225, 30, 30);

  block20 = new Block_blue(620, 195, 30, 30);
  block21 = new Block_green(650, 195, 30, 30);
  block22 = new Block_yellow(680, 195, 30, 30);

  block23 = new Block_pink(635, 165, 30, 30);
  block24 = new Block_orange(665, 165, 30, 30);

  block25 = new Block_brown(650, 135, 30, 30);

  ball1 = new Ball(50, 200, 20);

  slingshot1 = new SlingShot(ball1.body,{x:200, y:100});
}

function draw() 
{
  if(bgIMG)
      background(bgIMG);  

  Engine.update(engine);

  ground1.display();
  ground2.display();
  ground3.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();

  block6.display();
  block7.display();
  block8.display();
  block9.display();
  
  block10.display();
  block11.display();
  block12.display();
  
  block13.display();
  block14.display();

  block15.display();

  block16.display();
  block17.display();
  block18.display();
  block19.display();
  
  block20.display();
  block21.display();
  block22.display();

  block23.display();
  block24.display();

  block25.display();

  ball1.display();

  slingshot1.display();
  
  drawSprites();

  textSize(24);
  fill("black")
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks.", 10, 40);
}

function mouseDragged()
{
  Matter.Body.setPosition(ball1.body, {x: mouseX , y: mouseY});
}


function mouseReleased()
{
  slingshot1.fly();
}