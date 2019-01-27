import React, {useState, useEffect} from 'react';

const ProgressBox = ({state, index, rightQuestion, counter, boxesResults}) => {

    const [box, setBox] = useState({
        answered: false,
        bingo: false,
        wrong: false
    })

    useEffect(() => {
        return () => { 
            if(rightQuestion.id - 1 === index) {
                if (!rightQuestion.bingo) {
                    const tempBox = {...box, wrong: true, answered: true}
                    setBox(tempBox);
                } else {
                    const tempBox = {...box, bingo: true, answered: true}
                    setBox(tempBox);
                }
            }
        }
    })

    const submitted = boxesResults;

    if(submitted) {
        if(box.bingo) {
            return <p>correct</p>
        } else {
            return <p>wrong</p>
        }
    }
 
    return (
        <>
        <div className="progress-box" style={{backgroundColor: box.answered ? 'blue' : 'yellow'}}>
            <p>box</p>
        </div>
        {submitted}
        </>
    );
}
 
export default ProgressBox;