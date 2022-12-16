import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { fetchViewsFilm } from 'ApiMovies';
import { Popularfilm } from 'components/PopularFilm';
import { Links } from 'components/All.styled';
import { SearchBar } from 'components/SearchBar';

const Movies = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!query) {
      return;
    }
    fetchViewsFilm(query)
      .then(result => result.json())
      .then(data => setMovies(data.results))
      .catch(error => console.log(error));
  }, [query]);

  return (
    <div>
      <SearchBar />
      {Boolean(movies?.length) && movies.map(({ id, title, poster_path }) => (
        <Links to={`/movies/${id}`} key={id} state={{ from: location }}>
          <Popularfilm title={title} imgSrc={poster_path} id={id} />
        </Links>
      ))}
    </div>
  );
};
export default Movies;
