class PlayerArcher {
    constructor(x, y, width, height, angle){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.angle = angle;
        this.body = Bodies.rectangle(x, y, this.width, this.height);
        this.playerArcherIMG = loadImage("assets/playerArcher.png")
    }
    display(){
        //console.log(this.angle)

        if(keyIsDown(UP_ARROW) && this.angle < 292){
            this.angle += 1
        }
        if(keyIsDown(DOWN_ARROW) && this.angle > 240){
            this.angle -= 1
        }
        push();
        Matter.Body.setAngle(this.body, -PI/2)
        translate(this.x, this.y)
        rotate(this.angle)
        imageMode(CENTER)
        image(this.playerArcherIMG, 0, 0, this.width, this.height)
        pop();
    }
}