"use client";

import { useState, useEffect } from "react";
import { auth } from "@/lib/firebase";
import { useRouter } from 'next/navigation';
import DoctorSearch from "@/components/DoctorSearchNew";
import HealthScreening from "@/components/HealthScreening";
import AppointmentScheduling from "@/components/AppointmentScheduling";

const Dashboard = () => {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        router.push('/login');
      }
    });

    return () => unsubscribe();
  }, [router]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-8">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <p>Welcome, {user.displayName || user.email}!</p>

      <div className="mt-8">
        <h2 className="text-xl font-bold mb-2">Health Screening</h2>
        <HealthScreening />
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-bold mb-2">Doctor Search</h2>
        <DoctorSearch />
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-bold mb-2">Appointment Scheduling</h2>
        <AppointmentScheduling />
      </div>
    </div>
  );
};

export default Dashboard;
