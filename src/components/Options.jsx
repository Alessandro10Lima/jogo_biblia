import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import './Options.css';

const Options = ({option, selectOption, answer}) => {
    const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div className={`option
    ${quizState.answerSelect && option === answer ? "correct" : ""}
    ${quizState.answerSelect && option !== answer ? "wrong" : ""}`}
    onClick={() => selectOption()}>
    {option}
    </div>
  )
}

export default Options