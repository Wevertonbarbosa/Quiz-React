import React from 'react';
import { useContext } from 'react';
import { QuizContext } from '../context/quiz';

import './GameOver.css';

function GameOver() {
    const [quizState, dispatch] = useContext(QuizContext);
    return (
        <div className="Container-GameOver">
            <div className="content-game">
                <h2>Fim de Jogo!</h2>
                <p>Pontuação: {quizState.score}</p>
                <p>
                    Você acertou {quizState.score} de{' '}
                    {quizState.questions.length} perguntas.
                </p>
                <button onClick={() => dispatch({ type: 'NEW_GAME' })}>
                    Reiniciar
                </button>
            </div>
        </div>
    );
}

export default GameOver;
