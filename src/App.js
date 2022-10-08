import './App.css';
import React, { useEffect, useState } from 'react';
import Stats from './components/Stats';
import Game from './components/Game';
import { setSelectionRange } from '@testing-library/user-event/dist/utils';

function App() {

  const [myChoice, setMyChoice] = useState("");
  const [score, setScore] = useState(0);

  

  return (
    <div id="app">
      <h1 id="title">Kámen, nůžky, papír</h1>
      <Game setMyChoice={setMyChoice}/>
      <Stats myChoice={myChoice} setMyChoice={setMyChoice} />
    </div>
  );
}

export default App;
