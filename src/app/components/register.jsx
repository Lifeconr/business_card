'use client'; 

import PhoneNumberInput from './PhoneNumberInput';
import { useState } from 'react';

export default function Register() {
  const [activeTab, setActiveTab] = useState('personal');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [formValues, setFormValues] = useState({
    fullName: '',
    companyName: '',
    email: '',
    houseType: '',
    bedroomType: '',
  });
  const [formErrors, setFormErrors] = useState({});

  const validate = () => {
    const errors = {};
    if (!formValues.fullName.trim()) {
      errors.fullName = 'Full name is required.';
    } else if (formValues.fullName.length > 50) {
      errors.fullName = 'Full name should not exceed 50 characters.';
    }

    if (activeTab === 'company' && !formValues.companyName.trim()) {
      errors.companyName = 'Company name is required.';
    } else if (
      activeTab === 'company' &&
      formValues.companyName.length > 50
    ) {
      errors.companyName = 'Company name should not exceed 50 characters.';
    }

    if (!formValues.email.trim()) {
      errors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      errors.email = 'Please enter a valid email.';
    }

    if (!phoneNumber.trim()) {
      errors.phoneNumber = 'Phone number is required.';
    }
    if (!formValues.houseType.trim()) {
      errors.houseType = "House type is required.";
    }
    if (!formValues.bedroomType.trim()) {
      errors.bedroomType = "Bedroom type is required.";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length === 0) {
      console.log('Form submitted successfully', {
        ...formValues,
        phoneNumber,
      });
    } else {
      setFormErrors(errors);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
    setFormErrors((prev) => ({ ...prev, [name]: null }));
  };

  return (
    <section id="register">
      <div className="container mx-auto px-6 md:max-w-2xl lg:max-w-4xl xl:max-w-5xl">
        <h1 className="text-center text-2xl font-bold text-black my-2">Register</h1>

        {/* Tabs */}
        <div className="flex justify-center">
          <button
            onClick={() => setActiveTab('personal')}
            className={`px-8 py-2 rounded-t-lg font-medium ${
              activeTab === 'personal' ? 'bg-[#003359] text-white' : 'bg-gray-200 text-gray-500'
            }`}
          >
            Personal
          </button>
          <button
            onClick={() => setActiveTab('company')}
            className={`px-8 py-2 rounded-t-lg font-medium ${
              activeTab === 'company' ? 'bg-[#003359] text-white' : 'bg-gray-200 text-gray-500'
            }`}
          >
            Company
          </button>
        </div>

        {/* Form */}
        <div className="bg-white shadow-lg rounded-xl p-6 max-w-lg mx-auto">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="block text-[#003359]">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formValues.fullName}
                onChange={handleInputChange}
                placeholder="Enter your name"
                autoComplete="name"
                className="w-full px-4 py-1 border border-[#003359] rounded-md focus:outline-none focus:ring-2 focus:ring-[#003359] text-black"
              />
              {formErrors.fullName && <p className="text-red-500 text-sm">{formErrors.fullName}</p>}
            </div>

            {/* Conditional Company Name */}
            {activeTab === 'company' && (
              <div>
                <label className="block text-[#003359]">Company Name</label>
                <input
                  type="text"
                  name="companyName"
                  value={formValues.companyName}
                  onChange={handleInputChange}
                  placeholder="Enter company name"
                  className="w-full px-4 py-1 border border-[#003359] rounded-md focus:outline-none focus:ring-2 focus:ring-[#003359] text-black"
                />
                {formErrors.companyName && <p className="text-red-500 text-sm">{formErrors.companyName}</p>}
              </div>
            )}

            {/* Phone Number */}
            <div>
              <label className="block text-[#003359]">Phone Number</label>
              <PhoneNumberInput
                value={phoneNumber}
                onChange={(value) => {
                  setPhoneNumber(value);
                  setFormErrors((prev) => ({ ...prev, phoneNumber: null }));
                }}
              />
              {formErrors.phoneNumber && <p className="text-red-500 text-sm">{formErrors.phoneNumber}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block text-[#003359]">Email</label>
              <input
                type="email"
                name="email"
                value={formValues.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                autoComplete="email"
                className="w-full px-4 py-1 border border-[#003359] rounded-md focus:outline-none focus:ring-2 focus:ring-[#003359] text-black"
              />
              {formErrors.email && <p className="text-red-500 text-sm">{formErrors.email}</p>}
            </div>

            {/* House Type & Bedroom Type - Responsive Layout */}
            <div className="flex flex-col sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0">
              <div className="w-full">
                <label className="block text-[#003359]">House Type</label>
                <select
                  name="houseType"
                  value={formValues.houseType}
                  onChange={handleInputChange}
                  className="w-full border border-[#003359] rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#003359] text-black"
                >
                  <option value="">Select</option>
                  <option>Apartment</option>
                  <option>Villa</option>
                </select>
                {formErrors.houseType && <p className="text-red-500 text-sm">{formErrors.houseType}</p>}
              </div>
              <div className="w-full">
                <label className="block text-[#003359]">Bedroom Type</label>
                <select
                  name="bedroomType"
                  value={formValues.bedroomType}
                  onChange={handleInputChange}
                  className="w-full border border-[#003359] rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#003359] text-black"
                >
                  <option value="">Select</option>
                  <option>1 Bedroom</option>
                  <option>2 Bedrooms</option>
                  <option>3 Bedrooms</option>
                  <option>4 Bedrooms</option>
                </select>
                {formErrors.bedroomType && <p className="text-red-500 text-sm">{formErrors.bedroomType}</p>}
              </div>
            </div>

            <div className="text-center mt-4">
              <button type="submit" className="py-2 px-6 text-white rounded-md bg-gradient-to-r from-[#003359] to-[#00BDFF] transform hover:scale-105 transition-transform">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
