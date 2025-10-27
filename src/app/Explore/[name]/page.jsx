"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import CastumerHeader from "@/_components/CastumerHader";
import Image from "next/image";

export default function Page() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cartData, setCartData] = useState("");
  const params = useParams();
  const name = decodeURIComponent(params.name || "");

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      const user = JSON.parse(localStorage.getItem("food")) || [];
      setData(user);
      setLoading(false);
    }, 800);
  }, []);

  const selectedResData = Array.isArray(data)
    ? data.filter((item) => item.Resname === name)
    : [];

  const AddToCart = (item) => {

    setCartData(item)

  }
  return (
    <div>
      <CastumerHeader cartData={cartData}/>
      <div className="flex flex-col items-center justify-center flex-grow bg-black/40 backdrop-blur-sm py-20 px-6 bg-[url('/123.jpg')] bg-cover bg-center min-h-screen">
        <div className="transform -translate-y-10 md:-translate-y-16">
          <h1 className="text-5xl md:text-6xl font-extrabold text-orange-600 animate-wave mb-12 text-center drop-shadow-lg">
            🍕{name}
          </h1>

          {loading ? (
            <div className="flex justify-center items-center py-10">
              <div className="text-orange-500 text-xl font-semibold animate-pulse">
                Loading delicious items...
              </div>
            </div>
          ) : (
            <div>
              {selectedResData.length > 0 ? (
                selectedResData.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-md p-5 max-w-sm sm:max-w-md md:max-w-2xl w-full mx-auto mb-8"
                  >
                    <h1 className="mb-3 w-full text-center text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 via-orange-500 to-red-600 drop-shadow-md">
                      {item.Resname}
                    </h1>

                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                      {/* Image on the left */}
                      <div className="flex-shrink-0 bg-white rounded-lg shadow p-1 flex items-center justify-center">
                        <Image
                          src={
                            item.Image?.startsWith("/")
                              ? item.Image
                              : "/burger.png"
                          }
                          width={90}
                          height={80}
                          alt={item.Name || "Food"}
                          className="w-28 h-28 md:w-32 md:h-32 rounded-md object-cover"
                        />
                      </div>

                      {/* Text Details */}
                      <div className="flex flex-col space-y-2 flex-grow text-center md:text-left">
                        <div className="flex justify-center md:justify-start items-center gap-2">
                          <span className="text-gray-800 font-bold">Food:</span>
                          <span className="text-lg font-bold text-green-600">
                            {item.Name}
                          </span>
                        </div>
                        <div className="flex justify-center md:justify-start items-center gap-2">
                          <span className="text-gray-800 font-bold">Location:</span>
                          <span className="text-gray-700">{item.City}</span>
                        </div>
                        <div className="flex justify-center md:justify-start items-center gap-2">
                          <span className="text-gray-800 font-bold">Contact:</span>
                          <span className="text-gray-700">{item.Contact}</span>
                        </div>

                        <div className="mt-2 text-lg font-bold flex items-center justify-center md:justify-start gap-2">
                          <span className="text-black">Price:</span>
                          <span className="line-through text-3xl text-gray-600">
                            ₹{item.Price}
                          </span>
                          <span className="text-red-600 text-4xl">{item.Sprice}</span>
                        </div>
                        <button 
                        onClick={()=>AddToCart(item)}
                        
                        className="bg-orange-600 rounded-2xl text-center font-bold text-white cursor-pointer py-2 px-6 hover:bg-yellow-700  shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                          Add To Cart
                        </button>


                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-700 py-8">
                  No data available.
                </p>
              )}
            </div>
          )}
        </div>

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
      </div>
    </div>
  );
}


