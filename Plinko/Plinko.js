class Plinko {
    constructor(x, y) {
        var options = {
            isStatic: true
        }
        this.body = Bodies.circle(x, y, 20, options)
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        ellipse(0,0,40);
        fill("white");
        pop();
      }
}