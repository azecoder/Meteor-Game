import React from 'react';
import { SCREEN } from './constants';

function Intro({userName, setScreen, setUsername}) {
    return ( 
    <div className="intro-panel">
        <h1>Soldier Game</h1>
        <input className="inp-user" placeholder="Your Name" value={userName} onChange={(e) => setUsername(e.target.value)}/>
        <button className="btn btn-play" type="submit" onClick={() => setScreen(SCREEN.GAME)}>START GAME</button>
    </div>
    );
}

export default Intro;
