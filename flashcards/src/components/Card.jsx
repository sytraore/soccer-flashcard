import { useState } from "react";
import React from "react";





const Card=({question, answer}) => {
    const [isQuestion, swipeToAnswer] = useState(true);

    const handleSwipe = () => {
        swipeToAnswer(previous => !previous)
    }

    const content = isQuestion ? question : answer;
    const sideClass = isQuestion ? "front" : "back";
    const classList = `flashcard ${sideClass}`

    return(
        <div className={classList} onClick={handleSwipe}>
            <div className="content">
                <span className = "textContent">{content}</span>
            </div>

        </div>
    )
}






export default Card;