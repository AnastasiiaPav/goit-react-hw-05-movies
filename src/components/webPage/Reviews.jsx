import { fetchActorFilm } from 'ApiMovies';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewItem } from 'components/ReviewItem';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const {movieId}  = useParams();

  useEffect(() => {
    fetchActorFilm(movieId)
      .then(result => result.json())
      .then(data => setReviews( data.results));
     
  }, [movieId]);

  return (
      <div>
      <ul>
        {reviews.map(({ id, author, content, avatar_path }) => {
            return (
              <ReviewItem
                key={id}
                path={avatar_path}
                author={author}
                content={content}
              />
            );
          })
          }
      </ul>
    </div>
  );
};
export default Reviews;
