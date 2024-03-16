import React, {Component, useState} from "react";


const CardForm = ({inputs, setInputs, onCheckAnswer}) => {
  
    const handleChange = (event) => {
        setInputs(event.target.value)
    }


  return (
    <div className = "card-form">
        <form onSubmit={onCheckAnswer}>
            <input type="text" value={inputs} onChange={handleChange} placeholder="Enter your guess..." />
            <button type="submit" className="button-submit" onclick= {onCheckAnswer}>Submit</button>

        </form>

        

    </div>
  );
  
};

export default CardForm;