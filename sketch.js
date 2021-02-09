
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stone,groundObject, launcherObject;
var mango1;
var world,boy;
var slingShot;
var stone;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1010,120,30);
	mango2=new mango(1100,40,25);
	mango3=new mango(1100,160,18);
	mango4=new mango(900,180,30);
	mango5=new mango(1150,100,20);
	mango6=new mango(1250,170,30);
	mango7=new mango(1120,240,23);
	mango8=new mango(980,230,28);
  mango9=new mango(980,150,30);
  mango10=new mango(1030,70,27);
  mango11=new mango(1180,150,26);
  mango12=new mango(1040,190,24);
  mango13=new mango(1130,190,23);
  mango14=new mango(1060,120,30);
  mango15=new mango(1210,220,30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);

    stone=new Stone (200,100,50,50);

    slingShot= new SlingShot(stone.body,{x:240,y:410})
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  mango13.display();
  mango14.display();
  mango15.display();
  


  groundObject.display();
  slingShot.display();
  stone.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);
  detectCollision(stone,mango10);
  detectCollision(stone,mango11);
  detectCollision(stone,mango12);
  detectCollision(stone,mango13);
  detectCollision(stone,mango14);
  detectCollision(stone,mango15);

}




function mouseDragged(){

    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){

    slingShot.fly();


}

function detectCollision(lstone,lmango){
	stone.body.position=lstone.body.position
    mango1.body.position=lmango.body.position

    var distance=dist(stone.body.position.x,stone.body.position.y,Lmango.body.position.x,Lmango.body.position.y)

    if(distance<=lmango.r+lstone.width){

    Matter.Body.setStatic(lmango.body,false);

    }

	
	
}

function keyPressed(){

  if(keyCode === 32){

    Matter.Body.setPosition(stone.body,{x:240,y:410});
    slingShot.attach(stone.body);

  }


}

