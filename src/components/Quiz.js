import React, { useState } from 'react';
import * as Service from '../Services/service';

import Progress from './Progress';
import Question from './Question';

const Quiz = () => {

    const tempQuestions = [...Service.questions];
    const questions = tempQuestions.map(item => item);
    
    const [counter, setCounter] = useState(0);
    const [state, setState] = useState(questions);
    const [submit, setSubmit] = useState(false);
    const [boxesResults, setBoxesResults] = useState(false)

    const rightQuestion = state[counter];
    console.log('submit', submit)

    const handleCounter = () => {
        setCounter(counter + 1);
        if(counter === state.length - 1) {
            setCounter(state.length-1);
            setSubmit(true);
        }
    }

    const handleAnswer = (id) => {
        rightQuestion.answers.map(answ => {
            if(answ.text === rightQuestion.answers[id].text) {
                answ.clicked = true;
            }
        })
        check(id)
        console.log('state', state)
    }

    const check = (id) => {
        if(rightQuestion.correct === id) {
            rightQuestion.bingo = true;
        }
    }

    const handleResults = () => {
        const results = state.map(question => question.bingo);
        const showRes = results.filter(corr => corr === true)
        const correctAnswers = showRes.length;
        alert(`you have ${correctAnswers} correct answers`);
        setBoxesResults(true);
    }

    return (
        <>
            <p>question counter: {counter}</p>
            <Progress state={state} rightQuestion={rightQuestion} counter={counter} boxesResults={boxesResults} />
            <Question rightQuestion={rightQuestion} handleAnswer={handleAnswer} />
            <button 
                onClick={handleCounter}
                className="counter">Continue
            </button>
            {
                submit && <div>submit results?
                    <button onClick={handleResults}>yes</button>
                    <button>no</button>
                </div>
            }
        </>
     );
}
 
export default Quiz;