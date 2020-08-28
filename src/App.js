import React, { useState } from 'react';
import './App.css';

import { SCREEN } from './components/constants';
import Intro from './components/intro';
import Game from './components/game'

function App() {

    const [screen, setScreen] = useState(SCREEN.INTRO)
    const [userName, setUsername] = useState("")

    return (
    <div className="App">
        {screen === SCREEN.INTRO ? (
            <Intro userName={userName} setScreen={setScreen} setUsername={setUsername} />
        ) : screen === SCREEN.GAME ? (
            <Game userName={userName} setScreen={setScreen} />
        ) : (
            <div>Game Over..</div>
        )}
    </div>
    );
}

export default App;
