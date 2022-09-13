import React, { useState, useEffect } from 'react';

import { SearchBar } from 'components/SearchBar/SearchBar';
import { FilmList } from 'components/FilmList/FilmList';

import { searchFilm } from 'services/api';

export function Movies() {
  const [films, setFilms] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (query === '') {
      return;
    }

    const fetchSearchfilms = async () => {
      const data = await searchFilm(query);

      setFilms(data.results);
    };

    fetchSearchfilms();
  }, [query]);

  return (
    <>
      <SearchBar onSubmit={setQuery} />
      {query && <FilmList movies={films} />}
    </>
  );
}
