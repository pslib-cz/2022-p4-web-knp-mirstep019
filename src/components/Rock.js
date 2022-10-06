import React, { useState } from 'react'
import './RPS.css';
const Rock = ({isPicked}) => {

    const [isActive, setIsActive] = useState(false);
    function onCardClick(){
        setIsActive(current => !current);
    }
   return(
    <div id="player-rock" className={isActive ? 'icon icon-rock icon-selected' : 'icon icon-rock'} onClick={onCardClick}></div>
   )
}

export default Rock
