import './index.css'

const GameHomeScreens = (
  <div className="gameHomeScreensMainCon">
    <h1 className="mainHeading">Games</h1>
    <div className="gameCardsCon">
      <img
        src="https://res.cloudinary.com/saivarma/image/upload/v1635138635/Asset_1_4x_1_zdibno.jpg"
        alt="emojiImage"
        className="emojiImg"
      />
      <h1 className="cardOneHeading">Emoji Game</h1>
    </div>
    <div className="gameCardsCon">
      <h1 className="cardTwoHeading">Memory Matrix</h1>
      <img
        src="https://res.cloudinary.com/saivarma/image/upload/v1635138635/memory_w5zjgc.jpg"
        alt="memoryMatrixImage"
        className="memoryMatrixImg"
      />
    </div>
    <div className="gameCardsCon">
      <h1 className="cardThreeHeading">ROCK PAPER SCISSOR</h1>
      <img
        src="https://res.cloudinary.com/saivarma/image/upload/v1635141131/Group-7469_vuoosl.jpg"
        alt="rockPaperScissorImage"
        className="rockPaperScissorImg"
      />
    </div>
    <div className="gameCardsCon">
      <img
        src="https://res.cloudinary.com/saivarma/image/upload/v1635141114/animals_t0l4bn.jpg"
        alt="animalsCardFlipGameImage"
        className="animalsCardFlipGameImg"
      />
    </div>
  </div>
)
export default GameHomeScreens
