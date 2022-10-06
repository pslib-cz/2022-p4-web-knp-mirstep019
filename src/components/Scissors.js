import React, { useState } from 'react'
import './RPS.css';
const Scisssors = ({isPicked}) => {

    function onCardClick(e){
        setBasicstate("selected")
    }
    
    return(
        <div id="player-scissors" className="icon icon-scissors"></div>
    )
}

export default Scisssors
