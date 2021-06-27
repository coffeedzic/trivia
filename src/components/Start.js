import React from 'react'
import '../styles/Start.css'
import simpleAlert from '../resources/simple-alert.js'

const Start = ({playerName, handleName, setPage}) => {
    const handleStart = () => {
        if(playerName.length >= 3) {
            setPage(1)
        } else {
            simpleAlert.error('Name must contain at least 3 and maximum of 16 characters')
        }
    }

    return(
        <main>
            <div className="start-game">
                <div className="heading">
                    <h2>Start the game!</h2>
                    <p>Enter your name & click the button to start quiz!</p>
                </div>
                <div className="input">
                    <input type="text" value={playerName} onChange={handleName} placeholder="Enter your name" />
                    <button onClick={handleStart}>Start</button>
                </div>
            </div>
        </main>
    )
}

export default Start