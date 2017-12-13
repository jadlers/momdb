/* eslint react/no-did-mount-set-state: 0 */
import React, { Component } from 'react';
import Movie from './Movie';

class MovieList extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    try {
      const res = await fetch('https://api.themoviedb.org/3/discover/movie?' +
          'api_key=cc360d9a8f57624dc24b45671b52decf' +
          '&language=en-US' +
          '&sort_by=popularity.desc' +
          '&include_adult=false' +
          '&include_video=false' +
          '&page=1');
      const movies = await res.json();
      this.setState({
        movies: movies.results,
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div>
        {this.state.movies.map(movie => (
          <Movie key={movie.id} movie={movie} desc={movie.desc} />
        ))}
      </div>
    );
  }
}

export default MovieList;