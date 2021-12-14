//Declaring constants
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render=Matter.Render;

//Declaring variables
var engine, world;
var bob1, bob2, bob3, bob4, bob5;
var roof;
var rope1, rope2, rope3, rope4, rope5;
var diameter=40;

function setup() {
	createCanvas(1600, 800);
    engine = Engine.create();
  	world = engine.world;
    //Creating sprites
    //roof=createSprite(390,220,550,30);
    roof=new Roof(390,220,550,30);
    bob1=new Bob(310,540,40);
	  bob2=new Bob(350,540,40);
	  bob3=new Bob(390,540,40);
	  bob4=new Bob(430,540,40);
	  bob5=new Bob(470,540,40);
    rope1=new Rope(bob1.body,roof.body,-diameter*2,0);
    rope2=new Rope(bob2.body,roof.body,-diameter*1,0);
    rope3=new Rope(bob3.body,roof.body,0,0);
    rope4=new Rope(bob4.body,roof.body,diameter*1,0);
    rope5=new Rope(bob5.body,roof.body,diameter*2,0);
	  Engine.run(engine);
}

function draw() {
  background("orange");
  Engine.update(engine);
  //Displaying the sprites
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bob1.display();
 // bob2.display();
  //bob3.display();
  /*bob4.display();
  bob5.display();*/
  roof.display();
  drawSprites();
}

//Function for making the bobs move
function keyPressed(){
  console.log("KeyPressed")
  if (keyCode===DOWN_ARROW){
    console.log("Key Pressed Inside");
    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-45, y:-50});
  }
}






