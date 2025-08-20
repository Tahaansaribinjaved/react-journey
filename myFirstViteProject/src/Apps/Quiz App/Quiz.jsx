import React from 'react'
import './Quiz.css'
import HomePage from './HomePage'
import QuizData from './QuizData' // Assuming you have a file with quiz data
import QuizPage from './QuizPage'
import ResultPage from './ResultPage'

const Quiz = () => {

    // Placeholder for quiz functionality
    // This is where you would implement state management and logic for the quiz
    // For now, we will just render the components without functionality
    const [isQuizStarted, setIsQuizStarted] = React.useState(false);
    const [isQuizCompleted, setIsQuizCompleted] = React.useState(false);
    const [score, setScore] = React.useState(0);
    const [quizData, setQuizData] = React.useState([]);
    // Example function to start the quiz
    const startQuiz = () => {
        setIsQuizStarted(true); 
        // Fetch or set quiz data here
        fetchQuizData();
    }
    // Example function to fetch quiz data
    const fetchQuizData = () => {
        // This is where you would typically fetch quiz data from an API or a local file
        const exampleQuizData =  QuizData; // Assuming QuizData is an array of quiz questions
        // For now, we will just set some example data
        // You can replace this with actual data fetching logic
        setQuizData(exampleQuizData);
    }

    // Example function to submit the quiz
    const submitQuiz = () => {
        // Logic to calculate score and set quiz as completed
        setIsQuizCompleted(true);
    }
  return (
    <div>
        {!isQuizStarted && <HomePage startQuiz={startQuiz} />}
      {isQuizStarted && !isQuizCompleted && <QuizPage quizData={quizData} setScore={setScore} setIsQuizCompleted={setIsQuizCompleted} isQuizCompleted={isQuizCompleted} submitQuiz={submitQuiz} />}
      {isQuizCompleted && <ResultPage score={score} />}
    </div>
  )
}

export default Quiz
