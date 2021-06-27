import React, { useEffect } from 'react'
import '../styles/End.css'
import medal from '../images/medal.png'
import axios from 'axios'

const End = ({playerName, correctAnswers, setCorrectAnswers, score, setScore, setQuestionNumber, newGame, setNewGame, setPage}) => {
    useEffect(() => {
        axios.post('https://apps.coffeedzic.com/trivia/api/save.php',
            {
                api: 'coffeedzic',
                name: playerName,
                correct_answers: correctAnswers,
                score: score })
    }, []);

    const playAgain = () => {
        setNewGame(newGame + 1)
        setCorrectAnswers(0)
        setScore(0)
        setQuestionNumber(0)
        setPage(0)
    }
    return (
        <main>
            <div className="end">
                <img src={medal} />
                <h2>Congratulations</h2>
                <p>You correctly answered {correctAnswers} out of 20 questions</p>
                <span className="score">Score: {score}</span>
                <button onClick={playAgain}><i className="fas fa-play-circle"></i> Play again</button>
            </div>
        </main>
    )
}

export default End