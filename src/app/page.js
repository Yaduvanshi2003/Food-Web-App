"use client";
import { useEffect, useState, useRef } from "react";
import CastumerHeader from "@/_components/CastumerHader";
import Footer from "@/_components/Footer";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [foodSearch, setFoodSearch] = useState("");
  const [showDropdownPlace, setShowDropdownPlace] = useState(false);
  const [showDropdownFood, setShowDropdownFood] = useState(false);
  const router = useRouter();
  const placeRef = useRef(null);
  const foodRef = useRef(null);

  useEffect(() => {
    loadLocation();
  }, []);

  const loadLocation = () => {
    setLoading(true);
    setTimeout(() => {
      const userData = JSON.parse(localStorage.getItem("food")) || [];
      setData(userData);
      setLoading(false);
    }, 800);
  };

  const uniqueCities = Array.from(new Set(data.map((item) => item.City)));

  const filteredRestaurants = data.filter((item) => {
    const matchCity = search
      ? item.City?.toLowerCase().includes(search.toLowerCase())
      : true;

    const matchFood = foodSearch
      ? item.Name?.toLowerCase().includes(foodSearch.toLowerCase())
      : true;

    return matchCity && matchFood;
  });

  const filteredFood = data
    .filter((item) =>
      item.Name?.toLowerCase().includes(foodSearch.toLowerCase())
    )
    .slice(0, 10);

  const handleSelectPlace = (city) => {
    setSearch(city);
    setShowDropdownPlace(false);
  };

  const handleSelectFood = (foodName) => {
    setFoodSearch(foodName);
    setShowDropdownFood(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (placeRef.current && !placeRef.current.contains(event.target)) {
        setShowDropdownPlace(false);
      }
      if (foodRef.current && !foodRef.current.contains(event.target)) {
        setShowDropdownFood(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <main
      className="min-h-screen bg-cover bg-center flex flex-col"
      style={{ backgroundImage: "url('/food-bg.jpg')" }}
    >
      <CastumerHeader />

      <div
        className="flex flex-col items-center justify-center flex-grow bg-black/40 backdrop-blur-sm py-20 px-6 bg-[url('/123.jpg')] bg-cover bg-center h-screen"
      >
        <div className="transform -translate-y-10 md:-translate-y-16">
          <h1 className="text-5xl md:text-6xl font-extrabold text-orange-600 animate-wave mb-12 text-center drop-shadow-lg">
            🍕 Discover Your Favorite Food
          </h1>

          {loading ? (
            <div className="flex justify-center items-center py-10">
              <div className="text-orange-500 text-xl font-semibold animate-pulse">
                Loading delicious items...
              </div>
            </div>
          ) : (
            <div className="bg-white/30 backdrop-blur-lg border border-orange-300 shadow-2xl rounded-3xl p-10 flex flex-col md:flex-row gap-8 items-center justify-center w-full max-w-5xl">
              <div className="relative w-full md:w-1/2" ref={placeRef}>
                <input
                  type="text"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setShowDropdownPlace(true);
                  }}
                  onFocus={() => setShowDropdownPlace(true)}
                  placeholder="Select Place"
                  className="px-6 py-4 w-full text-lg rounded-xl border border-orange-400 bg-white/70 shadow-inner focus:ring-4 focus:ring-orange-500 outline-none text-gray-800 placeholder-gray-500 transition"
                />
                {showDropdownPlace && uniqueCities.length > 0 && (
                  <ul className="absolute top-full left-0 w-full bg-white/90 border border-orange-300 rounded-xl shadow-lg mt-2 max-h-56 overflow-y-auto z-10">
                    {uniqueCities
                      .filter((city) =>
                        city.toLowerCase().includes(search.toLowerCase())
                      )
                      .map((city, index) => (
                        <li
                          key={index}
                          onClick={() => handleSelectPlace(city)}
                          className="px-4 py-2 cursor-pointer hover:bg-orange-100 transition text-gray-800 font-medium"
                        >
                          {city}
                        </li>
                      ))}
                  </ul>
                )}
                {showDropdownPlace && uniqueCities.length === 0 && (
                  <div className="absolute top-full left-0 w-full bg-white/90 border border-orange-300 rounded-xl shadow-lg mt-2 p-3 text-gray-600 text-center">
                    No places found
                  </div>
                )}
              </div>

              <div className="relative w-full md:w-1/2" ref={foodRef}>
                <input
                  type="text"
                  value={foodSearch}
                  onChange={(e) => {
                    setFoodSearch(e.target.value);
                    setShowDropdownFood(true);
                  }}
                  onFocus={() => setShowDropdownFood(true)}
                  placeholder="Enter food or restaurant name"
                  className="px-6 py-4 w-full text-lg rounded-xl border border-orange-400 bg-white/70 shadow-inner focus:ring-4 focus:ring-orange-500 outline-none text-gray-800 placeholder-gray-500 transition"
                />
                {showDropdownFood && filteredFood.length > 0 && (
                  <ul className="absolute top-full left-0 w-full bg-white/90 border border-orange-300 rounded-xl shadow-lg mt-2 max-h-56 overflow-y-auto z-10">
                    {filteredFood.map((item, index) => (
                      <li
                        key={index}
                        onClick={() => handleSelectFood(item.Name)}
                        className="px-4 py-2 cursor-pointer hover:bg-orange-100 transition text-gray-800 font-medium"
                      >
                        {item.Name}
                      </li>
                    ))}
                  </ul>
                )}
                {showDropdownFood && filteredFood.length === 0 && (
                  <div className="absolute top-full left-0 w-full bg-white/90 border border-orange-300 rounded-xl shadow-lg mt-2 p-3 text-gray-600 text-center">
                    No food found
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 bg-gray-100 ">
        {filteredRestaurants.length > 0 ? (
          filteredRestaurants.map((item, index) => (
            <div
              onClick={() => router.push("Explore/" + item.Resname + "?food=" + item.Name)}
              key={index}
              className="bg-white cursor-pointer rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 flex justify-between items-center w-full"
            >
              <div className="flex flex-col space-y-1 max-w-[75%]">
                <h1 className="text-xl font-bold text-orange-700 tracking-wide">
                  {item.Resname}
                </h1>
                <h2 className="text-lg font-semibold text-green-600">{item.Name}</h2>
                <h3 className="text-gray-700 font-medium">Location: {item.City}</h3>

                <div className="flex items-center space-x-2">
                  <span className="text-gray-700 font-medium">Contact:</span>
                  <span className="text-gray-600">{item.Contact}</span>
                </div>

                <h3 className="text-lg font-medium text-red-500">Price: ₹{item.Price}</h3>
              </div>

              <div className="ml-6 flex-shrink-0">
                <Image
                  src={
                    item.Image?.startsWith("/") ? item.Image : "/burger.png"
                  }
                  width={96}
                  height={96}
                  alt={item.Name || "Food"}
                  className="w-24 h-24 rounded-lg object-cover shadow-sm"
                />
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-700 col-span-full">
            No restaurants found in {search}
          </p>
        )}
      </div>

      <Footer />

      <style jsx>{`
        @keyframes wave {
          0% {
            color: #fb923c;
            text-shadow: 0 0 10px #fb923c, 0 0 20px #f97316;
          }
          50% {
            color: #ea580c;
            text-shadow: 0 0 30px #fb923c, 0 0 50px #f97316;
          }
          100% {
            color: #fb923c;
            text-shadow: 0 0 10px #fb923c, 0 0 20px #f97316;
          }
        }

        .animate-wave {
          animation: wave 2s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
}








