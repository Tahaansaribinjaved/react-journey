import React from 'react'

const HomePage = ({ startQuiz }) => {
  return (
    <div className='home-page'>
        <h1 className='title' >Welcome to the Quiz App</h1>
        <p className='description'>Click on the quiz to start!</p>
        <button onClick={startQuiz} className='start-button'>Start Quiz</button>

    </div>
  )
}

export default HomePage
