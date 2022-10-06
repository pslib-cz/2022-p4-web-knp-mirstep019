import React, { useState } from 'react'
import './RPS.css';
const Rock = ({isPicked}) => {

    function onCardClick(e){
        setBasicstate("selected")
    }
    
   return(
    <div id="player-rock" className="icon icon-rock"></div>
   )
}

export default Rock
