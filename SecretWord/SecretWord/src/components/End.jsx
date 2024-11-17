import React from 'react'

const End = ({retry}) => {
  return (
    <div>
      <h1>Game Over</h1>
      
      <button onClick={retry}>Try again</button>
    </div>
  )
}

export default End