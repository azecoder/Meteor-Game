export class Player {
    angle = 0
    firedBullets = []
    xPos
    yPos

    constructor(positionX, positionY) {
        this.positionX = positionX
        this.positionY = positionY
    }

    fire = () => {

    }

    update = () => {

    }

    draw = (ctx) => {
        ctx.beginPath();
        ctx.arc(this.positionX, this.positionY, 20, 0, 2 * Math.PI);
        ctx.fillStyle = 'cornflowerblue';
        ctx.fill()
        ctx.lineWidth = 0.3
        ctx.stroke();
    }
}