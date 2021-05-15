import { BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import HomePage from './HomePage'

import './App.css';
import Timer from './Timer'

function App() {

  return (
    <Router>
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/timer">
        <Timer />
      </Route>
    </Switch>
  </Router>
  );
}

export default App;
