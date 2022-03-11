import {Component} from 'react'

import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import {Link} from 'react-router-dom'

import {FiArrowLeft} from 'react-icons/fi'

import {IoMdClose} from 'react-icons//io'

import RpsGameImageListItems from '../RpsGameImageListItems'

import './index.css'

const rockImgUrl =
  'https://res.cloudinary.com/saivarma/image/upload/v1636638412/Group_7600_zyuojs.png'
const paperImgUrl =
  'https://res.cloudinary.com/saivarma/image/upload/v1636638456/Group_6943_aetcuz.png'
const scissorImgUrl =
  'https://res.cloudinary.com/saivarma/image/upload/v1636638411/Group_7598_p7k7ar.png'

const choicesList = [
  {
    id: 'ROCK',
    image:
      'https://res.cloudinary.com/saivarma/image/upload/v1636638412/Group_7600_zyuojs.png',
  },
  {
    id: 'SCISSORS',
    image:
      'https://res.cloudinary.com/saivarma/image/upload/v1636638411/Group_7598_p7k7ar.png',
  },
  {
    id: 'PAPER',
    image:
      'https://res.cloudinary.com/saivarma/image/upload/v1636638456/Group_6943_aetcuz.png',
  },
]

const headerEmojiWonImgUrl =
  'https://res.cloudinary.com/saivarma/image/upload/v1636643206/Group_7618_2_xywxaj.png'
const headerEmojiLossImgUrl =
  'https://res.cloudinary.com/saivarma/image/upload/v1636650598/WhatsApp_Image_2021-11-11_at_10.34.34_PM_zubee7.jpg'
const headerEmojiDrawImgUrl =
  'https://res.cloudinary.com/saivarma/image/upload/v1636643207/Group_7618_3_avl27q.png'

const resultEmojiWonImgUrl =
  'https://res.cloudinary.com/saivarma/image/upload/v1636638936/Emoji_2_ertdxc.png'
const resultEmojiLossImgUrl =
  'https://res.cloudinary.com/saivarma/image/upload/v1636638936/Emoji_3_iz5yfr.png'
const resultEmojiDrawImgUrl =
  'https://res.cloudinary.com/saivarma/image/upload/v1636638936/Emoji_1_d6lror.png'

class App extends Component {
  state = {
    isGameStart: false,
    userSelectedImgUrl: '',
    randomGeneratedImgUrl: '',
    headerEmojiImgUrl: '',
    resultEmojiImgUrl: '',
    userWonLossTxt: '',
    score: 0,
  }

  componentDidMount() {}

  onClickPlayAgainBtn = () => {
    this.setState({isGameStart: false})
  }

  getOnclickImageItemUrl = image => {
    const randomNum = Math.floor(Math.random() * choicesList.length)

    this.setState({
      isGameStart: true,
    })

    if (
      image === rockImgUrl &&
      choicesList[randomNum].image === scissorImgUrl
    ) {
      this.setState({
        userWonLossTxt: 'YOU WON',
        headerEmojiImgUrl: headerEmojiWonImgUrl,
        resultEmojiImgUrl: resultEmojiWonImgUrl,
        userSelectedImgUrl: image,
        randomGeneratedImgUrl: choicesList[randomNum].image,
      })
      this.setState(prevState => ({score: prevState.score + 1}))
      console.log(this.userWonLossTxt)
    } else if (
      image === scissorImgUrl &&
      choicesList[randomNum].image === rockImgUrl
    ) {
      this.setState({
        userWonLossTxt: 'YOU LOSE',
        headerEmojiImgUrl: headerEmojiLossImgUrl,
        resultEmojiImgUrl: resultEmojiLossImgUrl,
        userSelectedImgUrl: image,
        randomGeneratedImgUrl: choicesList[randomNum].image,
      })
      this.setState(prevState => ({score: prevState.score - 1}))
    } else if (
      image === scissorImgUrl &&
      choicesList[randomNum].image === paperImgUrl
    ) {
      this.setState({
        userWonLossTxt: 'YOU WON',
        headerEmojiImgUrl: headerEmojiWonImgUrl,
        resultEmojiImgUrl: resultEmojiWonImgUrl,
        userSelectedImgUrl: image,
        randomGeneratedImgUrl: choicesList[randomNum].image,
      })
      this.setState(prevState => ({score: prevState.score + 1}))
    } else if (
      image === paperImgUrl &&
      choicesList[randomNum].image === scissorImgUrl
    ) {
      this.setState({
        userWonLossTxt: 'YOU LOSE',
        headerEmojiImgUrl: headerEmojiLossImgUrl,
        resultEmojiImgUrl: resultEmojiLossImgUrl,
        userSelectedImgUrl: image,
        randomGeneratedImgUrl: choicesList[randomNum].image,
      })
      this.setState(prevState => ({score: prevState.score - 1}))
    } else if (
      image === paperImgUrl &&
      choicesList[randomNum].image === rockImgUrl
    ) {
      this.setState({
        userWonLossTxt: 'YOU WON',
        headerEmojiImgUrl: headerEmojiWonImgUrl,
        resultEmojiImgUrl: resultEmojiWonImgUrl,
        userSelectedImgUrl: image,
        randomGeneratedImgUrl: choicesList[randomNum].image,
      })
      this.setState(prevState => ({score: prevState.score + 1}))
    } else if (
      image === rockImgUrl &&
      choicesList[randomNum].image === paperImgUrl
    ) {
      this.setState({
        userWonLossTxt: 'YOU LOSE',
        headerEmojiImgUrl: headerEmojiLossImgUrl,
        resultEmojiImgUrl: resultEmojiLossImgUrl,
        userSelectedImgUrl: image,
        randomGeneratedImgUrl: choicesList[randomNum].image,
      })
      this.setState(prevState => ({score: prevState.score - 1}))
    } else if (image === choicesList[randomNum].image) {
      this.setState({
        userWonLossTxt: 'IT IS DRAW',
        headerEmojiImgUrl: headerEmojiDrawImgUrl,
        resultEmojiImgUrl: resultEmojiDrawImgUrl,
        userSelectedImgUrl: image,
        randomGeneratedImgUrl: choicesList[randomNum].image,
      })
    }
  }

  renderGameResults = () => {
    const {
      userSelectedImgUrl,
      userWonLossTxt,
      randomGeneratedImgUrl,
      score,
      headerEmojiImgUrl,
      resultEmojiImgUrl,
    } = this.state

    return (
      <div className="resultsCon">
        <div className="headerSection">
          <div className="gameEl">
            <h1 className="txt">
              Rock
              <br />
              Paper
              <br />
              Scissor
              <br />
            </h1>
          </div>
          <div className="header-img-con">
            <img
              src={headerEmojiImgUrl}
              alt="large-emoji-img"
              className="header-img"
            />
          </div>
          <div className="scoreCon">
            <p className="scoreTxt">
              Score
              <br />
              {score}
            </p>
          </div>
        </div>
        <div className="resultsImgMainCon">
          <div className="userImgCon">
            <p className="user-heading">YOU</p>
            <img
              src={userSelectedImgUrl}
              alt="your choice"
              className="userImg"
            />
          </div>
          <div className="playAgainCon">
            <img
              src={resultEmojiImgUrl}
              alt="small-emoji-img"
              className="small-emoji-img"
            />
            <h1 className="resultFinalTxt">{userWonLossTxt}</h1>
            <div>
              <button
                className="playAgainBtn"
                type="button"
                onClick={this.onClickPlayAgainBtn}
              >
                PLAY AGAIN
              </button>
            </div>
          </div>
          <div className="randomImgCon">
            <p className="random-heading">OPPONENT</p>
            <img
              src={randomGeneratedImgUrl}
              alt="opponent choice"
              className="randomImg"
            />
          </div>
        </div>
      </div>
    )
  }

  renderInitialUi = () => (
    <>
      <div className="back-btn-rules-btn">
        <div className="rps-back-btn-con">
          <Link to="/" className="mm-backLinkBtn">
            <p className="rps-backButton">
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
                    <ul className="rps-list-items-con">
                      <li className="rps-rules-points">
                        The game result should be based on user and user
                        opponent choices
                      </li>
                      <li className="rps-rules-points">
                        When the user choice is rock and his opponent choice is
                        rock then the result will be{' '}
                        <span className="highlight-txt">IT IS DRAW</span>
                      </li>
                      <li className="rps-rules-points">
                        When the user choice is paper and his opponent choice is
                        rock then the result will be{' '}
                        <span className="highlight-txt">YOU WON</span>
                      </li>
                      <li className="rps-rules-points">
                        When the user choice is a scissor and his opponent
                        choice is rock then the result will be{' '}
                        <span className="highlight-txt">YOU LOSE</span>
                      </li>
                      <li className="rps-rules-points">
                        When the user choice is paper and his opponent choice is
                        paper then the result will be{' '}
                        <span className="highlight-txt">IT IS DRAW</span>
                      </li>
                      <li className="rps-rules-points">
                        When the user choice is scissors and his opponent choice
                        is paper then the result will be{' '}
                        <span className="highlight-txt">YOU WON</span>
                      </li>
                      <li className="rps-rules-points">
                        When the user choice is rock and his opponent choice is
                        scissors then the result will be{' '}
                        <span className="highlight-txt">YOU WON</span>
                      </li>
                      <li className="rps-rules-points">
                        When the user choice is paper and his opponent choice is
                        scissors then the result will be{' '}
                        <span className="highlight-txt">YOU LOSE</span>
                      </li>
                      <li className="rps-rules-points">
                        When the user choice is scissors and his opponent choice
                        is scissors then the result will be
                        <span className="highlight-txt">IT IS DRAW</span>
                      </li>
                      <li className="rps-rules-points">
                        When the result is{' '}
                        <span className="highlight-txt">YOU WON</span>, then the
                        count of the score should be incremented by 1
                      </li>
                      <li className="rps-rules-points">
                        When the result is{' '}
                        <span className="highlight-txt">IT IS DRAW</span>, then
                        the count of the score should be the same
                      </li>
                      <li className="rps-rules-points">
                        When the result is{' '}
                        <span className="highlight-txt">YOU LOSE</span>, then
                        the count of the score should be decremented by 1.
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </Popup>
          </div>
        </div>
      </div>
      <h1 className="rps-main-heading">
        ROCK&nbsp;&nbsp;PAPER&nbsp;&nbsp;SCISSOR
      </h1>
      <h1 className="letspick-txt">Let&apos;s Pick</h1>
      <ul className="choicesListCon">
        {choicesList.map(eachItem => (
          <RpsGameImageListItems
            imageDetails={eachItem}
            key={eachItem.id}
            onClickImageItem={this.getOnclickImageItemUrl}
          />
        ))}
      </ul>
    </>
  )

  render() {
    const {isGameStart} = this.state
    return (
      <>
        <div className="mainCon">
          {isGameStart ? this.renderGameResults() : this.renderInitialUi()}
        </div>
        <div className="btnCon">
          <Popup
            modal
            trigger={
              <button type="button" className="rps-rulesBtn">
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
                <div className="rps-image-con">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                    alt="rules"
                    className="rulesImg"
                  />
                </div>
              </div>
            )}
          </Popup>
        </div>
      </>
    )
  }
}

export default App
