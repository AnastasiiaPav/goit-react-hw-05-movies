import propTypes from 'prop-types'

export const RolesItem = ({ path, name, character }) => {
    return(
        <div>
            <img
            src={path}
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