import React from "react";
import { useState, useContext } from "react";
import EndScreen from "./Component/EndScreen";
import MainMenu from "./Component/MainMenu";
import Quiz from "./Component/Quiz";
import { QuizContext } from "./Helper/Contex";

function App() {
  const [data, setData] = useState("menu");

  const [score, setScore] = useState(0);

  return (
    <div className="app">
      <h1>Quiz App</h1>
      <QuizContext.Provider value={{data, setData, score, setScore}}>
        {data === "menu" && <MainMenu />}
        {data === "quiz" && <Quiz />}
        {data === "endScreen" && <EndScreen />}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
