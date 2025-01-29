import Image from 'next/image';
import dmc_logo from '../../../public/images/dmc_logo.jpg';
import ImageSlider from './slider.jsx';

export default function Header() {
  return (
    <div className="w-full max-w-screen-sm bg-gray-200 mx-auto rounded-lg shadow-lg">
      <div className="flex flex-row">
        {/* Logo Section */}
        <div className="w-2/5 flex items-center justify-center bg-white p-">
          <div>
            <Image
              src= {dmc_logo} 
              alt="Company Logo"
              className="w-24 h-16 mx-auto lg:w-30 lg:h-30"
            />
            <p className="text-center text-[#003359] text-l font-thin font-cursive ">
                  Joy Starts Here <br />
            </p>
          </div>
        </div>

        {/* Slider Section */}
        <div className="w-4/5 bg-gray-100 p-1">
          <ImageSlider />
        </div>
      </div>
    </div>
  );
}
