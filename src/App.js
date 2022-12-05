import React, { useState } from "react";

const questions = [
  {
    title: "React - это ... ?",
    variants: ["библиотека", "фреймворк", "приложение"],
    correct: 0,
  },
  {
    title: "Компонент - это ... ",
    variants: [
      "приложение",
      "часть приложения или страницы",
      "то, что я не знаю что такое",
    ],
    correct: 1,
  },
  {
    title: "Что такое JSX?",
    variants: [
      "Это простой HTML",
      "Это функция",
      "Это тот же HTML, но с возможностью выполнять JS-код",
    ],
    correct: 2,
  },
];

const App = () => {
  const [step, setStep] = useState(0);
  const question = questions[step];
  const [correct, setCorrect] = useState(0);

  const persentage = Math.round((step / questions.length) * 100);
  const onclickVariant = index => {
    console.log(step, index);
    setStep(step + 1);

    if (index === question.correct) {
      setCorrect(correct + 1);
    }
  };
  return (
    <>
      {step !== questions.length ? (
        <div className="quiz">
          <h2>Quiz</h2>
          <br />
          <div className="progress">
            <div
              style={{ width: `${persentage}%` }}
              className="progress__inner"></div>
          </div>
          <h1>{question.title}</h1>
          <ul>
            {question.variants.map((text, index) => (
              <li key={text} onClick={() => onclickVariant(index)}>
                {text}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="result">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png"
            alt="congrat-img"
          />
          <h2>
            Вы отгадали {correct} ответа из {questions.length}
          </h2>
          <a href="/">
            <button>Попробовать снова</button>
          </a>
        </div>
      )}
    </>
  );
};
export default App;
