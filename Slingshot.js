class Slingshot{
    constructor(bodyA, somepointB){
        var options = {
            bodyA: bodyA,
            pointB: somepointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling = Constraint.create(options);
        this.pointB = somepointB;
        World.add(world, this.sling);
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);

        }
       
    }
    fly(){
        this.sling.bodyA = null;
        
    }
}