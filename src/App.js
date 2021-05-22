import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AllNation from './components/AllNation/AllNation';
import Detail from './components/Detail/Detail';




function App() {
  return (
    <Router>
      <header>
        <h1>Ultra Nation</h1>
        <nav>
          <a href="/nations">All Nation</a>
        </nav>
      </header>

      <Switch>
        <Route path="/nations">
          <AllNation></AllNation>
        </Route>
        <Route path="/nation/detail/:name">
          <Detail></Detail>
        </Route>
        <Route exact path="/">
          <AllNation></AllNation>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
