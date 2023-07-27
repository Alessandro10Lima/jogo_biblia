import { useContext } from 'react';
import { QuizContext } from '../context/quiz';

import Quiz from '../images/start.png';

import './Welcome.css';

const Welcome = () => {
    const [, dispatch] = useContext(QuizContext);

    const handleStartGame = () => {
        dispatch({ type: "REORDER_QUESTIONS" }); 
        dispatch({ type: "CHANGE_STATE" });
    };

    const handleStartGameAllQuestions = () => {
        dispatch({ type: "REORDER_QUESTIONS_ALL" });
        dispatch({ type: "CHANGE_STATE" });
    };

    return (
        <div id="welcome">
            <h2>Seja bem-vindo!</h2>
            <p>Clique no botão abaixo para começar o jogo:</p>
            <button onClick={handleStartGame}>Iniciar</button>
            <button onClick={handleStartGameAllQuestions}>Responder Tudo</button>
            <img src={Quiz} alt="inicio" />
        </div>
    )
}

export default Welcome