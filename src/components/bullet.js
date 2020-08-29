import { GAME_WIDTH, GAME_HEIGHT } from "./constants";

export class Bullet {
    angle
    speed = 10

    positionX
    positionY

    is_dead = false

    constructor(angle, positionX, positionY) {
        this.angle = angle;
        this.positionX = positionX
        this.positionY = positionY
    }

    update = () => {
        this.positionX += (this.speed * Math.cos(this.angle))
        this.positionY += (this.speed * Math.sin(this.angle))

        if(this.positionX < 0 || this.positionX > GAME_WIDTH
            || this.positionY < 0 || this.positionY > GAME_HEIGHT) {
            this.is_dead = true
        }
    }

    draw = (ctx) => {
        ctx.beginPath();
        ctx.arc(this.positionX, this.positionY, 2, 0, 2 * Math.PI);
        ctx.fillStyle = 'saddlebrown';
        ctx.fill()
        ctx.lineWidth = 0.3
        ctx.stroke();
    }
}