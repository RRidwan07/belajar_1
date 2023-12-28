// Carousel.js
import React, { useState, useEffect } from 'react';
import './style.css';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Ganti interval sesuai kebutuhan, contoh: 2000ms (2 detik)

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex, images.length]);

  return (
    <div className="relative w-full mt-8">
      <div className='rounded-sm shadow-lg absolute top-[-20px] left-[-20px] h-20 w-20 bg-purple-800'></div>
      <div className='rounded-sm shadow-lg absolute bottom-[-20px] right-[-20px] h-20 w-20 bg-purple-800'></div>
      <div className='w-[105%] h-[108%] top-[-9px] left-[-8px] bg-white absolute rounded-md'></div>
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out transform"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <img key={index} src={image.images} alt={`slide-${index}`} className="w-full h-auto rounded-lg" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
