import React from 'react';
import Navbar from '../Navbar/Navbar';
import './App.scss';
import { HashRouter as Router, Route, Switch } from "react-router-dom"
import Dashboard from '../Dashboard/Dashboard';
import About from '../About/About';
import OurGames from '../OurGames/OurGames';
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
           <Dashboard />
          </Route>
          <Route exact path="/news">

          </Route>
          <Route exact path="/about-us">
            <About />
          </Route>
          <Route exact path="/our-games">
            <OurGames />
          </Route>
          <Route exact path="/locations">
            
          </Route>
          <Route exact path="/contact">
            <OurGames />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
