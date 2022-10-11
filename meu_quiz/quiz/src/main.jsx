import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
//Ele vai prover os contextos para os outros componetes
import { QuizProvider } from './context/quiz';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <QuizProvider>
            <App />
        </QuizProvider>
    </React.StrictMode>
);
