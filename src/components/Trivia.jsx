import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function Trivia({ data, setStop, questionNum, setQuestionNum }) {
  const [question, setQuestion] = useState(null);
  const [selectAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState("box");

  useEffect(() => {
    setQuestion(data[questionNum - 1]);
  }, [data, questionNum]);

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };

  const handleClick = (item) => {
    setSelectedAnswer(item);
    setClassName("box active");

    delay(3000, setClassName(item.corect ? "box correct" : "box wrong"));
    delay(2000, () => {
      if (item.corect) {
        setQuestionNum((prev) => prev + 1);
        setSelectedAnswer(null);
        if (questionNum === 15) {
          setStop(true);
        }
      } else {
        setStop(true);
      }
    });
  };

  return (
    <div className="trivia">
      <div className="questions">{question?.question} ?</div>
      <div className="answer">
        {question?.answer.map((item, idx) => {
          return (
            <div
              key={idx}
              className={selectAnswer === item ? className : "box"}
              onClick={() => handleClick(item)}
            >
              {item.text}
            </div>
          );
        })}
      </div>
    </div>
  );
}
