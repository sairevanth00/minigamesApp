import {Switch, Route} from 'react-router-dom'
import GameHomeScreens from './components/GameHomeScreens'
import EmojiesGameMainRoute from './components/EMOJI-GAME/EmojiesGameMainRoute'
import EmojiesRules from './components/EMOJI-GAME/EmojiesRules'
import MatrixGame from './components/MEMORY-MATRIX-GAME/MatrixGame'
import MatrixGameRules from './components/MEMORY-MATRIX-GAME/MatrixGameRules'
import RpsGame from './components/RPS-GAME/RpsGame'
import RpsGameRules from './components/RPS-GAME/RpsGameRules'
import CardFlipGame from './components/CARD-FLIP-GAME/CardFlipGame'
import CardFlipGameRules from './components/CARD-FLIP-GAME/CardFlipGameRules'
import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/" component={GameHomeScreens} />
    <Route exact path="/emojigame" component={EmojiesRules} />
    <Route
      exact
      path="/emojiesgamemainroute"
      component={EmojiesGameMainRoute}
    />
    <Route exact path="/cardflipgamerules" component={CardFlipGameRules} />
    <Route exact path="/rpsgame" component={RpsGame} />
    <Route exact path="/memorymatrixgamemainroute" component={MatrixGame} />
    <Route exact path="/matrixgame" component={MatrixGameRules} />
    <Route exact path="/rpsgamerules" component={RpsGameRules} />
    <Route exact path="/cardflipgame" component={CardFlipGame} />
  </Switch>
)

export default App
