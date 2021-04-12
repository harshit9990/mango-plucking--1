
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mongo2;
var world,boy;
var stone;
var chain;
function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
    mango2=new mango(900,200,30);
 stone= new Stone(240,420,30);
 
	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	chain= new Rope(stone.body,{x:250,y:620})
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  stone.display();

  treeObj.display();
  mango1.display();
  mango2.display();
  chain.display();
  groundObject.display();
}
