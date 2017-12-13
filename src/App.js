/* eslint react/no-did-mount-set-state: 0 */
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import logo from './logo.svg';
import './App.css';
import MovieList from './MovieList';

const Test = ({ match }) => <h1>{match.params.id}</h1>;

Test.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

const App = () => (
  <Router>
    <div className="App">
      <header className="App-header">
        <Link to="/">
          <img src={logo} className="App-logo" alt="logo" />
        </Link>
      </header>
      <Switch>
        <Route exact path="/" component={MovieList} />
        <Route path="/:id" component={Test} />
      </Switch>
    </div>
  </Router>
);

export default App;
