import { useState } from "react";
import React from "react";





const Card=({question, answer, isCorrectAnswer, feedback, inputs}) => {
   
    const [isSwipeEnabled, setIsSwipeEnabled] = useState(true);
    
    const isCorrect = inputs.toLowerCase() === answer.toLowerCase();
    const feedbackClass = feedback === null ? '' : feedback ? 'correct' : 'incorrect';
    

    return(
        <div className={`flashcard ${isCorrectAnswer ? 'back' : 'front'}` } >
            <div className="content">
                <span className = {`textContent ${feedbackClass}`}>{isCorrectAnswer ? answer : question}</span>
            </div>

        </div>
    )
}






export default Card;