import { useContext } from 'react';
import { QuizContext } from '../context/quiz';

import Quiz from '../images/start.png';

import './Welcome.css';

const Welcome = () => {
    const [quizState, dispatch] = useContext(QuizContext);

    return (
        <div id="welcome">
            <h2>Seja bem-vindo!</h2>
            <p>Clique no botão abaixo para começar o jogo:</p>
            <button onClick={() => dispatch({type: "CHANGE_STATE"})}>Iniciar</button>
            <img src={Quiz} alt="inicio" />
        </div>
    )
}

export default Welcome