"use client";

import Image from "next/image";
import { useState, useEffect } from 'react';
import h1 from '../../../public/images/h1.jpg';
import h2 from '../../../public/images/h2.jpg';
import h3 from '../../../public/images/h3.jpg';
import h4 from '../../../public/images/h4.jpg';
import h5 from '../../../public/images/h5.jpg';
import h6 from '../../../public/images/h6.jpg';
import h7 from '../../../public/images/h7.jpg';

export default function ImageSlider() {
  const images =[h1, h2, h3, h4, h5, h6, h7];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-52 overflow-hidden rounded-lg">
      {images.map((image, index) => (
        <Image
          key={index}
          src={image}
          alt={`Slide ${index}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}
