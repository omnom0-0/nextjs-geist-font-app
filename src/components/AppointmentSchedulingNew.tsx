"use client";

import { useState } from "react";

const AppointmentScheduling = () => {
  const [formData, setFormData] = useState({
    doctor: "",
    date: "",
    time: "",
    reason: "",
  });
  const [availableSlots, setAvailableSlots] = useState<string[]>([]);

  const handleChange = (event: any) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleDateChange = async (event: any) => {
    handleChange(event);
    // Implement logic to fetch available appointment slots for the selected date
    console.log("Fetching available slots for date:", event.target.value);
    // For now, display some dummy data
    setAvailableSlots([
      "9:00 AM",
      "10:00 AM",
      "11:00 AM",
      "2:00 PM",
      "3:00 PM",
      "4:00 PM",
    ]);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    // Implement appointment scheduling logic here
    console.log("Scheduling appointment with data:", formData);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-8">
      <h2 className="text-xl font-bold mb-4">Appointment Scheduling</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="doctor" className="block text-gray-700 text-sm font-bold mb-2">
            Doctor:
          </label>
          <input
            type="text"
            id="doctor"
            name="doctor"
            value={formData.doctor}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div>
          <label htmlFor="date" className="block text-gray-700 text-sm font-bold mb-2">
            Date:
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleDateChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div>
          <label htmlFor="time" className="block text-gray-700 text-sm font-bold mb-2">
            Time:
          </label>
          <select
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Select Time</option>
            {availableSlots.map((slot, index) => (
              <option key={index} value={slot}>
                {slot}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="reason" className="block text-gray-700 text-sm font-bold mb-2">
            Reason:
          </label>
          <textarea
            id="reason"
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Schedule Appointment
        </button>
      </form>
    </div>
  );
};

export default AppointmentScheduling;
