/* eslint react/no-did-mount-set-state: 0 */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import MovieList from './MovieList';

const Test = () => <h1>TEST</h1>;

const App = () => (
  <Router>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Switch>
        <Route exact path="/" component={MovieList} />
        <Route path="/test" component={Test} />
      </Switch>
    </div>
  </Router>
);

export default App;
