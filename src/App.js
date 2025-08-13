import { useState } from "react";
import Header from "./components/Header";
import "./index.css";
import QuestionForm from "./components/QuestionForm";

function App() {
  const [score, setScore] = useState({});
  const [maxScore, setMaxScore] = useState(0);

  const factionsMap = {
    0: "Jedi",
    1: "Sith",
    2: "Rebel Alliance",
    3: "Galactic Empire",
  };

  const questions = [
    {
      text: "What is your favorite faction?",
      options: ["Jedi", "Sith", "Rebel Alliance", "Galactic Empire"],
    },
    {
      text: "Which character do you prefer?",
      options: ["Luke Skywalker", "Darth Vader", "Leia Organa", "Han Solo"],
    },
    {
      text: "Which planet would you visit?",
      options: ["Tatooine", "Hoth", "Endor", "Coruscant"],
    },
    {
      text: "Who is your favorite droid?",
      options: ["R2-D2", "C-3PO", "BB-8", "K-2SO"],
    },
    {
      text: "Which trilogy do you like most?",
      options: ["Original", "Prequel", "Sequel", "Spin-offs"],
    },
    {
      text: "Which starship would you pilot?",
      options: ["Millennium Falcon", "X-Wing", "TIE Fighter", "Star Destroyer"],
    },
    {
      text: "Which force power would you choose?",
      options: ["Force Push", "Mind Trick", "Force Lightning", "Force Heal"],
    },
    {
      text: "Who is the best mentor?",
      options: ["Yoda", "Obi-Wan Kenobi", "Qui-Gon Jinn", "Mace Windu"],
    },
    {
      text: "Which battle was most epic?",
      options: [
        "Battle of Yavin",
        "Battle of Hoth",
        "Battle of Endor",
        "Battle of Geonosis",
      ],
    },
  ];

  const handleScoreChange = (option, optionIdx) => {
    setScore((prevScore) => ({
      ...prevScore,
      [`question-${option}`]: optionIdx,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let count = {};
    Object.values(score).forEach((value) => {
      count[value] = (count[value] || 0) + 1;
    });
    const maxCountItem = Object.entries(count).reduce(
      (max, current) => (current[1] > max[1] ? current : max),
      [null, 0]
    );
    setMaxScore(maxCountItem[0]);
    setScore({});
    e.target.reset();
    console.log("Submitted score");
  };

  return (
    <>
      <Header />
      <QuestionForm
        handleSubmit={handleSubmit}
        questions={questions}
        handleScore={handleScoreChange}
      />
      ;
      <div className="text-center mt-8">
        <h2 className="text-2xl font-bold">Your Score</h2>
        <p className="text-lg">{factionsMap[maxScore]}</p>
      </div>
    </>
  );
}

export default App;
