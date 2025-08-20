import React from 'react'

const ResultPage = ({ score }) => {
  return (
    <div className='result-page'>
        <h1 className='result-title'>Quiz Results</h1>
        {/* Display results here */}
        <p className='result-message'>You have completed the quiz!</p>
        <p className='score' style={{ color: score >= 3 ? 'green' : 'red' }} >Your score: {score}/5</p>

    </div>
  )
}

export default ResultPage
