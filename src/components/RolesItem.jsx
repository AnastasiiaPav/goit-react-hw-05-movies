import propTypes from 'prop-types'
import img from './picture/img.jpg'

export const RolesItem = ({ path, name, character }) => {
    return(
        <div>
            <img
            src={path ? 'https://image.tmdb.org/t/p/w200' + path : img}
            alt={name}
            width="150"
            height="auto"
            />
            <p>{name}</p>
            <p>Character: {character}</p>
        </div>
    )
}

RolesItem.propTypes = {
    path: propTypes.string,
    name: propTypes.string,
    character: propTypes.string,
}