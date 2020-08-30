import React, { useEffect } from 'react';
import { SCREEN, GAME_HEIGHT, GAME_WIDTH, MAX_ENEMY_COUNT } from './constants';
import { Player } from './player'
import { Enemy } from './enemy'
import { randomNumber } from './utils'
import { Bullet } from './bullet';

function Game({userName, setScreen, setScore}) {

    let canvas
    let ctx
    let player
    let lastEnemyCreatedAt = Date.now()
    useEffect(() => {
        player = new Player(userName, GAME_WIDTH/2, GAME_HEIGHT/2)
        canvas = document.getElementById("GameCanvas");
        ctx = canvas.getContext("2d");
        
        let enemies = []
        let bullets = []
        const firedBulletsCallback = (angle, posX, posY) => bullets.push(new Bullet(angle, posX, posY))
        setInterval(() => {
            ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

            if(player.is_dead) {
                setScreen(SCREEN.RESULT)
                setScore(player.score)
                return
            }

            player.update(firedBulletsCallback)
            player.draw(ctx)

            const random1 = randomNumber(0, GAME_WIDTH)
            const random2 = randomNumber(0, GAME_HEIGHT)
            const enemy = new Enemy(
                Math.random() < 0.5 ? randomNumber(-random1, GAME_WIDTH / 2 - random1) : randomNumber(GAME_WIDTH + random1, GAME_WIDTH / 2 + random1),
                Math.random() < 0.5 ? randomNumber(-random2, GAME_HEIGHT / 2 + random2) : randomNumber(GAME_HEIGHT + random2, GAME_HEIGHT / 2 + random2)
            )
            if(enemies.length < MAX_ENEMY_COUNT && Date.now() - lastEnemyCreatedAt > 1500) {
                enemies.push(enemy)
                lastEnemyCreatedAt = Date.now()
            }

            enemies = enemies.filter(enemy => !enemy.is_dead)
            enemies.forEach(enemy => {
                enemy.update(player, bullets)
                enemy.draw(ctx)
            })

            bullets = bullets.filter(bullet => !bullet.is_dead)
            bullets.forEach(bullet => {
                bullet.update()
                bullet.draw(ctx)
            })
        
        }, 1000 / 30)

    });

    return ( 
    <div className="game-panel">
        <canvas id="GameCanvas" width={GAME_WIDTH} height={GAME_HEIGHT} className="game-canvas">
        Your browser does not support the HTML canvas tag.
        </canvas>
    </div>
    );
}

export default Game;