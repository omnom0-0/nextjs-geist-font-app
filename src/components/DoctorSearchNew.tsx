"use client";

import { useState } from "react";

interface Doctor {
  name: string;
  specialty: string;
  location: string;
  insurance: string;
}

const DoctorSearch = () => {
  const [searchCriteria, setSearchCriteria] = useState({
    specialty: "",
    location: "",
    insurance: "",
  });
  const [searchResults, setSearchResults] = useState<Doctor[]>([]);

  const handleChange = (event: any) => {
    setSearchCriteria({
      ...searchCriteria,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    // Implement doctor search logic here
    console.log("Searching for doctors with criteria:", searchCriteria);
    // For now, display some dummy data
    setSearchResults([
      { name: "Dr. John Doe", specialty: "Cardiologist", location: "New York", insurance: "Aetna" },
      { name: "Dr. Jane Smith", specialty: "Dermatologist", location: "Los Angeles", insurance: "Blue Cross" },
    ]);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-8">
      <h2 className="text-xl font-bold mb-4">Doctor Search</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="specialty" className="block text-gray-700 text-sm font-bold mb-2">
            Specialty:
          </label>
          <input
            type="text"
            id="specialty"
            name="specialty"
            value={searchCriteria.specialty}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div>
          <label htmlFor="location" className="block text-gray-700 text-sm font-bold mb-2">
            Location:
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={searchCriteria.location}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div>
          <label htmlFor="insurance" className="block text-gray-700 text-sm font-bold mb-2">
            Insurance:
          </label>
          <input
            type="text"
            id="insurance"
            name="insurance"
            value={searchCriteria.insurance}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Search
        </button>
      </form>

      {searchResults.length > 0 && (
        <div className="mt-8">
          <h3 className="text-lg font-bold mb-2">Search Results</h3>
          <ul>
            {searchResults.map((doctor, index) => (
              <li key={index} className="py-2">
                {doctor.name} - {doctor.specialty} - {doctor.location} - {doctor.insurance}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DoctorSearch;
