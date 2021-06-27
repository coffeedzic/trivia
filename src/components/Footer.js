import React from 'react'
import '../styles/Footer.css'

const Footer = ({ranking, setRanking, setPage}) => {
    const handleClick = () => {
        ranking ? setPage(0) : setPage(3)
        if(ranking) {
            setPage(0)
            setRanking(!ranking)
        } else {
            setPage(3)
            setRanking(!ranking)
        }
    }

    return(
        <footer>
            <span onClick={handleClick}>{ranking ? 'Home' : 'View Ranking'}</span>
            <ul className="icons">
                <li><a href="https://github.com/coffeedzic"><i className="fab fa-github" aria-hidden="true"></i></a></li>
                <li><a href="https://www.linkedin.com/in/edin-kahved%C5%BEi%C4%87-497724197/"><i className="fab fa-linkedin-in" aria-hidden="true"></i></a></li>
                <li><a href="https://www.facebook.com/edincoffeedzic/"><i className="fab fa-facebook-f" aria-hidden="true"></i></a></li>
                <li><a href="https://www.instagram.com/edincoffeedzic/"><i className="fab fa-instagram" aria-hidden="true"></i></a></li>
            </ul>
            <p>Created by <a href="https://coffeedzic.com/">Edin Kahvedžić</a></p>
        </footer>
    )
}

export default Footer