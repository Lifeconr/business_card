'use client';

import Image from 'next/image';
import dmc_logo from '../../../public/images/dmc_logo.jpg';

export default function Footer() {
  return (
    <footer className="w-full max-w-screen-sm p-12 bg-[#003359] text-white rounded-lg shadow-lg mx-auto flex justify-between items-center">
      {/* Left Section: Logo and Name */}
      <div className="flex items-center gap-4">
        <Image
          src={dmc_logo}
          alt="Company Logo"
          className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-white"
        />
        <h2 className="text-lg sm:text-xl font-bold">DMC Real Estate</h2>
      </div>

      {/* Right Section: Buttons */}
      <div className="flex flex-col gap-4">
        <button
          className="p-2 bg-[#00BDFF] text-white rounded-full text-sm sm:text-base"
          onClick={() => alert('Share functionality here!')}
        >
          Share
        </button>
        <button
          className="p-2 bg-[#00BDFF] text-white rounded-full text-sm sm:text-base"
          onClick={() => alert('Add to contact functionality here!')}
        >
          Add to Contact
        </button>
      </div>
    </footer>
  );
}
