import React, { useEffect } from "react";

const QuizPage = ({ quizData, submitQuiz, setScore, setIsQuizCompleted }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
  const [selectedAnswer, setSelectedAnswer] = React.useState("");
    const [shuffledOptions, setShuffledOptions] = React.useState([]);

  const handleNext = () => {
    if (selectedAnswer === quizData[currentQuestionIndex].answer) {
      setScore((prev) => prev + 1);
    }
    setSelectedAnswer(""); // Reset selected answer for next question
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setIsQuizCompleted(true);
      submitQuiz(); // Call the function to submit the quiz
    }
  };
  useEffect(() => {
    if (quizData.length > 0) {
      const currentQ = quizData[currentQuestionIndex];
      const options = shuffleArray(currentQ.options);
      setShuffledOptions(options);
      setSelectedAnswer(null); // reset for new question
    }
  }, [currentQuestionIndex, quizData]);

  // Shuffle helper
  function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  return (
    <div className="quiz-page">
      <h1 className="quiz-title">Quiz Page</h1>
      {/* Quiz questions will be added here */}
      <div className="quiz-questions">
        {quizData && (
          <div key={currentQuestionIndex} className="quiz-question">
            <p>{`Question ${currentQuestionIndex + 1}: ${
              quizData[currentQuestionIndex].question
            }`}</p>
            <div className="quiz-options">
              {shuffledOptions.map((option, i) => (
                <label
                  key={i}
                  htmlFor={`question${currentQuestionIndex + 1}-${option}`}
                >
                  <input
                    type="radio"
                    onChange={() => setSelectedAnswer(option)}
                    name={`question${currentQuestionIndex + 1}`}
                    value={option}
                    id={`question${currentQuestionIndex + 1}-${option}`}
                  />{" "}
                  {option}
                </label>
              ))}
            </div>
          </div>
        )}
      </div>
      <button
        className="submit-button"
        style={{ backgroundColor: selectedAnswer ? "blue" : "gray" }}
        disabled={!selectedAnswer}
        onClick={handleNext}
      >
        {currentQuestionIndex < quizData.length - 1
          ? "Next Question"
          : "Submit Answers"}
      </button>
    </div>
  );
};

export default QuizPage;
