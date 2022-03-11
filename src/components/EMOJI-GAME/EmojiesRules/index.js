import {Link} from 'react-router-dom'

import {FiArrowLeft} from 'react-icons/fi'

import './index.css'

const EmojiesRules = () => (
  <div className="emojiRulesMainCon">
    <div className="backBtnCon">
      <Link to="/" className="backLinkBtn">
        <p className="backButton">
          <FiArrowLeft className="leftArrow" />
          &nbsp;Back
        </p>
      </Link>
    </div>

    <div className="emojiRulesCardCon">
      <div className="emojiImgCon">
        <img
          src="https://res.cloudinary.com/saivarma/image/upload/v1635749770/rulesEmojiImg_wekdbb.png"
          alt="emoji"
          className="rulesEmojiImg"
        />
      </div>
      <div className="rulesTxtCon">
        <h1 className="emojiRulesMainHeading">Rules</h1>
        <ul className="ruleslistMainCon">
          <li className="rulesItemCon">
            <p className="rulesTxt">
              User should be able to see the list of Emojis
            </p>
          </li>
          <li className="rulesItemCon">
            <p className="rulesTxt">
              When the user clicks any one of the Emoji for the first time, then
              the count of the score should be incremented by 1 and the List of
              emoji cards should be shuffled.
            </p>
          </li>
          <li className="rulesItemCon">
            <p className="rulesTxt">
              This process should be repeated every time the user clicks on an
              emoji card
            </p>
          </li>
          <li className="rulesItemCon">
            <p className="rulesTxt">
              When the user clicks on all Emoji cards without clicking any of it
              twice, then the user will win the game
            </p>
          </li>
          <li className="rulesItemCon">
            <p className="rulesTxt">
              When the user clicks on the same Emoji for the second time, then
              the user will lose the game.
            </p>
          </li>
          <li className="rulesItemCon">
            <p className="rulesTxt">
              Once the game is over, the user will be redirected to the results
              page.
            </p>
          </li>
        </ul>
        <Link to="/emojiesgamemainroute" className="startPlayingLinkCon">
          <button type="button" className="btn">
            Start Playing
          </button>
        </Link>
      </div>
    </div>
  </div>
)
export default EmojiesRules
