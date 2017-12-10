import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  toggle = () => this.setState({ showParagraph: !this.state.showParagraph });

  render() {
    const welcome = "Welcome to React";
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Welcome text={welcome} />
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.toggle}>Show / Hide</button>
      </div>
    );
  }
}

class Welcome extends Component {
  render() {
    const { text } = this.props;
    return <h1 className="App-title">{text}</h1>;
  }
}

export default App;
