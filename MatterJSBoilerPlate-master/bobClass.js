class Bob {
    constructor(x, y, diameter) {
       var options = {
           isStatic:false,
                      
       }
       this.x=x;
       this.y=y;
       this.radius=diameter;
       console.log(this.radius);
       this.body=Bodies.circle(x,y,(this.radius)/2,options);
       World.add(world, this.body);
     }
  display(){
       var pos =this.body.position;
       var angle = this.body.angle;
      // push();
      // translate(pos.x, pos.y);
       //rotate(angle);
       strokeWeight(4);
       stroke("green");
       fill("green");
       rectMode(CENTER);
       ellipse(0,0,this.radius,this.radius)
       //pop();
     }
}
 