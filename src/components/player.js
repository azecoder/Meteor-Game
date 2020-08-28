import { GAME_WIDTH, GAME_HEIGHT, PLAYER_RADIUS } from "./constants"

export class Player {
    positionX
    positionY

    health = 100
    ammo = 100
    
    is_dead = false;
    angle = 0

    constructor(positionX, positionY) {
        this.positionX = positionX
        this.positionY = positionY
    }

    fire = () => {

    }

    update = () => {
        if(this.health <= 0) {
            this.is_dead = true;
        }
        this.angle = (this.angle + 0.05) % 360;
    }

    deductHealth = () => {
        this.health -= 10
    }

    draw = (ctx) => {
        // draw player
        ctx.beginPath();
        ctx.arc(this.positionX, this.positionY, PLAYER_RADIUS, 0, 2 * Math.PI);
        ctx.fillStyle = 'cornflowerblue';
        ctx.fill()
        ctx.lineWidth = 0.3
        ctx.stroke();

        // write health
        ctx.font = "14px Ubuntu";
        ctx.fillStyle = 'darkolivegreen';
        ctx.fillText("Health: " + this.health, GAME_WIDTH-80, 20);
        // write ammo
        ctx.fillStyle = 'darkmagenta';
        ctx.fillText("Ammo: " + this.ammo, GAME_WIDTH-80, GAME_HEIGHT-10);

        // draw line for player
        ctx.beginPath();
        ctx.moveTo(GAME_WIDTH / 2, GAME_HEIGHT / 2);
        ctx.lineTo(GAME_WIDTH / 2 + 40 * Math.cos(this.angle), GAME_HEIGHT / 2 + 40 * Math.sin(this.angle));
        ctx.stroke();
    }
}