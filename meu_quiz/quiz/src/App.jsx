import Welcome from './components/welcome'
import { useContext } from 'react';
import { QuizContext } from './context/quiz';
import Question from './components/Question';
import GameOver from './components/GameOver';


import './App.css'
import { useEffect } from 'react';





function App() {
 
  const [quizState, dispatch] = useContext(QuizContext);

  useEffect(() => {
    dispatch({type: "REORDER_QUESTIONS"})
  },[])

  return (
    <div className="App">
      <h1>Quiz de Programação </h1>
      {/* Aqui estou condicionando a exibição dos componentes conforme o Status do Quiz  */}
      { quizState.gameStage === "Start" &&  <Welcome />}
      { quizState.gameStage === "Playing" &&  <Question />}
      {quizState.gameStage === "End" && <GameOver/>}
    </div>
  )
}

export default App
