import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export const SearchBar = () => {
  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState('');

  const onSubmit = event => {
    event.preventDefault();

    if (!search) {
      alert('Введите какой фильм вы хотите посмотреть');
    }
    setSearchParams(search !== '' ? { query: search } : {});
    setSearch('');
  };

  const onChange = event => {
    setSearch(event.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" onChange={onChange} value={search} />
      <button type="submit">Search</button>
    </form>
  );
};
