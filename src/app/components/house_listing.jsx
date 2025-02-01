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
  const [selectedListing, setSelectedListing] = useState(null);

  const listings = [
    { name: "Studio", image: h1, link: "https://dmcreal-estate.com/am/studio-2/", description: "Area = 55.5 sqm" },
    { name: "One Bedroom", image: bd1, link: "https://dmcreal-estate.com/am/one-bedroom/", description: "Area = 76.2 sqm" },
    { name: "Two Bedroom", image: bd3, link: "https://dmcreal-estate.com/am/two-bedroom-c1/", description: "Area = 144.6 sqm" },
    { name: "Three Bedroom", image: bd2, link: "https://dmcreal-estate.com/am/three-bedroom/", description: "Area = 200 sqm" },
    { name: "Four Bedroom", image: h3, comingSoon: true, description: "Details Coming Soon!" },
    { name: "Shop", image: h4, comingSoon: true, description: "Details Coming Soon!" },
  ];

  return (
    <div>
      {/* Banner */}
      <div className="bg-gradient-to-r from-[#003359] to-[#00bdff] text-white text-center py-3 w-full max-w-screen-sm mx-auto ">
        <h1 className="text-2xl font-bold">HillSide Apartments</h1>
      </div>

      {/* Listings */}
      <div className="w-full max-w-screen-sm mx-auto rounded-lg shadow-lg p-4 grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white">
        {listings.map((listing, index) => (
          <div
            key={index}
            className={`relative cursor-pointer group transform transition-transform duration-300 hover:scale-105 rounded-md overflow-hidden ${
              selectedListing === index ? "border-4 border-[#00bdff]" : ""
            }`}
            onClick={() =>
              setSelectedListing(selectedListing === index ? null : index)
            }
          >
            {/* Background Image */}
            <Image
              src={listing.image}
              alt={listing.name}
              className={`w-full h-48 object-cover transition-transform duration-300 ${
                selectedListing === index ? "blur-sm" : ""
              }`}
            />

            {/* Overlay Text */}
            {selectedListing === index && (
              <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-center p-4">
                <p className="text-white font-bold text-lg">{listing.description}</p>
                {!listing.comingSoon && (
                  <a
                    href={listing.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white underline mt-2"
                  >
                    Read More...
                  </a>
                )}
              </div>
            )}

            {/* Listing Name */}
            <div className="absolute bottom-2 left-2 bg-gray-900 bg-opacity-75 px-2 py-1 rounded-md">
              <p className="text-white font-bold">{listing.name}</p>
            </div>
          </div>
        ))}
      </div>
      
      <p className="text-center text-[#003359] text-2xl font-semibold mb-4 bg-white">
        በ 400,000ሺ ብር ብቻ ፈጥነው የቤት ባለቤት ይሁኑ! <br />
      </p>

    </div>
  );
}
