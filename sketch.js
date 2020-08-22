const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var ball;
var leftline, rightline, mainline;

function setup(){
    var canvas = createCanvas(1000,400);
    engine = Engine.create();
    world = engine.world;

   
       ground = new ground(200, 380, 7000, 10);

       mainline = new Dustbin(820, 365, 220, 20 );
	leftline= new Dustbin(720, 305, 20, 100);
    rightline = new Dustbin(925, 305, 20, 100);
    
    ball = new paper(50, 50, 70, 70);
  

    

    

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    
    ground.display();

    mainline.display();
    leftline.display();
    rightline.display();

    ball.display();

    keyPressed();
}

function keyPressed(){
    if(keyCode === UP_ARROW ){

        Matter.Body.applyForce(ball.body,ball.body.position,{x:3, y:-5.4})
    }

}