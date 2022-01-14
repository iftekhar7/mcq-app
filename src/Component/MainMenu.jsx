import React,{useContext} from 'react'
import { QuizContext } from "../Helper/Contex";
function MainMenu() {
    const { data, setData } = useContext(QuizContext)
    return (
        <div className='menu'>
        <button onClick={() =>  {
            setData("quiz")
        }}>
            Start Quiz</button>
        </div>
    )
}

export default MainMenu
