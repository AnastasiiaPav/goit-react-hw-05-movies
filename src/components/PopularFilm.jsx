
import propTypes from 'prop-types'
import { Box } from './All.styled'

export const Popularfilm = ({title, imgSrc}) => {
    return(
        <Box>
            <img
            src={imgSrc && 'https://image.tmdb.org/t/p/w300' + imgSrc}
            alt={title}
            width="250px"
            height="auto"
            />
        </Box>
    )
}

Popularfilm.propTypes = {
    title: propTypes.string,
    imgSrc: propTypes.string,
}