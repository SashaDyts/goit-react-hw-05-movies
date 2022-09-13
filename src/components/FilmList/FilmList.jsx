import React from 'react';
import { Link } from 'react-router-dom';

export function FilmList({ movies }) {
  return (
    <ul>
      {movies.map(movie => {
        return (
          <li key={movie.id}>
            <Link
              // to={`${pathname === '/movies' ? '/movies' : '/movies'}/${
              //   movie.id
              // }`}
              to={`/movies/${movie.id}`}
            >
              {movie.title ?? movie.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
