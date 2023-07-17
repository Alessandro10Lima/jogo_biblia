import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import WellDone from '../images/3.svg';

import './GameOver.css';

function GameOver() {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="gameover">
        <h2>Fim de jogo!</h2>
        <p>Pontuação: {quizState.score}</p>
        <p>Você acertou {quizState.score} de {quizState.questions.length}{" "} perguntas.</p>
        <img src={WellDone} alt="fim do quiz" />
        <button onClick={() => dispatch({ type: "NEW_GAME"})}>Reiniciar o jogo</button>
    </div>
  )
}

export default GameOver