import { GAME_WIDTH, GAME_HEIGHT, ENEMY_SIZE_MIN, ENEMY_SIZE_MAX, ENEMY_SPEED, PLAYER_RADIUS } from './constants'
import { randomNumber } from './utils'

// TARGET POINT is CENTER
const centerX = GAME_WIDTH / 2
const centerY = GAME_HEIGHT / 2

export class Enemy {
    speed = ENEMY_SPEED
    is_dead = false
    positionX
    positionY

    constructor(positionX, positionY) {
        this.positionX = positionX
        this.positionY = positionY
        this.radius = randomNumber(ENEMY_SIZE_MIN, ENEMY_SIZE_MAX)
    }

    isDead = () => {
        const distanceX = Math.abs(this.positionX - centerX)
        const distanceY = Math.abs(this.positionY - centerY)
        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY)

        if(distance < PLAYER_RADIUS + this.radius) {
            return true;
        }
        return false;
    }

    update = (player) => {
        if(this.is_dead) return

        const distanceX = this.positionX - centerX
        const distanceY = this.positionY - centerY
        // const angle = Math.atan2(distanceY, distanceX) * 180 / Math.PI
        const angle_rad = Math.atan2(distanceY, distanceX)

        const speedX = this.speed * Math.cos(angle_rad);
        const speedY = this.speed * Math.sin(angle_rad);

        this.positionX -= speedX
        this.positionY -= speedY

        if(!this.is_dead && this.isDead()) {
            this.is_dead = true
            player.deductHealth()
        }
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