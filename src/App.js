import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import './App.css';
import Header from "./containers/Header";
import Episodes from "./containers/Episodes";
import Characters from "./containers/Characters";
import Locations from "./containers/Locations";
import WatchList from "./containers/WatchList";


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="wrapper">
          <Switch  >
            <Route path="/" exact component={Characters} ></Route>
            <Route path="/episodes" exact component={Episodes}></Route>
            <Route path="/locations" exact component={Locations}></Route>
            <Route path="/watchlist" exact component={WatchList}></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
