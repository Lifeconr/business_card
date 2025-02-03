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
    <section id="appointment" className="bg-white">
      <div className="container mx-auto px-6 md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
        <h2 className="text-center text-2xl px-2 font-bold bg-white text-black rounded-lg">
          Book Your Appointment
        </h2>
        <div className="bg-white shadow-lg rounded-xl p-8 max-w-lg mx-auto">
        <label htmlFor="date" className="text-base font-medium text-[#003359] sm:mt-0 sm:ml-4">
              Select Date
        </label>
          <div className="mb-4 flex flex-col sm:flex-row sm:items-center">
           <input
  type="date"
  id="date"
  value={selectedDate}
  onChange={(e) => {
    setSelectedDate(e.target.value);
    setErrorMessage((prev) => ({ ...prev, date: "" }));
    setSelectedHour("");
  }}
  onFocus={(e) => {
    if (e.target.type === "text") {
      e.target.type = "date"; // Switch back to date input
    } else if (e.target.showPicker) {
      e.target.showPicker(); // Opens native picker on mobile
    }
  }}
  className="w-full border border-[#003359] rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#003359] focus:outline-none text-black"
  style={{
    color: selectedDate ? "black" : "#9CA3AF", // Gray color for placeholder effect
  }}
  onBlur={(e) => {
    if (!e.target.value) {
      e.target.type = "text"; // Show the placeholder effect
      e.target.value = "";
    }
  }}
/>

          </div>
          {errorMessage.date && <p className="text-red-600 text-sm mt-1">{errorMessage.date}</p>}
          <label htmlFor="hour" className="text-base font-medium text-[#003359] sm:mt-0 sm:ml-4">
              Select Time Slot
            </label>
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center">
            <select
              id="hour"
              value={selectedHour}
              onChange={(e) => setSelectedHour(e.target.value)}
              className="w-full border border-[#003359] rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#003359] focus:outline-none text-black"
            >
              <option value="">-- Select --</option>
              {availableHours.map((hour, index) => (
                <option key={index} value={hour}>{hour}</option>
              ))}
            </select>

          </div>
          {errorMessage.hour && <p className="text-red-600 text-sm mt-1">{errorMessage.hour}</p>}

          {confirmationMessage && <p className="text-green-600 text-base font-medium mb-4">{confirmationMessage}</p>}
          
          <div className="text-center mt-4">
            <button
              type="submit"
              onClick={handleMakeAppointment}
              className="inline-block sm:w-auto py-2 px-4 text-white rounded-md transition-transform duration-300 transform hover:scale-105 overflow-hidden"
              style={{ backgroundImage: 'linear-gradient(90deg, #003359 0%, #00BDFF 100%)' }}
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
