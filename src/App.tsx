import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import QuizScreen from "./pages/QuizScreen";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/quiz" element={<QuizScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
