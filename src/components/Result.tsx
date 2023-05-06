import { useWindowSize } from "@react-hook/window-size";
import Confetti from "react-confetti";
import { useNavigate } from "react-router-dom";

type ResultProps = {
  score: number;
  setShowQuiz: React.Dispatch<React.SetStateAction<boolean>>;
};

const Result: React.FC<ResultProps> = ({ setShowQuiz, score }) => {
  const navigate = useNavigate();
  const [width, height] = useWindowSize();
  return (
    <div className="h-full">
      {score >= 3 && (
        <Confetti width={width} height={height} tweenDuration={100} />
      )}
      <div className="flex flex-col justify-center content-center items-center text-white text-4xl gap-4 h-full">
        <h1>Your score is </h1>
        <span className="text-8xl"> {score} </span>
        <div className="flex gap-3">
          <button
            onClick={() => navigate("/")}
            className="p-3.5 text-sm rounded-md text-white font-semibold  bg-purple-600 hover:scale-[98%]"
          >
            Home
          </button>
          <button
            onClick={() => setShowQuiz(true)}
            className="p-3.5 text-sm rounded-md text-white font-semibold  bg-purple-600 hover:scale-[98%]"
          >
            Retry
          </button>
        </div>
      </div>
    </div>
  );
};

export default Result;
