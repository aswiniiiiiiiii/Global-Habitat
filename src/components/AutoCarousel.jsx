import React, { useEffect, useState } from 'react';
import '../styles/autocarousel.css';

const images = [
  'https://globalhabitat.in/wp-content/uploads/2024/08/STREET-VIEW.jpg',
  'https://globalhabitat.in/wp-content/uploads/2024/08/bella-casa-upcoming.jpg',
  'https://globalhabitat.in/wp-content/uploads/2024/08/villa-view-2.jpg'
];

const AutoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const goToPrev = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
  };

  return (
    <div className="carousel-container">
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="carousel-image"
      />

      <button className="arrow left-arrow" onClick={goToPrev}>
        &#10094;
      </button>
      <button className="arrow right-arrow" onClick={goToNext}>
        &#10095;
      </button>
    </div>
  );
};

export default AutoCarousel;
