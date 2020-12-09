const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  parti = new Particle(random(5,475),0);
  ground = new Ground(240,800,480,10);
  division1 = new Ground(0,400,10,800);
  division2 = new Ground(120,682,10,220);
  division3 = new Ground(240,682,10,220);
  division4 = new Ground(360,682,10,220);
  division5 = new Ground(480,400,10,800);

  //bottom bunk
  plink1 = new Plinko(80,400);
  plink2 = new Plinko(160,400);
  plink3 = new Plinko(240,400);
  plink4 = new Plinko(320,400);
  plink5 = new Plinko(400,400);

  //top bunk
  plinkA = new Plinko(40,300);
  plinkB = new Plinko(120,300);
  plinkC = new Plinko(200,300);
  plinkD = new Plinko(280,300);
  plinkE = new Plinko(360,300);
  plinkF = new Plinko(440,300);
}

function draw() {
  background(0,0,0);  
  drawSprites();
  ground.display();
  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  plink1.display();
  plink2.display();
  plink3.display();
  plink4.display();
  plink5.display();
  plinkA.display();
  plinkB.display();
  plinkC.display();
  plinkD.display();
  plinkE.display();
  plinkF.display();
  fill(random(0,255),random(0,255),random(0,255));
  parti.display();
}