class ComputerArcher {
    constructor(x, y, width, height, angle){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.angle = angle;
        this.body = Bodies.rectangle(x, y, this.width, this.height);
        this.computerArcherIMG = loadImage("assets/computerArcher.png")
    }
    display(){
        console.log(this.angle)

        if(keyIsDown(LEFT_ARROW) && this.angle < -244){
            this.angle += 1
        }
        if(keyIsDown(RIGHT_ARROW) && this.angle > -288){
            this.angle -= 1
        }
        push();
        Matter.Body.setAngle(this.body, -PI/2)
        translate(this.x, this.y)
        rotate(this.angle)
        imageMode(CENTER)
        image(this.computerArcherIMG, 0, 0, this.width, this.height)
        pop();
    }
}