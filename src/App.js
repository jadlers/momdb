import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Movie from "./Movie";

const movies = [
  {
    id: 1,
    title: "Star Wars",
    desc: "Coolest space movie ever"
  },
  {
    id: 2,
    title: "Spider Man"
  },
  {
    id: 3,
    title: "Lord of the Rings Trilogy"
  }
];

class App extends Component {
  state = {
    movies: []
  };

  async componentDidMount() {
    try {
      const res = await fetch(
        "https://api.themoviedb.org/3/discover/movie?api_key=cc360d9a8f57624dc24b45671b52decf&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"
      );
      const movies = await res.json();
      this.setState({
        movies: movies.results
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        {movies.map(movie => (
          <Movie key={movie.id} movie={movie} desc={movie.desc} />
        ))}
      </div>
    );
  }
}

export default App;
