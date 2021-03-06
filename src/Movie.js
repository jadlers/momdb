import React from 'react';
import { shape, string } from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Overdrive from 'react-overdrive';

const POSTER_BASE_PATH = 'http://image.tmdb.org/t/p/w154';

const Movie = ({ movie }) => (
  <Link to={`/${movie.id}`}>
    <Overdrive id={`${movie.id}`}>
      <Poster
        src={`${POSTER_BASE_PATH}${movie.poster_path}`}
        alt={movie.title}
      />
    </Overdrive>
  </Link>
);

Movie.propTypes = {
  movie: shape({
    title: string.isRequired,
    poster_path: string.isRequired,
  }).isRequired,
};

export default Movie;

export const Poster = styled.img`
  box-shadow: 0 0 35px black;
`;
