import React, { useState } from 'react'
import './RPS.css';

const Paper = ({isPicked, start}) => {

    const [isActive, setIsActive] = useState(false);
    function onCardClick(){
        setIsActive(current => !current);
    }
    return(
        <div id="player-paper" className={isActive ? 'icon icon-paper icon-selected' : 'icon icon-paper'} onClick={onCardClick}></div>
    )
}

export default Paper
