class Plinko{
    constructor(x,y,r){
        var options ={
            restitution:0.4
        }
        this.r=10;

        this.body=Bodies.circle(x,y,this.r,options);
        
        World .add(world,this.body);
    }

    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        translate(pos.x, pos.y);
        rotate (angle);
        noStroke();
        fill ("green");
        ellipseMode (RADIUS);
        ellipse (0,0,this.r, this.r);
        
    }

};