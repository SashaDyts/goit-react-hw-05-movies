import React, { useState } from 'react';
import PropTypes from 'prop-types';

export function SearchBar({ onSubmit }) {
  const [query, setQuery] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    onSubmit(query);
    setQuery('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        autoComplete="false"
        onChange={e => {
          setQuery(e.target.value);
        }}
      />
      <button type="submit">Search</button>
    </form>
  );
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
