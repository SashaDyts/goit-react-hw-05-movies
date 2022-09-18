import React, { useState, useEffect } from 'react';

import { FilmList } from 'components/FilmList/FilmList';

import { getFilms } from 'services/api';

export default function Home() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const fetchFilms = async () => {
      const data = await getFilms();

      setFilms(data.results);
    };

    fetchFilms();
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <FilmList movies={films} />
    </>
  );
}
