import Image from 'next/image';
import dmc_logo from '../../../public/images/dmc_logo.jpg';
import ImageSlider from './slider.jsx';

export default function Header() {
  return (
    <div className="w-full max-w-screen-sm bg-gray-200 mx-auto rounded-lg shadow-lg">
      <div className="flex flex-row">
        {/* Logo Section */}
        <div className="w-2/5 flex items-center justify-center bg-white p-8">
          <div>
            <Image
              src= {dmc_logo} 
              alt="Company Logo"
              className="w-30 h-30 mx-auto"
            />
            <p className="text-center font-semibold text-[#003359]  mt-2">
              DMC Real Estate
            </p>
          </div>
        </div>

        {/* Slider Section */}
        <div className="w-3/5 bg-gray-100 p-2">
          <ImageSlider />
        </div>
      </div>
    </div>
  );
}
