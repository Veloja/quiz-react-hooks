import React from 'react';

const Question = ({rightQuestion, handleAnswer}) => {

    return ( 
        <div className="question">
            <h3>Question: {rightQuestion.question}</h3>

            <div className="answers">
                {
                    rightQuestion.answers.map((answ, index) => (
                        <div className="answer" key={answ.text} onClick={() => handleAnswer(index)}>
                            <input type="radio" name="value" id={index}/>
                            <label htmlFor={index}>{answ.text}</label>             
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
 
export default Question;