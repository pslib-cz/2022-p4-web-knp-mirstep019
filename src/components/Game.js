import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

function Game({ setMyChoice}) {

    const [isActive, setIsActive] = useState(false);
    function onCardClick(){
      setIsActive(current => !current);
  }


    //komponenty
    
  return (
    <div>
      <section id="computer" className="choices">
          <h2>Počítač</h2>
          <div data-id="rock" className="icon icon-rock" ></div>
          <div data-id="scissors" className="icon icon-scissors"></div>
          <div data-id="paper" className="icon icon-paper"></div>
      </section>
      <section id="player" className="choices">
          <h2>Hráč</h2>
          <div data-id="rock"  className={isActive ? 'icon icon-rock icon-selected' : 'icon icon-rock'} onClick={(e)=>{setMyChoice(e.target.dataset.id); onCardClick();}} />
          <div data-id="scissors" className={isActive ? 'icon icon-scissors icon-selected' : 'icon icon-scissors'} onClick={(e)=>{setMyChoice(e.target.dataset.id); onCardClick();}} />
          <div data-id="paper" className={isActive ? 'icon icon-paper icon-selected' : 'icon icon-paper'} onClick={(e)=>{setMyChoice(e.target.dataset.id); onCardClick();}} />
      </section>
    </div>
    
  )
}

export default Game
