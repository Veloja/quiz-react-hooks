import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Player from './Player';
import * as Service from '../Services/service';

const Players = () => {
    const [state] = useState(false);

    const homePage = <div className="Posts">
                        {Service.players.map(player => 
                            <Player
                                key={player.id} 
                                name={player.name}
                                id={player.id}
                                about={player.about}
                            />
                        )}
                    </div>
    const quiz = <div>Playing quiz</div>

    const whatToRender = state ? quiz : homePage
    return (
        <>  
            {state.toString()}
            {whatToRender}
            <Link to={'/quiz'}>I'am ready to play quiz</Link>
        </>
      );
}
 
export default Players;