import {Link} from 'react-router-dom'

import {FiArrowLeft} from 'react-icons/fi'

import './index.css'

const RpsGameRules = () => (
  <div className="rps-game-rules-main-con">
    <div className="rps-back-btn-con">
      <Link to="/" className="rps-backLinkBtn">
        <p className="rps-backButton">
          <FiArrowLeft className="leftArrow" />
          &nbsp;Back
        </p>
      </Link>
    </div>
    <div className="rps-game-rules-heading-img-con">
      <h1 className="rpsGameMainHeading">ROCK PAPER SCISSOR</h1>
      <img
        src="https://res.cloudinary.com/saivarma/image/upload/v1635138635/Group_7469_ukkg1b.png"
        alt="rps-game"
        className="rps-game-rules-img"
      />
    </div>
    <div className="rps-game-rules-points-con">
      <h1 className="rules-text">Rules</h1>
      <ul className="rps-rules-points-con">
        <li className="rps-rules-points">
          The game result should be based on user and user opponent choices
        </li>
        <li className="rps-rules-points">
          When the user choice is rock and his opponent choice is rock then the
          result will be <span className="highlight-txt">IT IS DRAW</span>
        </li>
        <li className="rps-rules-points">
          When the user choice is paper and his opponent choice is rock then the
          result will be <span className="highlight-txt">YOU WON</span>
        </li>
        <li className="rps-rules-points">
          When the user choice is a scissor and his opponent choice is rock then
          the result will be <span className="highlight-txt">YOU LOSE</span>
        </li>
        <li className="rps-rules-points">
          When the user choice is paper and his opponent choice is paper then
          the result will be <span className="highlight-txt">IT IS DRAW</span>
        </li>
        <li className="rps-rules-points">
          When the user choice is scissors and his opponent choice is paper then
          the result will be <span className="highlight-txt">YOU WON</span>
        </li>
        <li className="rps-rules-points">
          When the user choice is rock and his opponent choice is scissors then
          the result will be <span className="highlight-txt">YOU WON</span>
        </li>
        <li className="rps-rules-points">
          When the user choice is paper and his opponent choice is scissors then
          the result will be <span className="highlight-txt">YOU LOSE</span>
        </li>
        <li className="rps-rules-points">
          When the user choice is scissors and his opponent choice is scissors
          then the result will be
          <span className="highlight-txt">IT IS DRAW</span>
        </li>
        <li className="rps-rules-points">
          When the result is <span className="highlight-txt">YOU WON</span>,
          then the count of the score should be incremented by 1
        </li>
        <li className="rps-rules-points">
          When the result is <span className="highlight-txt">IT IS DRAW</span>,
          then the count of the score should be the same
        </li>
        <li className="rps-rules-points">
          When the result is <span className="highlight-txt">YOU LOSE</span>,
          then the count of the score should be decremented by 1.
        </li>
      </ul>
    </div>
    <div className="rps-game-start-btn-con">
      <Link to="/rpsgame" className="startPlayingLink">
        <button type="button" className="rps-game-start-btn">
          Start playing
        </button>
      </Link>
    </div>
  </div>
)

export default RpsGameRules
