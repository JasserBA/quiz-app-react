import React, { useEffect, useState } from "react";
import Result from "./Result";
import data from "../data.json";

function Mathematic() {

  const [currentQuiestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuiestion + 1;
    if (nextQuestion < data.Mathematics.length) {
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
    <div className="App">
      {showScore ? (
        <Result scores={score} />
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuiestion + 1}</span>/
              {data.Mathematics.length}
            </div>
            <div className="question-text">
              {data.Mathematics[currentQuiestion].questionText}
            </div>
            <div className="answer-section">
              {data.Mathematics[currentQuiestion].answerOptions.map(
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

export default Mathematic;
