class Rope {
    constructor(bodyA,pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            length: 380,
            stiffness: 1.2
        }
        this.body = Constraint.create(options);
        this.pointB = pointB;
        World.add(world,this.body);
    }

    display() {
       var pointA = this.body.bodyA.position;
       var pointB = this.pointB;

       line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}