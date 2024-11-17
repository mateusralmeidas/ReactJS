import React from 'react'

const Home = ({startGame}) => {
  return (
    <div>
        <h1>Secret Word</h1>
        <p>Click on button below to start playing!</p>
        <button onClick={startGame}>Start Game</button>
    </div>
  )
}

export default Home