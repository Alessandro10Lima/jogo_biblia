import { createContext, useReducer } from "react";
import questions from '../data/questions'

const STAGES = ["Start", "Playing", "End"]

const initialState = {
    gameStage: STAGES[0],
    questions,
    currentQuestion: 0,
    score: 0,
    answerSelect: false
}

const quizReducer = (state, action) => {
    switch(action.type){
        case "CHANGE_STATE":
            return {
                ...state,
                gameStage: STAGES[1],
            };

        case "REORDER_QUESTIONS":
            const totalQuestions = 10;
            const reorder = questions.sort(() => Math.random() - 0.5);
            const selectedQuestions = reorder.slice(0, totalQuestions);

            return {
                ...state,
                questions: selectedQuestions,
                currentQuestion: 0,
                score: 0,
                answerSelect: false,
                gameStage: STAGES[0],
            };

            

        case "CHANGE_QUESTION":
            const nextQuestion = state.currentQuestion + 1;
            let endGame = false;

            if(nextQuestion >= state.questions.length){
                endGame = true;
            }

                return {
                    ...state,
                    currentQuestion: nextQuestion,
                    gameStage: endGame ? STAGES[2] : state.gameStage,
                    answerSelect: false
                };

        case "NEW_GAME":
            return initialState;

        case "CHECK_ANSWER":
            if(state.answerSelect) return state;
            
            const answer = action.payload.answer;
            const option = action.payload.option;
            let correct = 0;

            if(answer === option) correct = 1;

            return {
                ...state,
                score: state.score + correct,
                answerSelect: option
            };

        default:
            return state;
    }
}

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
    const value = useReducer(quizReducer, initialState);

    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};