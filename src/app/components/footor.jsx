'use client';

import Image from 'next/image';
import dmc_logo from '../../../public/images/dmc_logo.jpg';
import { FaFacebook, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
  const links = {
    linkedin: 'https://www.linkedin.com/company/dmc-realestate/',
    facebook: 'https://web.facebook.com/p/DMC-Real-Estate-100088437130483/?_rdc=1&_rdr',
    location: 'https://www.google.com/maps/place/DMC+Real+Estate+%7C+Bole+Main+Branch+%7C%E1%8B%B2%E1%8A%A4%E1%88%9D%E1%88%B2+%E1%88%AA%E1%88%8D+%E1%8A%A2%E1%88%B5%E1%89%B4%E1%89%B5+%7C+%E1%89%A6%E1%88%8C+%E1%8B%8B%E1%8A%93+%E1%89%A2%E1%88%AE/@8.9923851,38.7914111,21z/data=!4m14!1m7!3m6!1s0x164b858a1951e55b:0x2804c33759c40d65!2zRE1DIFJlYWwgRXN0YXRlIHwgQm9sZSBNYWluIEJyYW5jaCB84Yuy4Yqk4Yid4YiyIOGIquGIjSDhiqLhiLXhibThibUgfCDhiabhiIwg4YuL4YqTIOGJouGIrg!8m2!3d8.9924004!4d38.7915301!16s%2Fg%2F11vyyvp4q1!3m5!1s0x164b858a1951e55b:0x2804c33759c40d65!8m2!3d8.9924004!4d38.7915301!16s%2Fg%2F11vyyvp4q1?entry=ttu&g_ep=EgoyMDI1MDExNS4wIKXMDSoASAFQAw%3D%3D',
  };

  return (
    <footer className="w-full max-w-screen-sm p-6 bg-[#003359] text-white rounded-lg shadow-lg mx-auto flex justify-between items-center relative">
      {/* Left Section: Logo and Social Icons */}
      <div className="flex flex-col items-center w-1/2">
        {/* Logo */}
        <Image
          src={dmc_logo}
          alt="Company Logo"
          className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-white mb-4"
        />
        {/* Social Icons */}
        <div className="flex gap-4 text-2xl pb-8">
          <a
            href={links.facebook}
            className="p-1 hover:text-[#00BDFF]  transition duration-300"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
          <a
            href={links.linkedin}
            className="p-1 hover:text-[#00BDFF] transition duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href={links.location}
            className="p-1 bg-red-600 text-white rounded-full hover:bg-red-700"
            aria-label="Location"
          >
            <FaMapMarkerAlt />
          </a>
        </div>
      </div>

      {/* Right Section: Buttons */}
      <div className="flex flex-col gap-4 w-1/2">
        <button
          className="w-full py-2 text-white rounded-md"
          style={{
            backgroundImage: 'linear-gradient(90deg, #003359 0%, #00BDFF 100%)',
          }}
          onClick={() => alert('Share functionality here!')}
        >
          Share
        </button>
        <button
          className="w-full py-2 text-white rounded-md"
          style={{
            backgroundImage: 'linear-gradient(90deg, #003359 0%, #00BDFF 100%)',
          }}
          onClick={() => alert('Add to contact functionality here!')}
        >
          Add to Contact
        </button>
      </div>

      {/* Footer Bottom: Copyright */}
      <div className="absolute bottom-1 left-0 w-full text-center">
        <p className="text-sm text-gray-400 pt-2">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
}