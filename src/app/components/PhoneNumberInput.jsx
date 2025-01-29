'use client';

import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const PhoneNumberInput = ({ value, onChange, isHouseTypeSelected }) => {
  const [countryData, setCountryData] = useState({
    name: '',
    dialCode: '',
    countryCode: '',
  });

  return (
    <div>
      <PhoneInput
        country={'et'} // Default country
        value={value}
        onChange={(phone, country) => {
          onChange(phone);
          setCountryData({
            name: country.name,
            dialCode: country.dialCode,
            countryCode: country.countryCode,
          });
        }}
        isValid={(inputNumber, country) => {
          const minLength = country.format.replace(/\D/g, '').length; // Minimum required length
          return inputNumber.length >= minLength;
        }}
        enableSearch
        placeholder="Choose country code"
        inputClass="!w-full border !border-[#003359]  rounded-md focus:outline-none focus:ring-2 focus:ring-[#003359]"
        buttonClass="!bg-transparent border-none focus:ring-0"
        dropdownClass="custom-dropdown"
        containerClass="!w-full !lg:w-72"
      />
      {countryData.name && (
        <p className="text-sm text-gray-500 mt-1">
          Selected Country: {countryData.name} (+{countryData.dialCode})
        </p>
      )}
    </div>
  );
};

export default PhoneNumberInput;
