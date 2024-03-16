import React, {Component, useState} from "react";





const CardForm = () => {

    const handleChange = (event) => {
        setUserAnswer(event.target.value)
      }
  
  return (
    <div>
        <form>
            <input type="text" value={userAnswer} onChange={handleChange} placeholder="Enter your guess..." />
            <button type="submit" className="button-submit" onClick={onCheckAnswer}>Submit</button>
        </form>
        
    </div>
  );
  
};

export default CardForm;