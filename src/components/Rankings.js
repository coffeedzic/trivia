import React, { useState } from 'react'
import '../styles/Rankings.css'

const Rankings = ({table}) => {
    const [currentPage, setCurrentPage] = useState(1)
    const [resultsPerPage, setResultsPerPage] = useState(10)

    const handleClick = (event) => {
        setCurrentPage(event.target.id)
    }

    const lastTableIndex = currentPage * resultsPerPage
    const firstTableIndex = lastTableIndex - resultsPerPage
    const currentResults = table.slice(firstTableIndex, lastTableIndex);
    const renderTable = currentResults.map((rank, index) => {
        return(
            <div className="row">
                    <span>{index + 1}</span>
                    <span>{rank.name}</span>
                    <span>{rank.correct_answers}</span>
                    <span>{rank.score}</span>
            </div>
        )
    });

    const pageNumbers = []

    for(let i = 1; i <= Math.ceil(table.length / resultsPerPage); i++) {
        pageNumbers.push(i)
    }

    const renderPageNumbers = pageNumbers.map(number => {
        return (
          <span
            key={number}
            id={number}
            onClick={handleClick}
          >
            {number}
          </span>
        );
      });

    return(
        <main>
            <div className="rankings">
                <div className="row head">
                    <span className="heading">Pos.</span>
                    <span className="heading">Name</span>
                    <span className="heading">Correct</span>
                    <span className="heading">Score</span>
                </div>
                {renderTable}
                <div className="pagination">
                    {renderPageNumbers}
                </div>
            </div>
        </main>
    )
}

export default Rankings