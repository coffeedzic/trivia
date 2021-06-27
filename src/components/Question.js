import React, { useState, useEffect } from 'react'
import '../styles/Question.css'
import {decode} from 'html-entities'

const Question = ({trivia, questionNumber, setQuestionNumber, length, correctAnswers, setCorrectAnswers, score, setScore, setPage}) => {
    const [answers, setAnswers] = useState('')
    const [moveOn, setMoveOn] = useState(false)
    const [style, setStyle] = useState(Array(4).fill(null))
    const [clicked, setClicked] = useState(false)
    const [timer, setTimer] = useState(20)
    const [stopTimer, setStopTimer] = useState(false)

    useEffect(() => {
        let answers = trivia.incorrect_answers
        answers.push(trivia.correct_answer)
        answers.sort(() => Math.random() - 0.5)
        setAnswers(answers)
    }, [questionNumber])

    const time = setTimeout(() => {
                    if(timer > 0) {
                        setTimer(timer - 1)
                    } else {
                        setClicked(true)
                        setMoveOn(true)
                    }                    
                }, 1000)

    if(stopTimer) {
        clearTimeout(time)
    }

    const border = {
        borderColor: '#ffffff'
    }

    const handleClick = (val) => {
        if(!clicked) {
            setStopTimer(true)
            let newStyle = [...style]        
            for(let i = 0; i < 4; i++) {
                if(answers[i] === trivia.correct_answer) {
                    newStyle[i] = {
                        backgroundColor: '#49c260',
                        color: '#ffffff'
                    }
                    break;
                }                       
            }
            if(val !== trivia.correct_answer) {            
                for(let i = 0; i < 4; i++) {                
                    if(answers[i] === val) {
                        newStyle[i] = {
                            backgroundColor: '#ff6667',
                            color: '#ffffff'
                        }
                        break;
                    }
                }
            }
            if(val === trivia.correct_answer) {
                setCorrectAnswers(correctAnswers + 1)
                setScore(score + timer)        
            }
            setMoveOn(true)
            setStyle(newStyle)
            setClicked(true)
        }
    }

    const nextQuestion = () => {
        if(questionNumber >= length) {
            setPage(2)
        } else {
            setQuestionNumber(questionNumber)
            setClicked(false)
            setMoveOn(false)
            setStyle(Array(4).fill(null))
            setTimer(20)
            setStopTimer(false)
        }        
    }


    return(
        <div className="quiz">
            <div className="status">
                <span className="number-of-question">Question {questionNumber} of {length}</span>
                <span className="time-left">{timer}s</span>
            </div>
            <div className="question">
                <span className="name">{decode(trivia.question)}</span>
                <span className="category">{decode(trivia.category)}</span>
            </div>
            <div className="answers">
                <div className="answer" style={style[0]} onClick={() => {handleClick(answers[0])}} >
                    <span className="letter" style={style[0] ? border : null} >A</span>
                    <span className="name">{decode(answers[0])}</span>
                </div>
                <div className="answer" style={style[1]} onClick={() => {handleClick(answers[1])}} >
                    <span className="letter" style={style[1] ? border : null}>B</span>
                    <span className="name">{decode(answers[1])}</span>
                </div>
                <div className="answer" style={style[2]} onClick={() => {handleClick(answers[2])}} >
                    <span className="letter" style={style[2] ? border : null}>C</span>
                    <span className="name">{decode(answers[2])}</span>
                </div>
                <div className="answer" style={style[3]} onClick={() => {handleClick(answers[3])}} >
                    <span className="letter" style={style[3] ? border : null}>D</span>
                    <span className="name">{decode(answers[3])}</span>
                </div>
            </div>
            <div className="bottom">
                <div className="stats">
                    <span>Correct answers: {correctAnswers}</span>
                    <span>Score: {score}</span>
                </div>
                {moveOn ? <button onClick={nextQuestion}>Next</button> : null}
            </div>
        </div>
    )
}

export default Question