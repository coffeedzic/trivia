import React from 'react'
import Question from './Question'

const Quiz = ({trivia, questionNumber, setQuestionNumber, correctAnswers, setCorrectAnswers, score, setScore, setPage}) => {
    return(
        <main>
            <Question
                trivia={trivia.results[questionNumber]}
                questionNumber={questionNumber + 1}
                setQuestionNumber={setQuestionNumber}
                length={trivia.results.length}
                correctAnswers={correctAnswers} 
                setCorrectAnswers={setCorrectAnswers} 
                score={score} 
                setScore={setScore}
                setPage={setPage}
            />
        </main>
    )
}

export default Quiz