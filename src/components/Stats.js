import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

function Stats({ myChoice, setMyChoice }) {
//house je pc
  const [house, setHouse] = useState("");
  const [playerWin, setPlayerWin] = useState(0);
  const [pcWin, setPcWin] = useState(0);

  const newHousePick = () => {
    const choices = ["rock", "paper", "scissors"];
    setHouse(choices[Math.floor(Math.random() * 3)]);
  };

  const Result = () => {
    if(myChoice != ""){
      console.log(myChoice)
      console.log(house);
    if (myChoice === "rock" && house === "scissors") {
      setPlayerWin(playerWin + 1);
    } else if (myChoice === "rock" && house === "paper") {
      setPcWin(pcWin + 1);

    } else if (myChoice === "scissors" && house === "paper") {
      setPlayerWin(playerWin + 1);

    } else if (myChoice === "scissors" && house === "rock") {
      setPcWin(pcWin + 1);

    } else if (myChoice === "paper" && house === "rock") {
      setPlayerWin(playerWin + 1);

    } else if (myChoice === "paper" && house === "scissors") {
      setPcWin(pcWin + 1);

    } else {
      setPcWin(pcWin+0);
      setPlayerWin(playerWin+0);
    }
    setMyChoice("");
    }
  };

  useEffect(() => {
    newHousePick();
    Result();
   }, [myChoice]);

    return (
        <div>
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
        <div id="computer-rounds" className="number">{pcWin}</div>
        <div id="player-rounds" className="number">{playerWin}</div>
        <div className="text rounds">Kola</div>
        <div id="computer-games" className="number">0</div>
        <div id="player-games" className="number">0</div>
        <div className="text games">Hry</div>
    </section>
    </div>
  )
}

export default Stats
