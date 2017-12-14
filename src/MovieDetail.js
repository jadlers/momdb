/* eslint react/no-did-mount-set-state: 0 */
import React, { Component } from 'react';

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
        <h1>{movie.title}</h1>
        <h3>{movie.release_date}</h3>
        <p>{movie.overview}</p>
      </div>
    );
  }
}

export default MovieDetail;
