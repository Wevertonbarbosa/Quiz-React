import { createContext, useReducer } from 'react';
import questions from '../data/questions';

//Criei uma variavel em que controla o status do Jogo
const STAGES = ['Start', 'Playing', 'End'];

//O uso do Reducer vai me possibilitar a ter uma gestão de stados complexos ou que tenha mais condições para ter uma efeito ou uma ação.
//Esta variavel esta mostrando o estado atual incial do jogador!
const intialState = {
    gameStage: STAGES[0],
    questions,
    currentQuestion: 0,
    score: 0,
    answerSelected: false,
};

//Agora vou criar uma variavel em que me possibilita alterar os estados usando o reducer ela é um comprimento do reducer(algo para ser estudado mais pra frente)
const quizReducer = (state, action) => {
    //vamos mudar os estados com a ação do Switch
    switch (action.type) {
        case 'CHANGE_STATE':
            return {
                //Estou trazendo as question com esses ... ele traz o estado anterior e permitir adicionar outras coisa que eu quero incrementar por que sem ele iria apenas o STAGES = Playing sem as question
                ...state,
                gameStage: STAGES[1], //No returno criei um novo Objeto e atualizei o estado agora para STAGES = Playing agora vai renderizar o componente Question
            };

        case 'REORDER_QUESTIONS':
            const reorderQuestions = questions.sort(() => {
                return Math.random() - 0.5;
            });

            return {
                ...state,
                questions: reorderQuestions,
            };

        case 'CHANGE_QUESTION':
            const nextQuestion = state.currentQuestion + 1;

            let endGame = false;

            //Se o indice futuro não tiver resultado, então será o fim do Jogo
            if (!questions[nextQuestion]) {
                endGame = true;
            }

            return {
                ...state,
                currentQuestion: nextQuestion,
                gameStage: endGame ? STAGES[2] : state.gameStage,
                answerSelected: false 
            };

        case 'NEW_GAME':
            return intialState;

        case 'CHECK_ANSWER':

            if (state.answerSelected) return state; 
            
            const answer = action.payload.answer;
            const option = action.payload.option;
            let correctAnswwer = 0;

            if (answer === option) correctAnswwer = 1;

            return {
                ...state,
                score: state.score + correctAnswwer,
                answerSelected: option,
            }

        default:
            return state;
    }
};

//O Context ele é utilizado para ser consumido dentro dos componentes
export const QuizContext = createContext();

// Como pradrão é necessario a criação do Provider ele é quem vai prover ou exportar a aplicação para os outros componentes ele é o percursos para dar acesso ao conteudo do Context para os outros componentes

// O Children ele é uma tecnica em que me permite ter componentes dentro de outro componente ou seja ele encapsula um componente no outro
export const QuizProvider = ({ children }) => {
    //O valor agora dos contextos estarão sendo manipulados/alterados pelo quizReducer
    // E como valor padrão para inicio do jogo vai se inicializar com o initialState o u seja do 0
    const value = useReducer(quizReducer, intialState);
    return (
        <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
    );
};
