import { fetchPopularFilm }  from "ApiMovies";
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Popularfilm } from "components/PopularFilm";
import { Links } from "components/All.styled";

export const Start = () => {
    const location = useLocation()
    const [ movies, setMovies]  = useState([])

    useEffect(() => {
        fetchPopularFilm()
        .then(result => result.json())
        .then(data => setMovies(data.results))
        .catch(error => console.log(error))
    }, [])

    return(
        <div>
            <p>The best movies of the week</p>
            {movies.map(({id, title, poster_path})=>(
            <Links to={`/movies/${id}`} key={id} state={{ home: location }}>
            <Popularfilm title={title} imgSrc={poster_path} id={id} />
          </Links>
            ) )}
        </div>
    )
}