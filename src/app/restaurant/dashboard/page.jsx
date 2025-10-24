"use client";
import Fooditems from '@/_components/Fooditems';
import FooditemsList from '@/_components/FooditemsList';
import Hader from '@/_components/Hader';
import React, { useEffect, useState } from 'react';

export default function Dashboard() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [addItems, setAddItems] = useState(false);

  useEffect(() => {
    const data = localStorage.getItem("user");
    if (data) {
      setResult(JSON.parse(data));
    }
    setLoading(false);
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100">
    
      <Hader/>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-4 max-w-7xl mx-auto">
        <div className="flex gap-4 w-full md:w-auto">
          <button
            onClick={() => setAddItems(true)}
            className="flex-1 md:flex-none bg-orange-500 text-white font-semibold px-4 md:px-6 py-3 rounded-xl shadow-md hover:bg-orange-600 hover:shadow-lg transition transform hover:-translate-y-1"
          >
            Add Food
          </button>
          <button
            onClick={() => setAddItems(false)}
            className="flex-1 md:flex-none bg-orange-500 text-white font-semibold px-4 md:px-6 py-3 rounded-xl shadow-md hover:bg-orange-600 hover:shadow-lg transition transform hover:-translate-y-1"
          >
            Dashboard
          </button>
        </div>
      </div>
      <div className="p-4 max-w-7xl mx-auto w-full">
        {addItems
          ? <Fooditems setAddItems={setAddItems} />
          : <FooditemsList user={result} />}
      </div>
    </div>
  );
}




