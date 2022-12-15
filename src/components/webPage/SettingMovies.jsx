import { useState, useEffect, Suspense } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { fetchFilmId } from 'ApiMovies';
import { Links } from 'components/All.styled';

const SettingMovies = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    fetchFilmId(movieId)
      .then(result => result.json())
      .then(film => setMovie(film))
      .catch(error => console.log(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const startPage = location.state?.home;
  const findFilm = location.state?.from;

  return (
    <div>
    <Links to={startPage ?? findFilm}>Go back</Links>
      <div>
        <img src={movie.poster_path && 'https://image.tmdb.org/t/p/w300' + movie.poster_path} alt={movie.title} width="250" />
        <h2>
          {movie.title} ({new Date(movie.release_date).getFullYear()}){' '}
        </h2>
        <p>Score: {movie.vote_avarage}</p>
        <p>Overview: {movie.overview}</p>
        <p>
          Genres:{' '}
          {movie.genres && movie.genres.map(({ name }) => name).join(', ')}{' '}
        </p>
      </div>
      <div>
        <h2> Information </h2>
        <li>
          <Links
            to={'roles'}
            state={{
              home: startPage,
              from: findFilm,
            }}
          >
            Cast
          </Links>
        </li>

        <li>
          <Links
            to={'reviews'}
            state={{
              home: startPage,
              from: findFilm,
            }}
          >
            Reviews
          </Links>
        </li>
      </div>
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SettingMovies;
