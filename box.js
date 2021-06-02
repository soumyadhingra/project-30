class Box extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
      this.image = loadImage("sprites/wood1.png");
    
  this.Visibilty=255;
  }}
  display(){
    if(this.body.speed<3){
var angle=this.body.angle
var pos=this.body.position
push()
Translate(pos.x,pos.y)
rotate(angle)
rectmode(CENTER)
rect(0,0,this.width,this.height)
pop();

}else{
  world.remove(world,this.body)
  push()
  this.Visibilty=this.Visibilty-5
  tint(255,this.Visibilty)
  rect(999,999,this.width,this.height);
  pop()
}

  }