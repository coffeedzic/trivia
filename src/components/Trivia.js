import React, { useState, useEffect } from 'react'
import Header from './Header'
import Start from './Start'
import Quiz from './Quiz'
import End from './End'
import Rankings from './Rankings'
import Footer from './Footer'
import '../styles/Trivia.css'
import axios from 'axios'

const Trivia = () => {
    const [page, setPage] = useState(0)
    const [playerName, setPlayerName] = useState(localStorage.getItem('playerName') ? localStorage.getItem('playerName') : '')
    const [trivia, setTrivia] = useState(false)
    const [newGame, setNewGame] = useState(0)
    const [questionNumber, setQuestionNumber] = useState(0)
    const [correctAnswers, setCorrectAnswers] = useState(0)
    const [score, setScore] = useState(0)
    const [ranking, setRanking] = useState(false)
    const [table, setTable] = useState('')

    useEffect(() => {
      axios.get('https://opentdb.com/api.php?amount=20&type=multiple')
        .then(res => {
          setTrivia(res.data)
        })
      
      axios.get('https://apps.coffeedzic.com/trivia/api/rankings.php')
        .then(res => {
          setTable(res.data)
        })
    }, [newGame])

    const handleName = (event) => {
      const {value} = event.target
      setPlayerName(value)
      localStorage.setItem('playerName', value)
    }

    const getPage = () => {
        switch (page) {
          case 0:
            return <Start
                      playerName={playerName}
                      handleName={handleName}
                      setPage={setPage}
                    />
          case 1:
            return <Quiz
                      trivia={trivia}
                      questionNumber={questionNumber}
                      setQuestionNumber={setQuestionNumber}
                      correctAnswers={correctAnswers}
                      setCorrectAnswers={setCorrectAnswers}
                      score={score}
                      setScore={setScore}
                      setPage={setPage}
                    />
          case 2:
            return <End
                      playerName={playerName}
                      correctAnswers={correctAnswers}
                      setCorrectAnswers={setCorrectAnswers}
                      score={score}
                      setScore={setScore}
                      setQuestionNumber={setQuestionNumber}
                      newGame={newGame}
                      setNewGame={setNewGame}
                      setPage={setPage}
                    />
          case 3:
            return <Rankings
                      table={table}
                    />      
        }
    }

    return(
        <div className="wrapper">
            <Header />
            {getPage()}
            <Footer ranking={ranking} setRanking={setRanking} setPage={setPage} />
        </div>
    )
}

export default Trivia