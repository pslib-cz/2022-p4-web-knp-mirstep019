import React, { useState } from 'react'
import './RPS.css';

const Paper = ({isPicked, start}) => {

    function onCardClick(e){
        setBasicstate("selected")
    }

    return(
        <div id="player-paper" className="icon icon-paper"></div>
    )
}

export default Paper
