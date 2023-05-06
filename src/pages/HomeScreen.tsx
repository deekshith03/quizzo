import homePageLogo from "../assets/home-page-bg.png";
import homeBgLeft from "../assets/home-bg-left.png";
import { useNavigate } from "react-router-dom";

const HomeScreen = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/quiz");
  };
  return (
    <div className="bg-[#1C1A5E] h-full p-6">
      <div className="flex flex-col justify-center items-center flex-wrap gap-y-28">
        <div>
          <h1 className="font-extrabold text-8xl text-white text-center">
            Quizzo
          </h1>
          <p className="text-center text-white text-sm mt-4">
            1000+ quizzes to challenge you and your friends on all topics
          </p>
        </div>
        <div>
          <img className="sm:w-80 max-w-xs absolute" src={homeBgLeft}></img>
          <img
            className="sm:w-80 z-10 relative"
            src={homePageLogo}
            alt="Website logo"
          />
        </div>

        <div>
          <button
            className="p-3.5 text-sm rounded-md text-white font-semibold w-full bg-purple-600 hover:scale-[98%]"
            onClick={() => handleSubmit()}
          >
            Start Playing
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
