class Box {
    constructor(x,y) {
        var options = {
            isStatic: false,
            restitution: 0.6,
            friction: 1,
            density: 0.04
        }
        this.body = Bodies.rectangle(x,y,70,70,options);
        this.w = 70;
        this.h = 70;
        World.add(world,this.body);
    }

    display() {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        fill("green");
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.w,this.h);
        pop()
    }
}