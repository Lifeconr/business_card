'use client';

import Header from "./components/header";

import Footer from "./components/footer";
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Home() {
  const [realtors, setRealtors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRealtors = async () => {
      try {
        const res = await fetch(
          'https://raw.githubusercontent.com/Lifeconr/business_card/dynamic/public/data/realtors.json'
        );
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await res.json();
        setRealtors(data);
      } catch (err) {
        console.error(err);
        setError('Failed to load data');
      } finally {
        setLoading(false);
      }
    };

    fetchRealtors();
  }, []);

  // if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div> 
      <Header />
      <div className="w-full max-w-screen-sm mx-auto rounded-lg shadow-lg py-6 bg-white">
        <h2 className="text-3xl text-center font-bold mb-6 text-[#003359]">Our Realtors</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 px-4">
          {realtors.map((realtor) => (
            <div
              key={realtor.id}
              className="bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
            >
              <Image
                src={realtor.picture}
                alt={realtor.name}
                className="w-32 h-32 rounded-full mx-auto"
                width={128}
                height={128}
              />
              <h3 className="text-xl font-semibold text-center text-[#003359] mt-4">{realtor.name}</h3>
              <p className="text-center text-gray-600">{realtor.position}</p>
              
              <div className="text-center mt-4">
                <Link
                  href={`/realtors/${realtor.id}`}
                  className="inline-block bg-[#003359] text-white px-4 py-2 rounded-md hover:bg-[#00BDFF] transition-colors"
                >
                  View Profile
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
