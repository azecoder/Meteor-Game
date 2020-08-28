import React, { useEffect } from 'react';
import { SCREEN, GAME_HEIGHT, GAME_WIDTH } from './constants';
import { Player } from './player'
import { Enemy } from './enemy'
import { randomNumber } from './utils'

function Game({userName}) {

    let canvas
    let ctx
    let player
    useEffect(() => {
        player = new Player(GAME_WIDTH/2, GAME_HEIGHT/2)
        canvas = document.getElementById("GameCanvas");
        ctx = canvas.getContext("2d");
        
        const enemies = []
        setInterval(() => {
            ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

            player.update()
            player.draw(ctx)

            const enemy = new Enemy(
                randomNumber(-100, GAME_WIDTH + 100),
                randomNumber(-100, GAME_HEIGHT + 100)
            )
            if(enemies.length < 10) {
                enemies.push(enemy)
            }

            enemies.forEach(enemy => {
                enemy.update()
                enemy.draw(ctx)
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