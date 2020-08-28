import React, { useState } from 'react';
import './App.css';

import { SCREEN } from './components/constants';
import Intro from './components/intro';
import Game from './components/game'

function App() {
  
  const [screen, setScreen] = useState(SCREEN.INTRO)
  const [username, setUsername] = useState("")
  
  return (
    <div className="App">
      {screen === SCREEN.INTRO ? (
        <Intro username={username} setScreen={setScreen} setUsername={setUsername} />
      ) : (
        <Game />
      )}
    </div>
  );
}

export default App;
