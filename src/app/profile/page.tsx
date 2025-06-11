"use client";

import { useState, useEffect } from "react";
import { auth } from "@/lib/firebase";

const ProfilePage = () => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      }
    });

    return () => unsubscribe();
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex items-center justify-center h-full">
      <div className="bg-white shadow-md rounded-lg p-8">
        <h1 className="text-2xl font-bold mb-4">Profile</h1>
        <p>Email: {user.email}</p>
        <p>Display Name: {user.displayName || "N/A"}</p>
        {/* Add more profile information here */}
      </div>
    </div>
  );
};

export default ProfilePage;
