import React from 'react';
import ProgressBox from './ProgressBox';

const Progress = ({state, rightQuestion, counter, boxesResults}) => {

    return (
        <div className="progress-holder">
        PROGRESS: 
            {
                state.map((item, index) => <ProgressBox 
                key={index} index={index} state={state} 
                boxesResults={boxesResults} rightQuestion={rightQuestion} counter={counter} />)
            }
        </div>
     );
}
 
export default Progress;