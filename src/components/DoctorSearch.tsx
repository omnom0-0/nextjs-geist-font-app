"use client";

import React, { useState } from 'react';

const DoctorSearch = () => {
  const [specialization, setSpecialization] = useState('');
  const [location, setLocation] = useState('');
  const [rating, setRating] = useState('');

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    console.log({
      specialization,
      location,
      rating,
    });
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-8">
      <h1 className="text-2xl font-bold mb-4">Doctor Search</h1>
      <form onSubmit={handleSearch} className="w-2/3 space-y-6">
        <div>
          <label htmlFor="specialization" className="block text-gray-700 text-sm font-bold mb-2">Specialization</label>
          <input
            type="text"
            id="specialization"
            placeholder="Enter specialization"
            value={specialization}
            onChange={(e) => setSpecialization(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div>
          <label htmlFor="location" className="block text-gray-700 text-sm font-bold mb-2">Location</label>
          <input
            type="text"
            id="location"
            placeholder="Enter location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div>
          <label htmlFor="rating" className="block text-gray-700 text-sm font-bold mb-2">Rating</label>
          <select
            id="rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Any</option>
            <option value="4">4 stars and up</option>
            <option value="4.5">4.5 stars and up</option>
            <option value="5">5 stars</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default DoctorSearch;
