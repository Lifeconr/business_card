'use client';

import { useState } from 'react';

export default function RegisterSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    occupation: '',
    houseType: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' }); // Clear error for the field
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};

    if (!formData.name) validationErrors.name = 'Name is required.';
    if (!formData.phone) validationErrors.phone = 'Phone number is required.';
    if (!/^\d+$/.test(formData.phone)) validationErrors.phone = 'Only numbers are allowed.';
    if (!formData.occupation) validationErrors.occupation = 'Occupation is required.';
    if (!formData.houseType) validationErrors.houseType = 'Please select a house type.';

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Submit the form
      alert('Form submitted successfully!');
    }
  };

  return (
    <div className="w-full max-w-screen-sm p-12 bg-white rounded-lg shadow-lg mx-auto">
      <h2 className="text-2xl font-bold text-center mb-4 text-[#003359]">Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full p-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md`}
            placeholder="Enter your name"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full p-2 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md`}
            placeholder="Enter your phone number"
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Occupation</label>
          <input
            type="text"
            name="occupation"
            value={formData.occupation}
            onChange={handleChange}
            className={`w-full p-2 border ${errors.occupation ? 'border-red-500' : 'border-gray-300'} rounded-md`}
            placeholder="Enter your occupation"
          />
          {errors.occupation && <p className="text-red-500 text-sm mt-1">{errors.occupation}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">House Type</label>
          <select
            name="houseType"
            value={formData.houseType}
            onChange={handleChange}
            className={`w-full p-2 border ${errors.houseType ? 'border-red-500' : 'border-gray-300'} rounded-md`}
          >
            <option value="">Select House Type</option>
            <option>Studio</option>
            <option>One Bedroom</option>
            <option>Two Bedroom</option>
            <option>Three Bedroom</option>
            <option>Four Bedroom</option>
            <option>Shop</option>
          </select>
          {errors.houseType && <p className="text-red-500 text-sm mt-1">{errors.houseType}</p>}
        </div>
        <button
          type="submit"
          className="w-full py-2 text-white rounded-md"
          style={{
            backgroundImage: 'linear-gradient(90deg, #003359 0%, #00BDFF 100%)',
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
