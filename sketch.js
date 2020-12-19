
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var umbrella;
var umbrellaImage;
var thunderGroup;
var thunder1, thunder2, thunder3, thunder4;

var maxDrops = 100;




function preload()
{
	umbrellaImage = loadImage("walking_1.png","walking_2.png","walking_3.png","walking_4.png","walking_5.png","walking_6.png","walking_7.png","walking_8.png");
	thunder1 = loadImage("1.png");
	thunder2 = loadImage("2.png");
	thunder3 = loadImage("3.png");
	thunder4 = loadImage("4.png");
}

function setup() {
	createCanvas(500, 800);


	engine = Engine.create();
	world = engine.world;
  
	umbrella = createSprite(100,600,20,20);
	umbrella.addImage("re",umbrellaImage);
	umbrella.scale = 0.3;
	
    thunderGroup = createGroup();
	
    
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  umbrella.display();
  thunderStriking();

  for(var i=0; i<maxDrops; i++){
	maxDrops.push(new Drop(random(0,400), random(0,400)));
}


  drawSprites();
 

  
 
}

function thunderStriking(){
	if(World.frameCount%80 === 0){
	
		thunder = createSprite(400,250,20,20);
		thunder.scale = 5;
		r=Math.round(random(1,4));
 if (r == 1) {
 thunder.addImage(thunder1);
 }  else if (r == 2) {
 thunder.addImage(thunder2)
 }  else if (r == 3) {
 thunder.addImage(thunder3);
 }  else {
 thunder.addImage(thunder4);
 }
		  
		 thunder.x=Math.round(random(50,340));
		  
		  
		 thunder.setLifeTime = 100;
		  
		 thunderGroup.add(thunder);
		
		  
		}



}
