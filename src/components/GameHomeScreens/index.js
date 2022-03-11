import {Link} from 'react-router-dom'
import './index.css'

const GameHomeScreens = () => (
  <div className="gameHomeScreensMainCon">
    <h1 className="mainHeading">Games</h1>
    <div className="container">
      <div className="row">
        <div className="cardsMainCon col-lg-12">
          {/* <div className="col-lg-12"> */}
          <Link to="/emojigame" className="linkCon">
            <div className="emojiMainCon">
              <img
                src="https://res.cloudinary.com/saivarma/image/upload/v1635138635/Asset_1_4x_1_zdibno.jpg"
                alt="emojiImage"
                className="emojiImg"
              />
              <h1 className="cardOneHeading">Emoji Game</h1>
            </div>
          </Link>
          <Link to="/matrixgame" className="linkCon">
            <div className="memoryMatrixCardsCon">
              <h1 className="cardTwoHeading">Memory Matrix</h1>
              <img
                src="https://res.cloudinary.com/saivarma/image/upload/v1635138635/memory_w5zjgc.jpg"
                alt="memoryMatrixImage"
                className="memoryMatrixImg"
              />
            </div>
          </Link>
          {/* </div> */}
          <Link to="/rpsgamerules" className="linkCon col-lg-3">
            <div className="rpsCardsCon">
              <h1 className="cardThreeHeading">ROCK PAPER SCISSOR</h1>
              <img
                src="https://res.cloudinary.com/saivarma/image/upload/v1635138635/Group_7469_ukkg1b.png"
                alt="rockPaperScissorImage"
                className="rockPaperScissorImg"
              />
            </div>
          </Link>
          <Link to="/cardflipgamerules" className="linkCon col-lg-3">
            <div className="cardFlipCardsCon">
              <img
                src="https://res.cloudinary.com/saivarma/image/upload/v1635141114/animals_t0l4bn.jpg"
                alt="animalsCardFlipGameImage"
                className="animalsCardFlipGameImg"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  </div>
)
export default GameHomeScreens
