/* eslint react/no-did-mount-set-state: 0 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

const POSTER_BASE_PATH = 'http://image.tmdb.org/t/p/w154';
const BACKDROP_BASE_PATH = 'http://image.tmdb.org/t/p/w1280';

class MovieDetail extends Component {
  state = {
    movie: {},
  };

  async componentDidMount() {
    try {
      const res = await fetch(`https://api.themoviedb.org/3/movie/${
        this.props.match.params.id
      }?api_key=cc360d9a8f57624dc24b45671b52decf&language=en-US`);
      const movie = await res.json();
      this.setState({
        movie,
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const { movie } = this.state;
    return (
      <div>
        <img
          src={`${BACKDROP_BASE_PATH}${movie.backdrop_path}`}
          alt={movie.title}
        />
        <img
          src={`${POSTER_BASE_PATH}${movie.poster_path}`}
          alt={movie.title}
        />
        <h1>{movie.title}</h1>
        <h3>{movie.release_date}</h3>
        <p>{movie.overview}</p>
      </div>
    );
  }
}

export default MovieDetail;

MovieDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};