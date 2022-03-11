import {Link} from 'react-router-dom'

import {FiArrowLeft} from 'react-icons/fi'

import './index.css'

const CardFlipGameRules = () => (
  <div className="card-flip-game-rules-main-con">
    <div className="card-flip-rules-back-btn-con">
      <Link to="/" className="cardFlip-backLinkBtn">
        <p className="cardFlip-backButton">
          <FiArrowLeft className="cardFlip-icon-leftArrow" />
          &nbsp;Back
        </p>
      </Link>
    </div>
    <div className="cardFlip-rules-img-con">
      <img
        src="https://res.cloudinary.com/saivarma/image/upload/v1635138635/animals_kz0mur.png"
        alt="cardFlipImg"
        className="cardFlip-rules-img"
      />
    </div>
    <div className="cardFlip-rules-list-Items-con">
      <h1 className="cardFlip-rules-txt">Rules</h1>
      <ul>
        <li className="cardFlip-rules-points">
          When the game is started, the users should be able to see the list of
          Cards that are shuffled and turned face down.
        </li>
        <li className="cardFlip-rules-points">
          When a user starts the game, the user should be able to see the Timer
          running.
        </li>
        <li className="cardFlip-rules-points">
          The Timer starts from 2 Minutes.
        </li>
        <li className="cardFlip-rules-points">
          If the two cards have the same image, they remain face up. If not,
          they should be flipped face down again after a short 2 seconds.
        </li>
        <li className="cardFlip-rules-points">
          Users should be able to compare only two cards at a time.
        </li>
        <li className="cardFlip-rules-points">
          When the user is not able to find all the cards before the timer ends
          then the game should end and redirect to the Time Up Page.
        </li>
        <li className="cardFlip-rules-points">
          If the user finds all the matching cards before the timer ends, then
          the user should be redirected to the results page.
        </li>
      </ul>
    </div>
    <div>
      <Link to="/cardflipgame" className="cardFlip-startGame-link-con">
        <button type="button" className="cardFlip-start-playing-btn">
          Start playing
        </button>
      </Link>
    </div>
  </div>
)

export default CardFlipGameRules
