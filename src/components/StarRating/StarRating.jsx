import { useState } from 'react';
import './StarRating.css';

function StarRating({ rating, onRatingChange }) {
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleClick = (value) => {
    onRatingChange(value);
  };

  const handleMouseEnter = (value) => {
    setHoveredRating(value);
  };

  const handleMouseLeave = () => {
    setHoveredRating(0);
  };

  const displayRating = hoveredRating || rating;

  return (
    <div className="rating-container">
      <div className="star-rating" onMouseLeave={handleMouseLeave}>
        {[1, 2, 3, 4, 5].map((value) => (
          <span
            key={value}
            className={`star ${value <= displayRating ? 'active' : ''}`}
            onClick={() => handleClick(value)}
            onMouseEnter={() => handleMouseEnter(value)}
          >
            ★
          </span>
        ))}
      </div>
      <span className="rating-text">
        {rating > 0 ? `${rating}/5` : 'Select a rating'}
      </span>
    </div>
  );
}

export default StarRating;
