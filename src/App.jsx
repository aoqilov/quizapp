import React from "react";
import { useMemo } from "react";
import { useEffect } from "react";
import { useState } from "react";
import Trivia from "./components/Trivia";
import Timer from "./components/Timer";
import Login from "./components/login";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

export default function App() {
  const [user, setUser] = useState(null);
  const [questionNum, setQuestionNum] = useState(1);
  const [stop, setStop] = useState(false);
  const [cost, setCost] = useState("$ 0");
  const data = [
    {
      id: 1,
      question: "find europe club",
      answer: [
        { text: "japan", corect: false },
        { text: "qatar", corect: false },
        { text: "brazil", corect: false },
        { text: "spain", corect: true },
      ],
    },
    {
      id: 2,
      question: "find asia club",
      answer: [
        { text: "canada", corect: false },
        { text: "qatar", corect: true },
        { text: "portugal", corect: false },
        { text: "austria", corect: false },
      ],
    },
    {
      id: 4,
      question: "find south america club",
      answer: [
        { text: "bolgaria", corect: false },
        { text: "usa", corect: false },
        { text: "urugvay", corect: true },
        { text: "spain", corect: false },
      ],
    },
    {
      id: 4,
      question: "find europe club",
      answer: [
        { text: "china", corect: false },
        { text: "quvait", corect: false },
        { text: "mexico", corect: false },
        { text: "croatia", corect: true },
      ],
    },
    {
      id: 5,
      question: "find asia club",
      answer: [
        { text: "los angels", corect: false },
        { text: "iran", corect: true },
        { text: "portugal", corect: false },
        { text: "marocash", corect: false },
      ],
    },
    {
      id: 6,
      question: "find south america club",
      answer: [
        { text: "bolgaria", corect: false },
        { text: "usa", corect: false },
        { text: "argentina", corect: true },
        { text: "sweeden", corect: false },
      ],
    },
    {
      id: 7,
      question: "find europe club",
      answer: [
        { text: "south korea", corect: false },
        { text: "india", corect: false },
        { text: "uruguay", corect: false },
        { text: "germany", corect: true },
      ],
    },
    {
      id: 8,
      question: "find asia club",
      answer: [
        { text: "canada", corect: false },
        { text: "uzbek", corect: true },
        { text: "portugal", corect: false },
        { text: "austria", corect: false },
      ],
    },
    {
      id: 9,
      question: "find south america club",
      answer: [
        { text: "bolgaria", corect: false },
        { text: "usa", corect: false },
        { text: "ekuador", corect: true },
        { text: "spain", corect: false },
      ],
    },
    {
      id: 10,
      question: "find europe club",
      answer: [
        { text: "japan", corect: false },
        { text: "qatar", corect: false },
        { text: "brazil", corect: false },
        { text: "belgium", corect: true },
      ],
    },
    {
      id: 11,
      question: "find asia club",
      answer: [
        { text: "canada", corect: false },
        { text: "kazakhstan", corect: true },
        { text: "portugal", corect: false },
        { text: "austria", corect: false },
      ],
    },
    {
      id: 12,
      question: "find south america club",
      answer: [
        { text: "bolgaria", corect: false },
        { text: "usa", corect: false },
        { text: "kolumbia", corect: true },
        { text: "spain", corect: false },
      ],
    },
    {
      id: 13,
      question: "find europe club",
      answer: [
        { text: "japan", corect: false },
        { text: "qatar", corect: false },
        { text: "brazil", corect: false },
        { text: "frnce", corect: true },
      ],
    },
    {
      id: 14,
      question: "find asia club",
      answer: [
        { text: "canada", corect: false },
        { text: "iraq", corect: true },
        { text: "portugal", corect: false },
        { text: "austria", corect: false },
      ],
    },
    {
      id: 15,
      question: "find south america club",
      answer: [
        { text: "bolgaria", corect: false },
        { text: "costa rica", corect: false },
        { text: "urugvay", corect: true },
        { text: "spain", corect: false },
      ],
    },
  ];

  const moneyList = useMemo(
    () =>
      [
        { id: 1, prime: "$ 100" },
        { id: 2, prime: "$ 200" },
        { id: 3, prime: "$ 400" },
        { id: 4, prime: "$ 800" },
        { id: 5, prime: "$ 1600" },
        { id: 6, prime: "$ 3200" },
        { id: 7, prime: "$ 6400" },
        { id: 8, prime: "$ 12800" },
        { id: 9, prime: "$ 25600" },
        { id: 10, prime: "$ 51200" },
        { id: 11, prime: "$ 114400" },
        { id: 12, prime: "$ 228800" },
        { id: 13, prime: "$ 457600" },
        { id: 14, prime: "$ 915200" },
        { id: 15, prime: "$ 2000000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNum > 1 &&
      setCost(moneyList.find((elem) => elem.id === questionNum - 1).prime);
  }, [moneyList, questionNum]);

  const retry = () => {
    setStop(false);
    setQuestionNum(1);
  };
  return (
    <>
      {user ? (
        <div className="app">
          <div className="main">
            {stop ? (
              <div className="end">
                <h1 className="end endd">
                  {user.toUpperCase()} balans: {cost}
                </h1>
                <span className="retry" onClick={retry}>
                  <RestartAltIcon className="icon" />
                </span>
              </div>
            ) : (
              <>
                <div className="top">
                  <div className="new-game"></div>
                  <div className="timer">
                    <span className="time">
                      00:
                      <Timer setStop={setStop} questionNum={questionNum} />
                    </span>
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    setStop={setStop}
                    questionNum={questionNum}
                    setQuestionNum={setQuestionNum}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyList.map((item, idx) => {
                return (
                  <li
                    key={idx}
                    className={
                      questionNum === item.id
                        ? "moneyListItem active"
                        : "moneyListItem"
                    }
                  >
                    <span className="itemNumber">{item.id}</span>
                    <span className="itemAmount">{item.prime}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      ) : (
        <Login user={user} setUser={setUser} />
      )}
    </>
  );
}
