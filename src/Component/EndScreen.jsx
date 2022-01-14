import React,{useContext} from 'react'
import { Questions } from '../Helper/QuestionBank';
import { QuizContext } from "../Helper/Contex";
function EndScreen() {
    const {  score, setScore, setData } = useContext(QuizContext);
    
    const restartQuiz=()=>{
        setScore(0);
        setData("menu");
    };
    return (
        <div className='EndScreen'>
            {""}
            <h1>Quiz Finished</h1>
            <h3>
                {""}
                {score} / {Questions.length}{""}
            </h3>
           <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
    )
}

export default EndScreen
