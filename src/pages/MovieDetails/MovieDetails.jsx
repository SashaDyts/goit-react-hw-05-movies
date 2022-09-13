import React, { useEffect, useState } from 'react';
import { Link, useParams, Outlet } from 'react-router-dom';

import { Container, FilmInfo } from './MovieDetails.styled';

import { getFilmDetails } from 'services/api';

export function MovieDetails() {
  const { movieId } = useParams();
  const [film, setFilm] = useState(null);

  useEffect(() => {
    if (!movieId) {
      return;
    }

    const getFilm = async () => {
      const data = await getFilmDetails(movieId);

      setFilm(data);
    };

    getFilm();
  }, [movieId]);

  return (
    <>
      {film && (
        <Container>
          <FilmInfo>
            <img
              src={`https://image.tmdb.org/t/p/w342${film.poster_path}`}
              alt=""
              width="200"
            />
            <div>
              <h1>
                {film.title ?? film.name} ({film.release_date})
              </h1>
              <p>User Score: {(film.vote_average * 10).toFixed()} %</p>
              <h2>Overview</h2>
              <p>{film.overview}</p>
              <h2>Genres</h2>
              <p>{film.genres.map(({ name }) => name).join(' ')}</p>
            </div>
          </FilmInfo>
          <ul>
            <Link to="cast">
              <li>Cast</li>
            </Link>
            <Link to="reviews">
              <li>Reviews</li>
            </Link>
          </ul>
        </Container>
      )}
      <Outlet />
    </>
  );
}
