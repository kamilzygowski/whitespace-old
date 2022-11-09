import React from 'react';
import Navbar from '../Navbar/Navbar';
import './App.scss';
import { HashRouter as Router, Route, Switch } from "react-router-dom"
import Dashboard from '../Dashboard/Dashboard';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
           <Dashboard />
          </Route>
          <Route exact path="/news">
         
          </Route>
          <Route exact path="/downloads">
            
          </Route>
          <Route exact path="/wiki">

          </Route>
          <Route exact path="/highscores">

          </Route>
          <Route exact path="/login">

          </Route>
          <Route exact path="/register">

          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
