// 'use client';

// import Image from 'next/image';
// import ppic from '../../../public/images/pp3.jpg';
// import {
//   FaPhoneAlt,
//   FaFacebook,
//   FaTelegram,
//   FaEnvelope,
//   FaLinkedin,
//   FaWhatsapp,
//   FaTiktok,
// } from 'react-icons/fa';

// export default function RealtorSection() {
//   const realtor = {
//     name: 'Kidst Mengistu',
//     position: 'Realtor',
//     phone: '+251 91 220 9322',
//     email: 'Kidstmengstu19@gmail.com',
//     linkedin: 'https://www.linkedin.com/in/kidst-mengistu-300748284?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
//     website: 'https://dmcreal-estate.com/',
//     facebook: 'https://www.facebook.com/profile.php?id=61567610923060',
//     telegram: 'https://t.me/Kidiine',
//     whatsapp: 'https://wa.me/c/251912209322',
//     tiktok: 'https://tiktok.com/@kidst19market',
 
//     picture: ppic,
//   };

//   // Function to copy text to clipboard
//   const copyToClipboard = (text) => {
//     navigator.clipboard.writeText(text).then(() => {
//       alert(`${text} copied to clipboard!`);
//     });
//   };

//   return (
//     <div className="w-full max-w-screen-sm p-8 rounded-lg shadow-lg mx-auto text-white bg-white">
//       <Image
//         src={realtor.picture}
//         alt={realtor.name}
//         className="w-36 h-36 rounded-full mx-auto mb-4"
//         width={128}
//         height={128}
//       />
//       <h2 className="text-2xl font-bold text-center text-[#003359] mb-">{realtor.name}</h2>
//       <p className="text-center text-xl font-bold text-[#003359]">{realtor.position}</p>

// {/* Contact Info */}
// <div className="mt-4 mb-6">
//   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
//     {/* Phone */}
//     <div
//       className="flex items-center bg-gray-200 text-[#003359] px-4 py-2 rounded-md cursor-pointer hover:bg-gray-300"
//       onClick={() => window.location.href = `tel:${realtor.phone}`} // Direct to phone
//     >
//       <FaPhoneAlt className="text-2xl mr-4" />
//       <div>
//         <span className="text-sm text-[#00BDFF]">Phone Number</span>
//         <p className="font-semibold">{realtor.phone}</p>
//       </div>
//     </div>

//     {/* Email */}
//     <div
//       className="flex items-center bg-gray-200 text-[#003359] px-4 py-2 rounded-md cursor-pointer hover:bg-gray-300"
//       onClick={() => window.location.href = `mailto:${realtor.email}`} // Direct to email
//     >
//       <FaEnvelope className="text-2xl mr-2" />
//       <div >
//         <span className="text-sm text-[#00BDFF]">Email</span>
//         <p className="font-semibold">{realtor.email}</p>
//       </div>
//     </div>
//   </div>
// </div>

//       {/* Social Links */}
//       <div className="flex justify-center items-center gap-4 mt-4">
//         <a
//           href={realtor.linkedin}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700"
//         >
//           <FaLinkedin className="text-2xl" />
//         </a>
//         <a
//           href={realtor.facebook}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
//         >
//           <FaFacebook className="text-2xl" />
//         </a>
//         <a
//           href={realtor.telegram}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="p-2 bg-blue-400 text-white rounded-full hover:bg-blue-500"
//         >
//           <FaTelegram className="text-2xl" />
//         </a>
//         <a
//           href={realtor.tiktok}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="p-2 bg-black text-white rounded-full hover:bg-black"
//         >
//           <FaTiktok className="text-2xl" />
//         </a>        
//         <a
//           href={realtor.whatsapp}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="p-2 bg-green-500 text-white rounded-full hover:bg-green-600"
//         >
//           <FaWhatsapp className="text-2xl" />
//         </a>
//       </div>

//       {/* Website Button */}
//       <div className="text-center mt-4 ">
//         <a
//           href={realtor.website}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="inline-block sm:w-auto py-2 px-4 text-white rounded-md transition-transform duration-300 transform hover:scale-105 overflow-hidden"
//           style={{
//             backgroundImage: 'linear-gradient(90deg, #003359 0%, #00BDFF 100%)',
//           }}
//           onMouseDown={(e) => e.target.classList.add('scale-95')}
//           onMouseUp={(e) => e.target.classList.remove('scale-95')}
//         >
//           Visit Our Site
//         </a>
//       </div>
//     </div>
//   );
// }