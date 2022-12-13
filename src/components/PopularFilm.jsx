
import propTypes from 'prop-types'


export const Popularfilm = ({title, imgSrc}) => {
    return(
        <div>
            <img
            src={imgSrc}
            alt={title}
            width="150px"
            height="auto"
            />
        </div>
    )
}

Popularfilm.propTypes = {
    title: propTypes.string,
    imgSrc: propTypes.string,
}