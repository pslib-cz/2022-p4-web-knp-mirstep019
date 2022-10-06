import React, { useState } from 'react'
import './RPS.css';
const Scisssors = ({isPicked}) => {

    const [isActive, setIsActive] = useState(false);
    function onCardClick(){
        setIsActive(current => !current);

        /*const PCpick = () => {
            const choices = [{Rock, Paper, Scisssors}];
            setHouse(choices[Math.floor(Math.random() * 3)]);
          };
          useEffect(() => {
            newHousePick();
          }, []);*/
    }

    return(
        <div id="player-scissors" className={isActive ? 'icon icon-scissors icon-selected' : 'icon icon-scissors'} onClick={onCardClick}></div>
    )
}

export default Scisssors
