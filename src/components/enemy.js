import { GAME_WIDTH, GAME_HEIGHT } from './constants'
import { randomNumber } from './utils'

// TARGET POINT is CENTER
const centerX = GAME_WIDTH / 2
const centerY = GAME_HEIGHT / 2

export class Enemy {
    speed = 4
    positionX
    positionY

    constructor(positionX, positionY) {
        this.positionX = positionX
        this.positionY = positionY
        this.radius = randomNumber(0, 10)
    }

    update = () => {
        const distanceX = this.positionX - centerX
        const distanceY = this.positionY - centerY
        // const angle = Math.atan2(distanceY, distanceX) * 180 / Math.PI
        const angle_rad = Math.atan2(distanceY, distanceX)

        const speedX = this.speed * Math.cos(angle_rad);
        const speedY = this.speed * Math.sin(angle_rad);

        this.positionX -= speedX
        this.positionY -= speedY
    }

    draw = (ctx) => {
        ctx.beginPath();
        ctx.arc(this.positionX, this.positionY, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = 'crimson';
        ctx.fill()
        ctx.lineWidth = 0.3
        ctx.stroke();
    }
}