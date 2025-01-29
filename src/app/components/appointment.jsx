'use client';

import { useState } from "react";

export default function AppointmentPage() {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedHour, setSelectedHour] = useState("");
  const [errorMessage, setErrorMessage] = useState({ date: "", hour: "" });
  const [confirmationMessage, setConfirmationMessage] = useState("");

  const availableHours = [
    "8:10 - 10:00",
    "10:10 - 12:00",
    "12:10 - 14:00",
    "14:10 - 16:00"
  ];

  const handleMakeAppointment = () => {
    let hasError = false;

    if (!selectedDate) {
      setErrorMessage((prev) => ({ ...prev, date: "Please select a date." }));
      hasError = true;
    } else {
      setErrorMessage((prev) => ({ ...prev, date: "" }));
    }

    if (!selectedHour) {
      setErrorMessage((prev) => ({ ...prev, hour: "Please select an hour." }));
      hasError = true;
    } else {
      setErrorMessage((prev) => ({ ...prev, hour: "" }));
    }

    if (!hasError) {
      setConfirmationMessage(`You selected ${selectedDate} at ${selectedHour}.`);
      const paymentSection = document.getElementById("payment");
      if (paymentSection) {
        paymentSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section id="appointment" className=" bg-primary-light">
      <div className="container mx-auto px-6 md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
        <h2 className="text-center text-2xl font-bold text-primary-dark mb- bg-white">
          Book Your Appointment
        </h2>
        <div className="bg-white shadow-lg rounded-xl p-8 max-w-lg mx-auto">
          <div className="mb-">
            <label htmlFor="date" className="block text-base font-medium text-[#003359] mb-2">
              Select Date:
            </label>
            <input
              type="date"
              id="date"
              value={selectedDate}
              onChange={(e) => {
                setSelectedDate(e.target.value);
                setErrorMessage((prev) => ({ ...prev, date: "" }));
                setSelectedHour("");
              }}
              className="w-full border border-[#003359] rounded-lg px-4 py-2 focus:ring-2  focus:ring-[#003359] focus:outline-none"
            />
            {errorMessage.date && <p className="text-red-600 text-sm mt-1">{errorMessage.date}</p>}
          </div>
          <div className="mb-6">
            <label htmlFor="hour" className="block pt-2 text-base font-medium text-[#003359]">
              Select Time Slot:
            </label>
            <select
              id="hour"
              value={selectedHour}
              onChange={(e) => setSelectedHour(e.target.value)}
              className="w-full border border-[#003359] rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#003359] focus:outline-none"
            >
              <option value="">-- Select an hour --</option>
              {availableHours.map((hour, index) => (
                <option key={index} value={hour}>{hour}</option>
              ))}
            </select>
            {errorMessage.hour && <p className="text-red-600 text-sm mt-1">{errorMessage.hour}</p>}
          </div>
          {confirmationMessage && <p className="text-green-600 text-base font-medium mb-4">{confirmationMessage}</p>}
        <div className="text-center mt-4 ">
         <button
          type="submit"
          onClick={handleMakeAppointment}
          className="inline-block sm:w-auto py-2 px-4 text-white rounded-md transition-transform duration-300 transform hover:scale-105 overflow-hidden"
          style={{
            backgroundImage: 'linear-gradient(90deg, #003359 0%, #00BDFF 100%)',
          }}
          onMouseDown={(e) => e.target.classList.add('scale-95')}
          onMouseUp={(e) => e.target.classList.remove('scale-95')}
        >
          Make Appointment
          </button>
        </div>
        </div>
      </div>
    </section>
  );
}
