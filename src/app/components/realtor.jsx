'use client';

import Image from 'next/image';
import ppic from '../../../public/images/ppic.jpg';
import {
  FaPhone,
  FaFacebook,
  FaTelegram,
  FaMapMarkerAlt,
  FaEnvelope,
  FaLinkedin,
  FaWhatsapp,
} from 'react-icons/fa';

export default function RealtorSection() {
  const realtor = {
    name: 'Kidst Mengistu',
    position: 'Realtor',
    phone: '+251 91 220 9322',
    email: 'example@gmail.com',
    linkedin: 'https://www.linkedin.com/company/dmc-realestate/',
    website: 'https://dmcreal-estate.com/',
    facebook: 'https://web.facebook.com/p/DMC-Real-Estate-100088437130483/?_rdc=1&_rdr',
    telegram: 'https://t.me/Kidiine',
    whatsapp: 'https:example.com',
    location: 'Addis Ababa, Ethiopia',
    picture: ppic,
  };

  // Function to copy text to clipboard
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert(`${text} copied to clipboard!`);
    });
  };

  return (
    <div className="w-full max-w-screen-sm p-12 rounded-lg shadow-lg mx-auto text-white">
      <Image
        src={realtor.picture}
        alt={realtor.name}
        className="w-32 h-32 rounded-full mx-auto mb-4"
        width={128}
        height={128}
      />
      <h2 className="text-2xl font-bold text-center text-[#003359] mb-4">{realtor.name}</h2>
      <p className="text-center text-xl font-bold text-[#003359]">{realtor.position}</p>

      {/* Contact Info */}
      <div className="mt-4 mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
          {/* Phone */}
          <div
            className="flex items-center bg-gray-200 text-[#003359]  px-4 py-2 rounded-md cursor-pointer hover:bg-gray-300"
            onClick={() => copyToClipboard(realtor.phone)}
          >
            <FaPhone className="text-2xl mr-4" />
            <div>
              <p className="font-semibold">{realtor.phone}</p>
              <span className="text-sm">Phone Number</span>
            </div>
          </div>

          {/* Email */}
          <div
            className="flex items-center bg-gray-200 text-[#003359] px-4 py-2 rounded-md cursor-pointer hover:bg-gray-300"
            onClick={() => copyToClipboard(realtor.email)}
          >
            <FaEnvelope className="text-2xl mr-4" />
            <div>
              <p className="font-semibold">{realtor.email}</p>
              <span className="text-sm">Email</span>
            </div>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="flex justify-center items-center gap-4 mt-4">
        <a
          href={realtor.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700"
        >
          <FaLinkedin className="text-2xl" />
        </a>
        <a
          href={realtor.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
        >
          <FaFacebook className="text-2xl" />
        </a>
        <a
          href={realtor.telegram}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-blue-400 text-white rounded-full hover:bg-blue-500"
        >
          <FaTelegram className="text-2xl" />
        </a>
        <a
          href={realtor.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-green-500 text-white rounded-full hover:bg-green-600"
        >
          <FaWhatsapp className="text-2xl" />
        </a>
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
            realtor.location
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-red-600 text-white rounded-full hover:bg-red-700"
        >
          <FaMapMarkerAlt className="text-2xl" />
        </a>
      </div>

      {/* Website Button */}
      <div className="text-center mt-8 mb-12">
        <a
          href={realtor.website}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-2 px-4 text-white rounded-md"
          style={{
            backgroundImage: 'linear-gradient(90deg, #003359 0%, #00BDFF 100%)',
          }}
        >
          Visit Our Site
        </a>
      </div>

      {/* Slogan */}
      <p className="text-center text-[#003359] text-3xl font-thin mt-4 italic ">
        Joy Starts Here <br />
        <span className="text-[#00BDFF]">ደስታዎ እዚህ ይጀምራል!</span>
      </p>
    </div>
  );
}
