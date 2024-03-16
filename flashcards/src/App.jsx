import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import CardForm from './components/CardForm'

const App = () => {
  const questions = [
    {question:"What team has won the most UEFA Champions League?", answer: "Real Madrid"},
    {question:"Which country has won the most World Cup?", answer: "Brazil"},
    {question:"Who is the greatest goal scorer of all time", answer: "Cristiano Ronaldo"},
    {question:"Who won the most Ballon d'Or?", answer: "Lionel Messi"},
    {question:"Who hold the record of the most expensive player of all time?", answer: "Neymar Jr."},
  ]
  
  const [currentCard, setCurrentCard] = useState(0)
  const [userAnswer, setUserAnswer] = useState('')
  const [isAnswerShown, setIsAnswerShown] = useState(false)
  const [feedback, setFeedback] = useState(null)

  const handleNextClick = () => {
    setCurrentCard((index) => (index+1) % questions.length)
    setUserAnswer('') // Clear user answer for next card
    setIsAnswerShown(false)
    setFeedback(null)
  }
  
  const handlePrevClick =() => {
    setCurrentCard((index) => (index - 1 + questions.length) % questions.length)
    setUserAnswer('') // Clear user answer for next card
    setIsAnswerShown(false)
    setFeedback(null)
  }


  const handleCheckAnswer = (e) => {
    e.preventDefault(); // Prevent default form submission
    const isCorrect = userAnswer.toLowerCase() === questions[currentCard].answer.toLowerCase();
    setFeedback(isCorrect);
    setIsAnswerShown(true);
  }
  return(
    <div className="App">

      <div className="header">
        <h1>Soccer Knowlege</h1>
        <h2>Are you a soccer fan? Test your knowledge and learn more about soccer here!</h2>
        <h3>Number of cards: 5</h3>
      </div>

      <div className="container">
        <div className = "card-view">
          
          <Card question={questions[currentCard].question} answer={questions[currentCard].answer} isAnswerShown={isAnswerShown} feedback={feedback} />
          { !isAnswerShown && <CardForm userAnswer={userAnswer} setUserAnswer={setUserAnswer} onCheckAnswer={handleCheckAnswer}/> }
        </div>
        
      </div>
      <div className = "button-container">
          <button onClick={handlePrevClick}>Previous</button>
          <button onClick={handleNextClick}>Next</button>
      </div>
        

    </div>
  )
}

export default App
