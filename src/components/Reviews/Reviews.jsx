import { fetchMovieReviews } from 'components/API/API';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import css from './Reviews.module.css';
const Reviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);


    const getReviews = async () => {
      const reviews = await fetchMovieReviews(movieId);
            setReviews(reviews);
  };

  useEffect(() => {
    getReviews();
  });

  if (reviews) {
    return (
      <div>
        {reviews.length > 0 ? (
          <ul className={css.ReviewsList}>
          {reviews.map(review => (
            <li key={review.id}>
              <h4 className={css.Author}>Author: {review.author}</h4>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
        ) : (
          <p className={css.Note}>We don't have any reviews for this movie.</p>      
        )}
      </div>
    );
  }
};

export default Reviews;