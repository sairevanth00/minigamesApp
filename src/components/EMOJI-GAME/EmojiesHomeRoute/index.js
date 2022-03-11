import {Component} from 'react'

import {Link} from 'react-router-dom'

import {FiArrowLeft} from 'react-icons/fi'

import {IoMdClose} from 'react-icons/io'

import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import EmojiesCard from '../EmojiesCard'

import EmojiesNavbar from '../EmojiesNavbar'

import EmojiesWinOrLossCard from '../EmojiesWinOrLossCard'

import './index.css'

class EmojiesHomeRoute extends Component {
  state = {
    clickedEmojisList: [],
    isGameInProgress: true,
    topScore: 0,
  }

  resetGame = () => {
    this.setState({clickedEmojisList: [], isGameInProgress: true})
  }

  renderScoreCard = () => {
    const {emojisList} = this.props
    const {clickedEmojisList} = this.state
    const isWon = clickedEmojisList.length === emojisList.length

    return (
      <EmojiesWinOrLossCard
        isWon={isWon}
        onClickPlayAgain={this.resetGame}
        score={clickedEmojisList.length}
      />
    )
  }

  finishGameAndSetTopScore = currentScore => {
    const {topScore} = this.state
    let newTopScore = topScore

    if (currentScore > topScore) {
      newTopScore = currentScore
    }

    this.setState({topScore: newTopScore, isGameInProgress: false})
  }

  clickEmoji = id => {
    const {emojisList} = this.props
    const {clickedEmojisList} = this.state
    const isEmojiPresent = clickedEmojisList.includes(id)
    const clickedEmojisLength = clickedEmojisList.length

    if (isEmojiPresent) {
      console.log(emojisList.length)
      this.finishGameAndSetTopScore(clickedEmojisLength)
    } else {
      if (emojisList.length - 1 === clickedEmojisLength) {
        this.finishGameAndSetTopScore(emojisList.length)
      }
      this.setState(previousState => ({
        clickedEmojisList: [...previousState.clickedEmojisList, id],
      }))
    }
  }

  getShuffledEmojisList = () => {
    const {emojisList} = this.props

    return emojisList.sort(() => Math.random() - 0.5)
  }

  renderEmojisList = () => {
    const shuffledEmojisList = this.getShuffledEmojisList()

    return (
      <ul className="emojis-list-container">
        {shuffledEmojisList.map(emojiObject => (
          <EmojiesCard
            key={emojiObject.id}
            emojiDetails={emojiObject}
            clickEmoji={this.clickEmoji}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {clickedEmojisList, isGameInProgress, topScore} = this.state

    return (
      <div className="app-container">
        <EmojiesNavbar
          currentScore={clickedEmojisList.length}
          isGameInProgress={isGameInProgress}
          topScore={topScore}
        />
        <div className="backBtnRulesBtnCon">
          <Link to="/" className="backLinkBtn">
            <p className="backButton">
              <FiArrowLeft className="emoji-back-icon" /> Back
            </p>
          </Link>
          <div className="rulesBtnCon">
            <Popup
              modal
              trigger={
                <button type="button" className="rulesBtn">
                  Rules
                </button>
              }
            >
              {close => (
                <div className="popUpmainCon">
                  <div className="closeBtnCon">
                    <button
                      type="button"
                      className="trigger-close-button"
                      onClick={() => close()}
                    >
                      <IoMdClose className="crossIcon" />
                    </button>
                  </div>
                  <div>
                    <h1 className="popupRulesHeading">Rules</h1>
                    <ul className="popupRulesCon">
                      <li className="popupRulesTxt">
                        User should be able to see the list of Emojis
                      </li>
                      <li className="popupRulesTxt">
                        When the user clicks any one of the Emoji for the first
                        time, then the count of the score should be incremented
                        by 1 and the List of emoji cards should be shuffled.
                      </li>
                      <li className="popupRulesTxt">
                        This process should be repeated every time the user
                        clicks on an emoji card
                      </li>
                      <li className="popupRulesTxt">
                        When the user clicks on all Emoji cards without clicking
                        any of it twice, then the user will win the game
                      </li>
                      <li className="popupRulesTxt">
                        When the user clicks on the same Emoji for the second
                        time, then the user will lose the game.
                      </li>
                      <li className="popupRulesTxt">
                        Once the game is over, the user will be redirected to
                        the results page.
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </Popup>
          </div>
        </div>
        <div className="emoji-game-body">
          {isGameInProgress ? this.renderEmojisList() : this.renderScoreCard()}
        </div>
      </div>
    )
  }
}

export default EmojiesHomeRoute
