import React from "react";
import '../styles/gallery.css'
const images = [
  "https://globalhabitat.in/wp-content/uploads/2024/08/home-rental-10.jpg   ",
  "https://globalhabitat.in/wp-content/uploads/2024/08/home-rental-11.jpg",
  "https://globalhabitat.in/wp-content/uploads/2024/08/home-rental-7.jpg",
  "https://globalhabitat.in/wp-content/uploads/2024/08/home-rental-9.jpg  ",
  "https://globalhabitat.in/wp-content/uploads/2024/08/home-rental-8.jpg    ",
  "https://globalhabitat.in/wp-content/uploads/2024/08/home-rental-26.jpg",
];

const Gallery = () => {
  const duplicatedImages = [...images, ...images]; // Duplicate for seamless scroll

  return (
    <div className="scroll-container">
      <div className="scroll-track">
        {duplicatedImages.map((src, idx) => (
          <div className="image-card" key={idx}>
            <img src={src} alt={`img-${idx}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
