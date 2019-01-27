import React from 'react';
import { Link } from 'react-router-dom';

const Player = (props) => {
    return ( 
        <div className="player-box">
            <h2>{props.name}</h2>
            <p>Player info:</p>
            <p className="player-about">{props.about}</p>
            <Link to={'/players/' + props.id}>Learn more</Link>
        </div>
     );
}
 
export default Player;