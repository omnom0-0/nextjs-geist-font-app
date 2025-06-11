"use client";

import { useEffect } from "react";
import { useRouter } from 'next/navigation';
import { auth } from "@/lib/firebase";

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        router.push('/dashboard');
      }
    });

    return () => unsubscribe();
  }, [router]);

  return (
    <div className="flex items-center justify-center h-full">
      <h1>Loading...</h1>
    </div>
  );
};

export default Home;
