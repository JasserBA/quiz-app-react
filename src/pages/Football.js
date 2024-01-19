import React, { useEffect, useState } from "react";
import Result from "./Result";
import data from "../data.json";

function Football() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < data.Football.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  
  useEffect(() => {
    console.log("useEffect running");
    const scoreSection = document.getElementsByClassName("score-section")[0];
    if (scoreSection && score === 4) {
      scoreSection.style.boxShadow = "10px 10px 60px 10px green";
    }
  }, [score]);

  return (
    <div>
      {showScore ? (
        <Result scores={score}/>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{data.Football.length}
            </div>
            <div className="question-text">
              {data.Football[currentQuestion].questionText}
            </div>
            <div className="answer-section">
              {data.Football[currentQuestion].answerOptions.map(
                (answerOption, idx) => (
                  <button
                    key={idx}
                    className="answer-button"
                    onClick={() =>
                      handleAnswerOptionClick(answerOption.isCorrect)
                    }
                  >
                    {answerOption.answerText}
                  </button>
                )
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Football;
