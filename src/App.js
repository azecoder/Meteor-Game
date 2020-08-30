import React, { useState } from 'react';
import './App.css';

import { SCREEN } from './components/constants';
import Intro from './components/intro';
import Game from './components/game'

function App() {

    const [screen, setScreen] = useState(SCREEN.INTRO)
    const [score, setScore] = useState(0)
    const [userName, setUsername] = useState("")

    return (
    <div className="App">
        {screen === SCREEN.INTRO ? (
            <Intro userName={userName} setScreen={setScreen} setUsername={setUsername} />
        ) : screen === SCREEN.GAME ? (
            <Game userName={userName} setScreen={setScreen} setScore={setScore} />
        ) : (
            <div>
                Game Over..
                <span>Your score: {score}</span>
            </div>
        )}
    </div>
    );
}

export default App;
