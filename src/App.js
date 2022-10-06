import './App.css';
import React, { useState } from 'react';
import Rock from './components/Rock';
import Paper from './components/Paper';
import Scissors from './components/Scissors';

function App() {

  let [basicState, setBasicState] = useState([]);




  return (
    <div id="app">
      <h1 id="title">Kámen, nůžky, papír</h1>
      <section id="computer" className="choices">
          <h2>Počítač</h2>
          <div id="computer-rock" className="icon icon-rock icon-selected"></div>
          <div id="computer-paper" className="icon icon-paper"></div>
          <div id="computer-scissors" className="icon icon-scissors"></div>
      </section>
      <section id="player" className="choices">
          <h2>Hráč</h2>
          <Rock isPicked={basicState.isPicked} />
          <Paper isPicked={basicState.isPicked}/>
          <Scissors isPicked={basicState.isPicked}/>
      </section>
      <div id="result" className="text">Vyberte si symbol</div>
      <section className="stats">
          <h2>Počty</h2>
          <dl>
              <dt>Počet kol</dt>
              <dd id="rounds">0</dd>
              <dt>Počet her</dt>
              <dd id="games">0</dd>
          </dl>
      </section>
      <section className="wins">
          <h2>Výhry</h2>
          <h3 className="computer">Počítač</h3>
          <h3 className="versus">vs</h3>
          <h3 className="player">Hráč</h3>
          <div id="computer-rounds" className="number">0</div>
          <div id="player-rounds" className="number">0</div>
          <div className="text rounds">Kola</div>
          <div id="computer-games" className="number">0</div>
          <div id="player-games" className="number">0</div>
          <div className="text games">Hry</div>
      </section>
    </div>
  );
}

export default App;
