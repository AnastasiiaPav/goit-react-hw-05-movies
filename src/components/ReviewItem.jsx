import propTypes from 'prop-types'


export const ReviewItem = ({ path, author, content}) => {
    return(
        <li>
            <img
            src={path}
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