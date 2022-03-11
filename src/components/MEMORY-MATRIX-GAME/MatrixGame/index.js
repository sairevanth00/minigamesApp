import {Component} from 'react'

import {Link} from 'react-router-dom'

import {FiArrowLeft} from 'react-icons/fi'

import {IoMdClose} from 'react-icons//io'

import Popup from 'reactjs-popup'

import './index.css'

class MatrixGame extends Component {
  render() {
    return (
      <div className="matrix-game-main-con">
        <div className="back-btn-and-rules-btn-con">
          <Link to="/" className="mm-backLinkBtn">
            <p className="mm-backButton">
              <FiArrowLeft />
              &nbsp;Back
            </p>
          </Link>
          <div className="mm-rulesBtnCon">
            <Popup
              modal
              trigger={
                <button type="button" className="mm-rulesBtn">
                  Rules
                </button>
              }
            >
              {close => (
                <div className="popup-con">
                  <div className="close-icon-con">
                    <button
                      type="button"
                      className="trigger-button"
                      onClick={() => close()}
                    >
                      <IoMdClose className="close-cross-icon" />
                    </button>
                  </div>
                  <div>
                    <h1 className="mm-popupRulesHeading">Rules</h1>
                    <ul className="list-items-con">
                      <li className="mm-popupRulesTxt">
                        In each level of the Game, Users should be able to see
                        the Grid with (N X N) size starting from 3 and the grid
                        will highlight N cells in Blue, the N highlighted cells
                        will be picked randomly.
                      </li>
                      <li className="mm-popupRulesTxt">
                        The highlighted cells will remain N seconds for the user
                        to memorize the cells. At this point, the user should
                        not be able to perform any action.
                      </li>
                      <li className="mm-popupRulesTxt">
                        After N seconds, the grid will clear the N highlighted
                        cells.
                      </li>
                      <li className="mm-popupRulesTxt">
                        At N seconds, the user can click on any cell. Clicking
                        on a cell that was highlighted before it will turn blue.
                        Clicking on the other cells that were not highlighted
                        before then will turn to red.
                      </li>
                      <li className="mm-popupRulesTxt">
                        When the user clicks on the same Emoji for the second
                        time, then the user will lose the game.The user should
                        be promoted to the next level if they guess all N cells
                        correctly in one attempt.
                      </li>
                      <li className="mm-popupRulesTxt">
                        The user should be taken to the results page if the user
                        clicks on the wrong cell.
                      </li>
                      <li className="mm-popupRulesTxt">
                        If the user completed all the levels, then the user
                        should be taken to the results page.
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </Popup>
          </div>
        </div>

        <h1 className="mm-mainHeading">Memory Matrix</h1>

        <div className="matrix-boxes-con">
          <p>Level - 1</p>
        </div>
      </div>
    )
  }
}

export default MatrixGame
