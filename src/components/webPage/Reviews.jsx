 import { fetchActorFilm } from 'ApiMovies'
 import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewItem } from 'components/ReviewItem';

export const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const {movieId} = useParams

    useEffect(() => {
        fetchActorFilm(movieId)
        .then(result => result.json())
        .then(data => setReviews(data.results))
// eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return(
        <div>
        <ul>
          {reviews.length !== 0 ? (
            reviews.map(({ id, author, content, avatar_path }) => {
              return (
                <ReviewItem
                  key={id}
                  path={avatar_path}
                  author={author}
                  content={content}
                />
              );
            })
          ) : (
            <p>No one has reviewed this  movie yet </p>
          )}
        </ul>
      </div>
    )
}