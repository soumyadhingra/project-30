const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(280,275,30,40);
    box2 = new Box(310,275,30,40);
    box3= new Box(340,275,30,40);
    box4= new Box(370,275,30,40);
    box5= new Box(400,275,30,40);
    box6= new Box(430,275,30,40);
    box7= new Box(460,275,30,40);
    box8= new Box(490,275,30,40);

    box9= new Box(310,235,30,40);
    box10= new Box(340,235,30,40);
    box11= new Box(370,235,30,40);
    box12= new Box(400,235,30,40);
    box13= new Box(430,235,30,40);
    box14= new Box(460,235,30,40);

    box15= new Box(310,195,30,40);
    box16= new Box(340,195,30,40);
    box17= new Box(370,195,30,40);
    box18= new Box(400,195,30,40);

    box19= new Box(310,155,30,40);
    box20= new Box(340,155,30,40);

    box21= new Box(310,155,30,40);

boxes1= new Box(640,175,30,40)
boxes2= new Box(670,175,30,40)
boxes3= new Box(700,175,30,40)
boxes4= new Box(730,175,30,40)
boxes5= new Box(760,175,30,40)

boxes6= new Box(670,175,30,40)
boxes7= new Box(700,175,30,40)
boxes8= new Box(730,175,30,40)

boxes9= new Box(700,175,30,40)

ball=bodies.circle(50,200,20);
World.add(world,ball)

slingshot=new Slingshot(this.ball,{x:200,y:200})



  
}

function draw(){
    background("white");
    Engine.update(engine);


    strokeWeight(2);
    stroke(15);

    stand1.display()
    stand2.display()

    stroke(15)
    fill("black")
box1.display()
box2.display()
box3.display()
box4.display()
box5.display()
box6.display()
box7.display()
box8.display()
stroke(15)
fill("orange")
box9.display()
box10.display()
box11.display()
box12.display()
box13.display()
box14.display()
stroke(15)
fill("violet")
box15.display()
box16.display()
box17.display()
box18.display()
box19.display()
box20.display()
}
stroke(15)
fill("red")
boxes1.display()
boxes2.display()
boxes3.display()
boxes4.display()
boxes5.display()
stroke(15)
fill("pink")
boxes6.display()
boxes7.display()
boxes8.display()
stroke(15)
fill("yellow")
boxes9.display()
text("drag the line and realese it to hit crazy boxes",600,250)
elliple(ball.position.x,ball.position.y,20)
slingshot.display()

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){
if(32 === keyCode ){
    slingshot.attach(bird.body)
}

}
