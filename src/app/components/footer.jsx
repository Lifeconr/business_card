'use client';

import Image from 'next/image';
import dmc_logo from '../../../public/images/dmclogo.jpg';
import { FaFacebook, FaLinkedin, FaMapMarkerAlt, FaTelegram,FaWhatsapp,FaShareAlt,FaUserPlus } from 'react-icons/fa';

export default function Footer() {
  const links = {
    linkedin: 'https://www.linkedin.com/company/dmc-realestate/',
    facebook: 'https://web.facebook.com/p/DMC-Real-Estate-100088437130483/?_rdc=1&_rdr',
    location: 'https://www.google.com/maps/place/DMC+Real+Estate+%7C+Bole+Main+Branch+%7C%E1%8B%B2%E1%8A%A4%E1%88%9D%E1%88%B2+%E1%88%AA%E1%88%8D+%E1%8A%A2%E1%88%B5%E1%89%B4%E1%89%B5+%7C+%E1%89%A6%E1%88%8C+%E1%8B%8B%E1%8A%93+%E1%89%A2%E1%88%AE/@8.9923851,38.7914111,21z/data=!4m14!1m7!3m6!1s0x164b858a1951e55b:0x2804c33759c40d65!2zRE1DIFJlYWwgRXN0YXRlIHwgQm9sZSBNYWluIEJyYW5jaCB84Yuy4Yqk4Yid4YiyIOGIquGIjSDhiqLhiLXhibThibUgfCDhiabhiIwg4YuL4YqTIOGJouGIrg!8m2!3d8.9924004!4d38.7915301!16s%2Fg%2F11vyyvp4q1!3m5!1s0x164b858a1951e55b:0x2804c33759c40d65!8m2!3d8.9924004!4d38.7915301!16s%2Fg%2F11vyyvp4q1?entry=ttu&g_ep=EgoyMDI1MDExNS4wIKXMDSoASAFQAw%3D%3D',
    telegram:'https://t.me/Kidiine',
    whatsapp: 'https://wa.me/c/251912209322',
  };

  return (
    <footer className="w-full max-w-screen-sm pt-6 pr-8 bg-[#102c52] text-white  shadow-lg mx-auto flex justify-between items-center relative">
      {/* Left Section: Logo and Social Icons */}
      <div className="flex flex-col items-center w-3/4">
        {/* Logo */}
        <Image
          src={dmc_logo}
          alt="Company Logo"
          className="w-28 h-20 sm:w-40 sm:h-24 "
        />
              <p className="text-center text-white text-l font-thin font-cursive mb-20">
                  Joy Starts Here <br />
            </p>      
      </div>

      {/* Right Section: Buttons */}
      <div className="flex flex-col pl-8 gap-2  w-1/2">
      <button
        className="flex items-center justify-center w-36 py-2 text-white rounded-md"
        style={{
          backgroundImage: 'linear-gradient(90deg, #003359 0%, #00BDFF 100%)',
        }}
        onClick={async () => {
          if (navigator.share) {
            try {
              await navigator.share({
                title: 'Check this out!',
                text: 'Here is something interesting for you!',
                url: 'https://business-card-sandy.vercel.app/ ', 
              });
            } catch (error) {
              console.error('Error sharing:', error);
            }
          } else {
            alert('Sharing is not supported in this browser.');
          }
        }}
      >
        <FaShareAlt className="mr-2" />
        Share
      </button>

      <button
        className="flex items-center justify-center w-36 py-2 text-white rounded-md"
        style={{
          backgroundImage: 'linear-gradient(90deg, #003359 0%, #00BDFF 100%)',
        }}
        onClick={() => {
          const vCardData = `
            BEGIN:VCARD
            VERSION:3.0
            FN:Kidst Mengistu
            TEL:+251 91 220 9322
            EMAIL:Kidstmengstu19@gmail.com
            ORG:DMC Real Estate 
            WORK INFO:Realtor
            END:VCARD
                `;

          const blob = new Blob([vCardData], { type: "text/vcard" });
          const url = URL.createObjectURL(blob);

          const a = document.createElement("a");
          a.href = url;
          a.download = "realtor_contact.vcf";
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          URL.revokeObjectURL(url);
        }}
      >
        <FaUserPlus className="mr-2" />
        Add to Contact
      </button>

       {/* Social Icons */}
        <div className="flex gap-2 text-2xl pt-2 pb-12">
          <a
            href={links.facebook}
            className="p-1 hover:text-[#00BDFF]  transition duration-300"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
          {/* <a
            href={links.linkedin}
            className="p-1 hover:text-[#00BDFF] transition duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a> */}
          <a
            href={links.telegram}     
            className="p-1 hover:text-[#00BDFF] transition duration-300"
            aria-label="Location"
          >
            <FaTelegram />
          </a>
          <a
            href={links.whatsapp}
            className="p-1 hover:text-[#00BDFF] transition duration-300"
            aria-label="Location"
          >
            <FaWhatsapp />
          </a>
          <a
            href={links.location}
            className="p-1  text-white rounded-full hover:text-[#00BDFF] "
            aria-label="Location"
          >
            <FaMapMarkerAlt />
          </a>
        </div>
              {/* Footer Bottom: Copyright */}
      <div className="absolute bottom-1 pt-4 left-0 w-full text-center">
        <p className="text-sm text-white ">
          Powered by <a href='https://seedgit.com/qrur/' className='hover:text-[#00BDFF] text-' > S.E.E.D </a>
        </p>
      </div>

      </div>
    </footer>
  );
}