import React, { useState, useEffect } from "react";
import Question from "./Question";
import { Iquestion, IanswerResult } from "../data/types";

type QuizProps = {
  questions: Iquestion[];
  timeLimit: number;
  onQuizEnd: (answers: IanswerResult[]) => void;
};

const Quiz: React.FC<QuizProps> = ({ questions, timeLimit, onQuizEnd }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [timeRemaining, setTimeRemaining] = useState<number>(timeLimit);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (timeRemaining === 0) {
      submitQuiz();
    }
  }, [timeRemaining]);

  const handleAnswer = (answer: string) => {
    setSelectedAnswers((prevAnswers) => [
      ...prevAnswers.slice(0, currentQuestionIndex),
      answer,
      ...prevAnswers.slice(currentQuestionIndex + 1),
    ]);
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const submitQuiz = () => {
    const answers = questions.map((question, index) => ({
      question: question.title,
      answer: selectedAnswers[index],
      correctAnswer: question.correctAnswer,
    }));
    onQuizEnd(answers);
  };

  const renderQuestion = () => {
    if (currentQuestionIndex >= questions.length) {
      submitQuiz();
      return null;
    }
    return (
      <Question
        question={questions[currentQuestionIndex]}
        onAnswer={handleAnswer}
      />
    );
  };

  return (
    <div className="flex flex-col gap-y-10 h-full lg:mx-72">
      <div className="flex justify-between">
        <span className="w-20 p-1 bg-green-400 rounded-full">
          <p className="text-center text-white">
            {currentQuestionIndex + 1}/{questions.length + 1}
          </p>
        </span>
        <span className="w-20 p-1 bg-red-500 rounded-full">
          <p className="text-center text-white">{timeRemaining} s</p>
        </span>
      </div>
      <div className="h-full">{renderQuestion()}</div>
    </div>
  );
};

export default Quiz;
