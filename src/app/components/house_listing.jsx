'use client';

import Image from "next/image";
import { useState } from "react";
import h1 from "../../../public/images/h1.jpg";
import bd1 from "../../../public/images/bd1.jpg";
import h3 from "../../../public/images/h3.jpg";
import h4 from "../../../public/images/h4.jpg";
import bd3 from "../../../public/images/bd3.jpg";
import bd2 from "../../../public/images/bd2.jpg";

export default function HouseListings() {
  const [comingSoonClicked, setComingSoonClicked] = useState({});

  const listings = [
    { name: "Studio", image: h1, link: "https://dmcreal-estate.com/am/studio-2/" },
    { name: "One Bedroom", image: bd1, link: "https://dmcreal-estate.com/am/one-bedroom/" },
    { name: "Two Bedroom", image: bd3, link: "https://dmcreal-estate.com/am/two-bedroom-c1/" },
    { name: "Three Bedroom", image: bd2, link: "https://dmcreal-estate.com/am/three-bedroom/" },
    { name: "Four Bedroom", image: h3, comingSoon: true },
    { name: "Shop", image: h4, comingSoon: true },
  ];

  const handleComingSoonClick = (index) => {
    setComingSoonClicked((prevState) => ({
      ...prevState,
      [index]: true,
    }));
  };

  return (
    <div className="w-full max-w-screen-sm mx-auto rounded-lg shadow-lg p-4 grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white">
      {listings.map((listing, index) => (
        <div
          key={index}
          className="relative cursor-pointer transform transition-transform duration-300 hover:scale-105"
          onClick={() =>
            listing.comingSoon
              ? handleComingSoonClick(index)
              : window.open(listing.link, "_blank")
          }
        >
          <Image
            src={listing.image}
            alt={listing.name}
            className="w-full h-48 object-cover rounded-md transition-transform duration-300 hover:brightness-90"
          />
          {listing.comingSoon && comingSoonClicked[index] && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center rounded-md">
              <p className="text-white font-bold">Coming Soon</p>
            </div>
          )}
          <div className="absolute bottom-2 left-2 bg-gray-900 bg-opacity-75 px-2 py-1 rounded-md">
            <p className="text-white font-bold">{listing.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
