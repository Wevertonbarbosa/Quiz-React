import React from 'react';
import { useContext } from 'react';
import { QuizContext } from '../context/quiz';
import Option from './Option';

import './Question.css';

function Question() {
    const [quizState, dispatch] = useContext(QuizContext);
    //Esta variavel esta armazenando a pergunta question no indice 0
    const currentQuestion = quizState.questions[quizState.currentQuestion];

    const onSelectOption = (option) => {
        dispatch({
            type: 'CHECK_ANSWER',
            payload: { answer: currentQuestion.answer, option },
        });
    };

    return (
        <div className="main-questions_Options">
            <div className="questions-content">
                <p>
                    Perguntas {quizState.currentQuestion + 1} de{' '}
                    {quizState.questions.length}
                </p>
                <h2>{currentQuestion.question}</h2>

                {quizState.answerSelected && (
                    <p id="answer-question">
                        A Resposta é <span>{`${currentQuestion.answer}`}</span>
                    </p>
                )}
            </div>
            <div className="container-options">
                {currentQuestion.options.map((option) => (
                    <Option
                        option={option}
                        key={option}
                        answer={currentQuestion.answer}
                        selectOption={() => onSelectOption(option)}
                    />
                ))}
                {quizState.answerSelected && (
                    <button
                        onClick={() => dispatch({ type: 'CHANGE_QUESTION' })}
                    >
                        Continuar
                    </button>
                )}
            </div>
        </div>
    );
}

export default Question;
