"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import h1 from "../../../public/images/h1.jpg";
import h2 from "../../../public/images/h2.jpg";
import h3 from "../../../public/images/h3.jpg";
import h4 from "../../../public/images/h4.jpg";
import h5 from "../../../public/images/h5.jpg";
import h6 from "../../../public/images/h6.jpg";
import h7 from "../../../public/images/h7.jpg";

const slides = [
  { image: h7, title: "Only 10% Prepaid Required." },
  { image: h1, title: "46 Villas Delivered" },
  { image: h2, title: "26+ Years of Experience" },
  { image: h3, title: "G+26 Furnished Apartment Building" },
  { image: h4, title: "1-4 Bedroom Apartments" },
  { image: h5, title: "Luxury Penthouse" },
  { image: h6, title: "Hillside Apartment" },

];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
        setIsTransitioning(false);
      }, 700); // Slide animation duration
    }, 4000); // Slide duration

    return () => clearInterval(interval);
  }, []);

  // Function to highlight specific words in title
  const highlightText = (text) => {
    return text.replace(
      /(46|26\+|G\+26|1-4)/g,
      '<span style="color:white; ">$1</span>'
    );
  };

  return (
    <div className="relative w-full h-40 overflow-hidden rounded-lg">
      <div
        className="absolute w-full h-full flex transition-transform duration-700"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0 relative">
            <Image
              src={slide.image}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-1 left-0 right-0 bg-[#003359] bg-opacity-40 p-2 text-center text-white">
              <h2
                className={`text-l sm:text-l md:text-2xl lg:text-2xl font-bold transition-opacity duration-700 ${
                  isTransitioning ? "opacity-0" : "opacity-100 delay-300"
                }`}
                dangerouslySetInnerHTML={{ __html: highlightText(slide.title) }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
