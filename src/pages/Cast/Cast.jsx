import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'services/api';

import { ActorCard } from './CastStyled';

export function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const getCast = async () => {
      const data = await getMovieCast(movieId);

      setCast(data.data.cast);
    };
    getCast();
  }, [movieId]);

  return (
    <ul>
      {cast &&
        cast.map(actor => {
          return (
            <li key={actor.credit_id}>
              <ActorCard>
                <img
                  src={`https://image.tmdb.org/t/p/w342${actor.profile_path}`}
                  alt=""
                  width="200"
                />
                {actor.name}
                <p>Character: {actor.character}</p>
              </ActorCard>
            </li>
          );
        })}
    </ul>
  );
}
