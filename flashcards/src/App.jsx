import { useState } from 'react'
import './App.css'

const App = () => {
  const cards = [
    {question:'What team has won the most UEFA Champions League?', answer:"Real Madrid"},
    {question:'Who is the greatest goal scorer of all time?', answer:'Cristiano Ronaldo'},
    {question:'What is the biggest amount of money spent one transfert and which player was it?', answer:'$220 millions and it was spent for Neymar'}
  ];

  const [currentCard, setCurrentCard] = useState(0);
  const [isAnswerShown, setIsAnswerShown] = usestate(false);

  const handleCardClick = () => {
    setIsAnswerShown(!isAnswerShown);
  };

  const handleNextClick = () => {
    const newIndex = (currentCard + 1) % cards.length;
    setCurrentCard(newIndex);
    setIsAnswerShown(false); // Hide answer when showing a new card
  };

  const showCard = cards[currentCard];
  
  return(
    <div className="App">

      <div className="header">
        <h1>Soccer Knowlege</h1>
        <h2>Are you a soccer fan? Test your knowledge and learn more about soccer here!</h2>
        <h3>Number of cards: 10</h3>
      </div>

      <div classname="display-card">
        <h2>{showCard.question}</h2>
        {isAnswerShown && <p>{showCard.answer}</p>}
        <button onClick={handleCardClick}>
          {isAnswerShown ? 'Hide Answer' : 'Show Answer'}
        </button>

        <button onClick={handleNextClick}>Next Card</button>
      </div>

    </div>
  )
}

export default App
