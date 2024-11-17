//React
import { useState , useCallback, useEffect} from 'react'

//CSS
import './App.css'

//Data
import {wordsList} from "./data/words"

//Components
import Home from './components/Home'
import Game from './components/Game'
import End from './components/End'

const stages = [
  {id:1, name:"start"},
  {id:2, name:"game"},
  {id:3, name:"end"}
]

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(wordsList)

  const [chosenWord, setChosenWord] = useState("")
  const [chosenCategory, setChosenCategory] = useState("")
  const [letters, setLetters] = useState([])

  const chooseWordAndCategory = ()=>{

    //Pick a random category
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]
    console.log(category)

    //Pick a random word
    const word = words[category][Math.floor(Math.random() * words[category].length)]
    
    console.log(word)

    return {word, category}
  }
  //Starts the game
  const startGame = ()=>{
    //Choose word and category
    const {word, category} = chooseWordAndCategory();

    //Create an array of letters
    let wordLetters = word.split("")
    wordLetters = wordLetters.map((l) => l.toLowerCase())
    console.log(wordLetters)


    //Fill states
    setChosenWord(word)
    setChosenCategory(category)
    setLetters(letters)

    setGameStage(stages[1].name)
  }

  //Check letter input
  const verifyLetter = () =>{
    setGameStage(stages[2].name)
  }

  //Retry game
  const retry=()=>{
    setGameStage(stages[0].name)
  }

  return (
    <>
    {gameStage === 'start' && <Home startGame={startGame}/>}     
    {gameStage === 'game' && <Game verifyLetter={verifyLetter}/>}  
    {gameStage === 'end' && <End retry={retry}/>}   
    </>
  )
}

export default App
