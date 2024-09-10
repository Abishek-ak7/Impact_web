"use client"

import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from '../components/images/homeimg1.png'; // Ensure these paths are correct
import img2 from '../components/images/homeimg2.png';
import img3 from '../components/images/homeimg3.png';

const EnlargeCenterCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const sliderRef = useRef<Slider>(null);

  const settings = {
    centerMode: true,
    centerPadding: '-8',
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1, // This ensures smooth scrolling, moving by 1 slide at a time
    speed: 500,
    focusOnSelect: true,
    autoplay: true,          // Enable automatic sliding
    autoplaySpeed: 3000,     // Set the speed of automatic sliding (in milliseconds)
    afterChange: (current: number) => setActiveIndex(current),
    arrows: false,           // Remove the left and right buttons
  };

  const images = [
    img1.src,
    img2.src,
    img3.src
  ];

  // Determine the center index for 3 visible slides
  const centerIndex = Math.floor(settings.slidesToShow / 2);

  return (
    <div className="mx-auto">
      <Slider ref={sliderRef} {...settings}>
        {images.map((src, index) => (
          <div key={index} className={`w-full transition-transform duration-500 rounded-lg ${index === (activeIndex + centerIndex) % images.length ? 'scale-110' : ''}`}>
            <img
              src={src}
              width={300}
              height={300}
              alt={`Image ${index + 1}`}
              className="w-full"
              
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default EnlargeCenterCarousel;