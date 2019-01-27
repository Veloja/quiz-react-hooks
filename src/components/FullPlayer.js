import React from 'react';
import { Link } from 'react-router-dom';

import * as Service from '../Services/service';

const FullPlayer = (props) => {
    return ( 
        <>
            {
                Service.players.filter(player => player.id === +props.match.params.id)
                    .map(player => (
                        <div 
                            key={player.id}
                            className="full-player">
                                <h2>{player.name}</h2>
                                <p>About: {player.about}</p>
                            <Link to={'/'} >go back to Home</Link>
                        </div>
                    ))
            }
        </>  
     );
}
 
export default FullPlayer;