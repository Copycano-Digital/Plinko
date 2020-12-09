class Particle {
    constructor(x, y) {
        var options = {
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        this.body = Bodies.circle(x, y, 20, options)
        this.width = width;
        this.height = height;
        //this.color = color(random(0,255),random(0,255),random(0,255));
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        ellipse(0,0,40);
        //fill(this.color);
        pop();
      }
}