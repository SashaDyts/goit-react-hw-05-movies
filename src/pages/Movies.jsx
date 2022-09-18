import React, { useState, useEffect } from 'react';

import { SearchBar } from 'components/SearchBar/SearchBar';
import { FilmList } from 'components/FilmList/FilmList';

import { searchFilm } from 'services/api';
import { useSearchParams } from 'react-router-dom';

export default function Movies() {
  const [films, setFilms] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParam = searchParams.get('query') ?? '';

  useEffect(() => {
    if (queryParam === '') {
      return;
    }

    const fetchSearchfilms = async () => {
      const data = await searchFilm(queryParam);

      setFilms(data.results);
    };

    fetchSearchfilms();
  }, [queryParam]);

  const changeQuery = value => {
    setSearchParams(value !== '' ? { query: value } : {});
  };

  return (
    <>
      <SearchBar onSubmit={changeQuery} />
      {queryParam && <FilmList movies={films} query={queryParam} />}
    </>
  );
}
