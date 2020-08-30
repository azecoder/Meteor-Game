import { GAME_WIDTH, GAME_HEIGHT, PLAYER_RADIUS } from "./constants"

export class Player {
    name = "Rambo"
    positionX
    positionY

    health = 100
    ammo = 100
    
    is_dead = false;
    angle = 0

    firedBullets = []
    lastFireAt = Date.now()
    score = 0

    constructor(userName, positionX, positionY) {
        this.name = userName
        this.positionX = positionX
        this.positionY = positionY
    }

    increase_score = () => {
        this.score += 10;
    }
    
    update = (firedBulletsCallback) => {
        if(this.health <= 0) {
            this.is_dead = true;
        }
        this.angle = (this.angle + 0.05) % 360;
        
        if(window.meter && window.meter.volume * 100 > 20) {
            if(Date.now() - this.lastFireAt > 500) {
                firedBulletsCallback(this.angle, GAME_WIDTH / 2, GAME_HEIGHT / 2)
            }
        }
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

        // write Player Info
        ctx.font = "14px Ubuntu";
        ctx.fillStyle = 'darkslateblue';
        ctx.fillText("Player: " + this.name, 10, 20);
        // write health
        ctx.fillStyle = 'darkolivegreen';
        ctx.fillText("Health: " + this.health, GAME_WIDTH-80, 20);
        // write ammo
        ctx.fillStyle = 'darkmagenta';
        ctx.fillText("Ammo: " + this.ammo, GAME_WIDTH-80, GAME_HEIGHT-10);
        // write volume-meter value
        if(window.meter) {
            ctx.fillStyle = 'darkmagenta';
            let vol_value = (window.meter.volume * 100).toFixed(4)
            ctx.fillText("Volume: " + vol_value, 10, GAME_HEIGHT-10);
        }
        // write score
        ctx.fillStyle = 'darkolivegreen';
        ctx.fillText("Score: " + this.score, GAME_WIDTH-180, 20);

        // draw line for player
        ctx.beginPath();
        ctx.moveTo(GAME_WIDTH / 2, GAME_HEIGHT / 2);
        ctx.lineTo(GAME_WIDTH / 2 + 40 * Math.cos(this.angle), GAME_HEIGHT / 2 + 40 * Math.sin(this.angle));
        ctx.stroke();
    }
}