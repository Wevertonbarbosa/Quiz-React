import React from 'react';

//Este Hook do React me permite a passar o valor para os outros componentes sem precisar de "props"
import { useContext } from 'react';
import { QuizContext } from '../context/quiz';

import './welcome.css';

const Welcome = () => {
    //Esta é a sintaxe para o consumo do valor do Context que crie no quiz.jsx
    //Estou desestruturando e usando o dispatch que me permitir entrar no uso logica do reducer que estou ussando o Switch esta é uma forma padrão do uso do REDUCER com o quizState eu pego os valores e com o Dispatch eu consigo alterar os valores
    const [quizState, dispatch] = useContext(QuizContext);

    return (
        <div className="container-welcome">
            <div className="content-welcome">
                <div className="title-welcome">
                    <h1>Quiz de Programação</h1>
                </div>
                <div className="container-startQuiz">
                    <h2>Seja Bem-Vindo</h2>
                    <p>Clique no botão abaixo para começar</p>
                    {/* Esta função irar alterar os valores no Reducer no caso o Switch  */}
                    <button onClick={() => dispatch({ type: 'CHANGE_STATE' })}>
                        Iniciar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Welcome;
