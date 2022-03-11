import {Link} from 'react-router-dom'

import {FiArrowLeft} from 'react-icons/fi'

import './index.css'

const MatrixGameRules = () => (
  <div className="matrix-rules-main-con">
    <div className="backBtnCon">
      <Link to="/" className="backLinkBtn">
        <p className="matrix-game-backButton">
          <FiArrowLeft />
          &nbsp;Back
        </p>
      </Link>
    </div>
    <div className="rules-img-con">
      <h1 className="matrix-rules-main-heading">Memory Matrix</h1>
      <img
        src="https://res.cloudinary.com/saivarma/image/upload/v1635141098/memory_ddcwxu.jpg"
        alt="matrix game img"
        className="matrix-rules-img"
      />
    </div>
    <div className="rules-txt-con">
      <h1 className="rules-heading">Rules</h1>
      <ul>
        <li className="rulesListItem">
          In each level of the Game, Users should be able to see the Grid with
          (N X N) size starting from 3 and the grid will highlight N cells in
          Blue, the N highlighted cells will be picked randomly.
        </li>
        <li className="rulesListItem">
          The highlighted cells will remain N seconds for the user to memorize
          the cells. At this point, the user should not be able to perform any
          action.
        </li>
        <li>After N seconds, the grid will clear the N highlighted cells.</li>
        <li className="rulesListItem">
          At N seconds, the user can click on any cell. Clicking on a cell that
          was highlighted before it will turn blue. Clicking on the other cells
          that were not highlighted before then will turn to red.
        </li>
        <li className="rulesListItem">
          The user should be promoted to the next level if they guess all N
          cells correctly in one attempt.
        </li>
        <li className="rulesListItem">
          The user should be taken to the results page if the user clicks on the
          wrong cell.
        </li>
        <li className="rulesListItem">
          If the user completed all the levels, then the user should be taken to
          the results page.
        </li>
      </ul>
    </div>
    <Link
      to="/memorymatrixgamemainroute"
      className="memorymatrix-startPlayingLinkCon"
    >
      <button type="button" className="memorymatrix-btn">
        Start Playing
      </button>
    </Link>
  </div>
)
export default MatrixGameRules
