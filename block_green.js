class Block_green
{
    constructor(x, y, width, height)
    {
        var options =
        {
            restitution: 0.8,
            friction: 1.,
            density: 1.0
        }

        this.width = width;
        this.height = height;
        
        this.body = Bodies.rectangle(x, y, width, height, options);        
        World.add(world, this.body);
    }

    display()
    {
        var pos = this.body.position;

        rectMode(CENTER);
        fill("green");
        rect(pos.x, pos.y, this.width, this.height);
    }
}