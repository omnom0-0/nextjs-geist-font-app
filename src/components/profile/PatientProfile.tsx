"use client";

import React from 'react';
import { Patient } from '@/types/types';

interface PatientProfileProps {
  patient: Patient;
}

const PatientProfile: React.FC<PatientProfileProps> = ({ patient }) => {
  return (
    <div>
      <h2>Patient Profile</h2>
      <p>Full Name: {patient.full_name}</p>
      <p>Email: {patient.email}</p>
      <p>Phone Number: {patient.phone_number}</p>
      <p>Date of Birth: {patient.date_of_birth?.toLocaleDateString()}</p>
      <p>Gender: {patient.gender}</p>
      <p>Medical History: {patient.medical_history}</p>
      <p>Allergies: {patient.allergies}</p>
      <p>Blood Type: {patient.blood_type}</p>
    </div>
  );
};

export default PatientProfile;
