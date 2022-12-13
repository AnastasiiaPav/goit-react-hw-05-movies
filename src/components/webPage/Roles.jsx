import { fetchInformFilm } from 'ApiMovies'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { RolesItem } from 'components/RolesItem';

 export const Roles = () => {
    const [roles , setRoles] = useState([])
    const {movieId} = useParams()

    useEffect(() => {
        fetchInformFilm(movieId)
        .then(result => result.json())
        .then(movie => setRoles(movie.cast))
        .catch(error => console.log(error))
// eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return(
        <div>
            {roles.map(({id, profile_path, name, character }) =>{
                return(
                    <RolesItem
                    key={id}
                    path={profile_path}
                    name={name}
                    character={character}
                  />
                )
            } )}
        </div>
    )
}
