import React, { useState } from "react";
import { Iquestion } from "../data/types";

type Props = {
  question: Iquestion;
  onAnswer: (selectedAnswer: string) => void;
};

const Question: React.FC<Props> = ({ question, onAnswer }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");

  const handleAnswerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedAnswer(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onAnswer(selectedAnswer);
  };

  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <h3 className="text-white text-2xl">{question.title}</h3>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          {question.answers.map((answer) => (
            <div
              key={answer}
              onClick={() => setSelectedAnswer(answer)}
              className={
                answer === selectedAnswer
                  ? "bg-green-400 p-5 mb-3 rounded-md flex justify-between cursor-pointer"
                  : "bg-white p-5 mb-3 rounded-md flex justify-between cursor-pointer"
              }
            >
              <label htmlFor={answer} className="text-base">
                {answer}
              </label>
              <input
                type="radio"
                name="answer"
                id={answer}
                value={answer}
                checked={selectedAnswer === answer}
                onChange={handleAnswerChange}
                className="opacity-0 w-0 h-0 absolute"
              />
            </div>
          ))}
          <button
            type="submit"
            className="p-3.5 text-sm rounded-md text-white font-semibold w-full bg-purple-600 hover:scale-[98%] mt-8"
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default Question;
