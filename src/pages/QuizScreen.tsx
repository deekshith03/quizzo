import { useState } from "react";
import questions from "../data/questions";
import Quiz from "../components/Quiz";
import { IanswerResult } from "../data/types";
import Result from "../components/Result";

const QuizScreen = () => {
  const [showQuiz, setShowQuiz] = useState<boolean>(true);
  const [score, setScore] = useState<number>(0);

  const handleQuizEnd = (answers: IanswerResult[]) => {
    const correctAnswers = answers.filter(
      (answer) => answer.answer === answer.correctAnswer
    );
    setScore(correctAnswers.length);
    setShowQuiz(false);
  };

  return (
    <div className="bg-[#1C1A5E] h-screen p-6">
      {showQuiz ? (
        <Quiz questions={questions} timeLimit={120} onQuizEnd={handleQuizEnd} />
      ) : (
        <Result score={score} setShowQuiz={setShowQuiz} />
      )}
    </div>
  );
};

export default QuizScreen;
