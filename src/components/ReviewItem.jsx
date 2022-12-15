import propTypes from 'prop-types'
import img from './picture/img.jpg'

export const ReviewItem = ({ path, author, content}) => {
    return(
        <li>
            <img
            src={path ? 'https://image.tmdb.org/t/p/w200' + path : img}
            alt={author}
            width="50"
            height="auto"
            />
            <p>{author}</p>
            <p>{content}</p>
        </li>
    )
}

ReviewItem.propTypes = {
    path: propTypes.string,
    author: propTypes.string,
    content: propTypes.string,
  };