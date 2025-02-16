'use client';

import Image from 'next/image';
import dmc_logo from '../../../public/images/dmclogo.jpg';
import { FaFacebook, FaLinkedin, FaMapMarkerAlt, FaTelegram, FaWhatsapp, FaShareAlt, FaUserPlus } from 'react-icons/fa';

export default function Footer({ name, title, phone, email, linkedin, facebook, telegram, whatsapp }) {
  return (
    <footer className="w-full max-w-screen-sm pt-6 pr-8 bg-[#102c52] text-white shadow-lg mx-auto flex justify-between items-center relative">
      {/* Left Section: Logo and Tagline */}
      <div className="flex flex-col items-center w-3/4">
        <Image
          src={dmc_logo}
          alt="Company Logo"
          className="w-28 h-20 sm:w-40 sm:h-24"
        />
        <p className="text-center text-white text-l font-thin font-cursive mb-20">
          Joy Starts Here <br />
        </p>
      </div>

      {/* Right Section: Buttons */}
      <div className="flex flex-col pl-8 gap-2 w-1/2">
        <button
          className="flex items-center justify-center w-36 py-2 text-white rounded-md"
          style={{
            backgroundImage: 'linear-gradient(90deg, #003359 0%, #00BDFF 100%)',
          }}
          onClick={async () => {
            if (navigator.share) {
              try {
                await navigator.share({
                  title: `Check out ${name}'s profile!`,
                  text: `${name} - ${title} at DMC Real Estate`,
                  url: window.location.href,
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
            const vCardData = `BEGIN:VCARD\r\nVERSION:3.0\r\nFN:${name}\r\nTEL:${phone}\r\nEMAIL:${email}\r\nORG:DMC Real Estate\r\nTITLE:${title}\r\nEND:VCARD\r\n`;
            const blob = new Blob([vCardData], { type: 'text/vcard' });
            const url = URL.createObjectURL(blob);

            const a = document.createElement('a');
            a.href = url;
            a.download = `${name}_contact.vcf`;
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
          {facebook && (
            <a
              href={facebook}
              className="p-1 hover:text-[#00BDFF] transition duration-300"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
          )}
          {telegram && (
            <a
              href={telegram}
              className="p-1 hover:text-[#00BDFF] transition duration-300"
              aria-label="Telegram"
            >
              <FaTelegram />
            </a>
          )}
          {whatsapp && (
            <a
              href={whatsapp}
              className="p-1 hover:text-[#00BDFF] transition duration-300"
              aria-label="Whatsapp"
            >
              <FaWhatsapp />
            </a>
          )}
          {linkedin && (
            <a
              href={linkedin}
              className="p-1 hover:text-[#00BDFF] transition duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          )}
        </div>

        {/* Footer Bottom: Copyright */}
        <div className="absolute bottom-1 pt-4 left-0 w-full text-center">
          <p className="text-sm text-white">
            Powered by{' '}
            <a
              href="https://seedgit.com/qrur/"
              className="hover:text-[#00BDFF]"
            >
              S.E.E.D
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
