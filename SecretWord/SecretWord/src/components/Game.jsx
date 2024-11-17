import React from 'react'
import './Game.css'

const Game = ({verifyLetter,
   chosenWord,
   chosenCategory,
   letters,
   guessedLetters,
   wrongLetters,
   guesses,
   score
  }) => {
  return (
    <div className='game'>
      <p className='score'>
        <span>Score: {score}</span>
      </p>

      <h1>Guess the word:</h1>
      <h3 className='tip'>
        Word Tip: <span>{chosenCategory}</span>
      </h3>
      <p>You have {guesses} tries</p>

      <div className="wordContainer">
        {letters.map((letter,i)=>(
          guessedLetters.includes(letter) ? (
            <span key={i} className="letter">{letter}</span>

          ) : (
            <span key={i} className="blankSquare"></span>
          )
        ))}
      </div>

      <div className="letterContainer">
        <p>Try to gues a letter from the word:</p>
        <form>
          <input type='text' name='letter' maxLength="1" required/>
          <button>Send</button>
        </form>
      </div>

      <div className="wrongLettersContainer">
        <p>Letters already used: </p>
        {wrongLetters.map((letter, i)=>(
          <span key={i}>{letter}, </span>
        ))}
      </div>

      {/* <button onClick={verifyLetter}>Quit Game</button> */}
    </div>
  )
}

export default Game