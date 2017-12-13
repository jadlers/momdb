/* eslint react/no-did-mount-set-state: 0 */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import MovieList from './MovieList';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          <Switch>
            <Route path="/test" component={Test} />
            <Route component={MovieList} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

const Test = () => <h1>TEST</h1>;
