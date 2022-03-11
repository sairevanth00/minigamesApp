import {Component} from 'react'

import {Link} from 'react-router-dom'

import {FiArrowLeft} from 'react-icons/fi'

import {IoMdClose} from 'react-icons/io'

import Popup from 'reactjs-popup'

import './index.css'

const gameCardList = [
  {
    id: 1,
    imageUrl:
      'https://res.cloudinary.com/saivarma/image/upload/v1636722053/image-1_a9k4me.png',
  },
  {
    id: 2,
    imageUrl:
      'https://res.cloudinary.com/saivarma/image/upload/v1636722053/image-2_rbzbcr.png',
  },
  {
    id: 3,
    imageUrl:
      'https://res.cloudinary.com/saivarma/image/upload/v1636722054/image-3_txtt2z.png',
  },
  {
    id: 4,
    imageUrl:
      'https://res.cloudinary.com/saivarma/image/upload/v1636722058/image-4_id6uhx.png',
  },
  {
    id: 5,
    imageUrl:
      'https://res.cloudinary.com/saivarma/image/upload/v1636722059/image-5_ywtocb.png',
  },
  {
    id: 6,
    imageUrl:
      'https://res.cloudinary.com/saivarma/image/upload/v1636722061/image-6_jnmzzy.png',
  },
  {
    id: 7,
    imageUrl:
      'https://res.cloudinary.com/saivarma/image/upload/v1636722064/image-7_azy8us.png',
  },
  {
    id: 8,
    imageUrl:
      'https://res.cloudinary.com/saivarma/image/upload/v1636722061/image-8_p1r95c.png',
  },
  {
    id: 9,
    imageUrl:
      'https://res.cloudinary.com/saivarma/image/upload/v1636722058/image-9_ezzefv.png',
  },
  {
    id: 10,
    imageUrl:
      'https://res.cloudinary.com/saivarma/image/upload/v1636722060/image-10_mgfdsj.png',
  },
]

class CardFlipGame extends Component {
  state = {
    initialImgList: [...gameCardList, ...gameCardList].sort(
      () => Math.random() - 0.5,
    ),
    isCardFlip: false,
    timer: 120,
    isTimerRunning: false,
  }

  componentDidMount() {
    this.startCardFlipGame()
  }

  componentWillUnmount() {
    const {timer} = this.state
    if (timer < 0) {
      clearInterval(this.setTimer)
      this.setState({isTimerRunning: false})
    }
  }

  startCardFlipGame = () => {
    this.setTimer = setInterval(this.timeIntervalDecrease, 1000)
    this.setState({isTimerRunning: true})
  }

  onClickCardBtn = () => {
    this.setState(prevState => ({isCardFlip: !prevState.isCardFlip}))
  }

  timeIntervalDecrease = () => {
    this.setState(prevState => ({timer: prevState.timer - 1}))
  }

  renderTimerTxt = () => {
    const {timer} = this.state
    const minutes = Math.floor(timer / 60)
    const seconds = Math.floor(timer % 60)
    console.log(minutes)
    console.log(seconds)
    const stringifiedMinutes = minutes < 10 ? `0${minutes}` : minutes
    const stringifiedSeconds = seconds < 10 ? `0${seconds}` : seconds

    return `${stringifiedMinutes} : ${stringifiedSeconds}`
  }

  render() {
    const {initialImgList, isCardFlip, isTimerRunning} = this.state
    return (
      <div className="cd-flip-game-main-con">
        <div className="back-btn-popup-rules-btn-con">
          <Link to="/" className="cd-flip-back-link">
            <p className="cd-flip-back-btn-txt">
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
                    <h1 className="cd-flip-popupRulesHeading">Rules</h1>
                    <ul className="cd-flip-list-items-con">
                      <li className="cd-flip-popupRulesTxt">
                        When the game is started, the users should be able to
                        see the list of Cards that are shuffled and turned face
                        down.
                      </li>
                      <li className="cd-flip-popupRulesTxt">
                        When a user starts the game, the user should be able to
                        see the Timer running.
                      </li>
                      <li className="cd-flip-popupRulesTxt">
                        The Timer starts from 2 Minutes.
                      </li>
                      <li className="cd-flip-popupRulesTxt">
                        If the two cards have the same image, they remain face
                        up. If not, they should be flipped face down again after
                        a short 2 seconds.
                      </li>
                      <li className="cd-flip-popupRulesTxt">
                        Users should be able to compare only two cards at a
                        time.
                      </li>
                      <li className="cd-flip-popupRulesTxt">
                        When the user is not able to find all the cards before
                        the timer ends then the game should end and redirect to
                        the Time Up Page.
                      </li>
                      <li className="cd-flip-popupRulesTxt">
                        If the user finds all the matching cards before the
                        timer ends, then the user should be redirected to the
                        results page.
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </Popup>
          </div>
        </div>
        <h1 className="cd-flip-game-main-heading">Card-Flip Memory Game</h1>

        <button
          type="button"
          disabled={isTimerRunning}
          onClick={this.startCardFlipGame}
          className="startGameButton"
        >
          Start Game
        </button>
        <div className="cd-flip-game-main-con-and-result-view-con">
          <div className="results-main-con">
            <p>Card Flip Count - 00</p>
            <p>{this.renderTimerTxt()}</p>
            <p>Score - 00</p>
          </div>
          <div className="cards-main-con">
            {initialImgList.map(eachItem => (
              <div className="card-outer">
                <button
                  type="button"
                  className="card"
                  onClick={this.onClickCardBtn}
                >
                  {/* {isCardFlip ? ( */}
                  <div className="front" key={eachItem.id}>
                    <img
                      src={eachItem.imageUrl}
                      alt="animal img"
                      className="card-foot-img"
                    />
                  </div>
                  {/* ) : (
                    <div className="back">
                      <img
                        src="https://res.cloudinary.com/saivarma/image/upload/v1636723848/foot-print_20_ujaxrp.png"
                        alt="foot print"
                        className="card-foot-img"
                      />
                    </div>
                  )} */}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default CardFlipGame
