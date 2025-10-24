"use client";
import React, { useState, useEffect } from 'react';
import { useParams } from "next/navigation";
import CastumerHeader from '@/_components/CastumerHader';
import Image from 'next/image';

export default function Page() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const name = decodeURIComponent(params.name || "");

  // Filter data for the selected restaurant
  const selectedResData = Array.isArray(data)
    ? data.filter(item => item.Resname === name)
    : [];

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      const user = JSON.parse(localStorage.getItem("food")) || [];
      setData(user);
      setLoading(false);
    }, 800);
  }, []);

  return (
    <div>
      <CastumerHeader />
      <div className="flex flex-col items-center justify-center bg-black/40 backdrop-blur-sm py-12 px-4 min-h-screen bg-[url('/123.jpg')] bg-cover bg-center">
        <div className="w-full max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-extrabold text-orange-600 animate-wave mb-8 text-center drop-shadow-lg">
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
                    className="
                      bg-white rounded-xl shadow-md
                      px-4 py-6 mb-8 w-full
                      max-w-2xl mx-auto
                    "
                  >
                    {/* Restaurant Name */}
                    <h1 className="
                      mb-4 w-full text-center
                      text-2xl md:text-4xl font-extrabold
                      text-transparent bg-clip-text
                      bg-gradient-to-r from-yellow-600 via-orange-500 to-red-600
                      drop-shadow-md
                    ">
                      {item.Resname}
                    </h1>

                    {/* Content: Responsive Layout */}
                    <div className="
                      flex flex-col md:flex-row
                      items-center md:items-start
                      gap-5 md:gap-10
                    ">
                      {/* Left: Details */}
                      <div className="flex flex-col space-y-2 flex-1 w-full">
                        <div className="flex items-center">
                          <span className="text-gray-800 font-bold mr-1">Food:</span>
                          <span className="text-lg font-bold text-green-600">{item.Name}</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-gray-800 font-bold mr-1">Location:</span>
                          <span className="text-gray-700">{item.City}</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-gray-800 font-bold mr-1">Contact:</span>
                          <span className="text-gray-700">{item.Contact}</span>
                        </div>
                        <div className="text-lg font-bold flex items-center gap-2 mt-2">
                          <span className="text-black">Price:</span>
                          <span className="line-through text-xl text-gray-500">₹{item.Price}</span>
                          <span className="text-red-600 text-xl">₹299</span>
                        </div>
                      </div>
                      {/* Right: Image */}
                      <div className="
                        flex-shrink-0
                        bg-white rounded-lg shadow
                        flex items-center justify-center
                        w-24 h-24 md:w-32 md:h-32
                      ">
                        <Image
                          src={item.Image?.startsWith("/") ? item.Image : "/burger.png"}
                          width={128}
                          height={128}
                          alt={item.Name || "Food"}
                          className="w-full h-full rounded-md object-cover"
                          priority
                        />
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-700 py-10">No data available.</p>
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











// "use client";
// import React, { useState } from 'react'
// import { useParams } from "next/navigation";
// import CastumerHeader from '@/_components/CastumerHader';
// import { useEffect } from 'react';
// import Image from 'next/image';



// export default function page() {
//   const [data, setData] = useState("")
//   const [loading, setLoading] = useState(false)
//   const params = useParams();




//   const name = decodeURIComponent(params.name,);
//   const selectedResData = Array.isArray(data)
//     ? data.filter(item => item.Resname === name)
//     : [];

//   console.log("Output", selectedResData, name);



//   useEffect(() => {
//     stored();
//   }, []);

//   const stored = () => {
//     setLoading(true);
//     setTimeout(() => {
//       const user = JSON.parse(localStorage.getItem("food")) || [];
//       setData(user);
//       setLoading(false);
//     }, 800);
//   };

//   console.log(data);

//   return (
//     <div>
//       <CastumerHeader />
//       <div
//         className="flex flex-col items-center justify-center flex-grow bg-black/40 backdrop-blur-sm py-20 px-6 bg-[url('/123.jpg')] bg-cover bg-center h-screen">
//         <div className="transform -translate-y-10 md:-translate-y-16">
//           <h1 className="text-5xl md:text-6xl font-extrabold text-orange-600 animate-wave mb-12 text-center drop-shadow-lg">
//             🍕{name}

//           </h1>
//           {loading ? (
//             <div className="flex justify-center items-center py-10">
//               <div className="text-orange-500 text-xl font-semibold animate-pulse">
//                 Loading delicious items...
//               </div>
//             </div>
//           ) : (
//             <div >
//               {selectedResData.length > 0 ? (
//                 selectedResData.map((item, index) => (
//                   <div
//                     key={index}
//                     className="bg-white rounded-xl shadow-md p-5 max-w-sm w-full ml-20"
//                   >

//                     {/* <h1 className="text-4xl font-extrabold text-black mb-3 w-full text-center">{item.Resname} </h1> */}
//                     <h1 className="mb-3 w-full text-center gap-10 text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 via-orange-500 to-red-600 drop-shadow-md">
//                       {item.Resname}
//                     </h1>

//                     <div className="flex items-center ml-12">

//                       <div className="flex flex-col space-y-1 flex-grow">
//                         <div className="flex items-center mt-1">
//                           <span className="text-gray-800 font-bold mr-1">Food:</span>
//                           <span className="text-lg font-bold text-green-600">{item.Name}</span>
//                         </div>
//                         <div className="flex items-center mt-1">
//                           <span className="text-gray-800 font-bold mr-1">Location:</span>
//                           <span className="text-gray-700">{item.City}</span>
//                         </div>
//                         <div className="flex items-center mt-1">
//                           <span className="text-gray-800 font-bold mr-1">Contact:</span>
//                           <span className="text-gray-700">{item.Contact}</span>
//                         </div>
                       
//                         <div className="mt-4 text-lg font-bold flex items-center gap-2">
//                           <span className="text-black">Price:</span>
//                           <span className="line-through text-xl text-gray-600">₹{item.Price}</span>
//                           <span className="text-red-600 text-xl">₹299</span>
//                         </div>


//                       </div>

//                       <div className="flex-shrink-0 bg-white rounded-lg shadow ml-6 p-1 flex items-center justify-center">
//                         <Image
//                           src={item.Image?.startsWith("/") ? item.Image : "/burger.png"}
//                           width={90}
//                           height={80}
//                           alt={item.Name || "Food"}
//                           className="w-30 h-30 rounded-md object-cover"
//                         />
//                       </div>
//                     </div>
//                   </div>


//                 ))
//               ) : (
//                 <p>No data available.</p>
//               )}
//             </div>
//           )}
//         </div>
//         <style jsx>{`
//         @keyframes wave {
//           0% {
//             color: #fb923c;
//             text-shadow: 0 0 10px #fb923c, 0 0 20px #f97316;
//           }
//           50% {
//             color: #ea580c;
//             text-shadow: 0 0 30px #fb923c, 0 0 50px #f97316;
//           }
//           100% {
//             color: #fb923c;
//             text-shadow: 0 0 10px #fb923c, 0 0 20px #f97316;
//           }
//         }

//         .animate-wave {
//           animation: wave 2s ease-in-out infinite;
//         }
//       `}</style>
//       </div>
//     </div>
//   )
// }


