"use client";
import React, { useState } from 'react';

export default function UpdateFooditems({ setAddItems }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [path, setPath] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(false);

  const handleEditFooditem = () => {
    if (!name || !price || !path || !description) {
      setError(true);
      return;
    }

    setError(false);

    const payload = {
      Name: name,
      Price: price,
      Image: path,
      Description: description,
    };

    alert("Item added successfully!");
    setName("");
    setPrice("");
    setPath("");
    setDescription("");
    setAddItems(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-100 via-white to-orange-200 p-6">
      <div className="w-full max-w-lg bg-white/70 backdrop-blur-md shadow-xl rounded-2xl p-10 border border-orange-200">
        <h1 className="text-3xl animate-wave font-bold text-center text-orange-600 mb-8">
          🍴 Update Food Item
        </h1>

        <form className="flex flex-col gap-5">
          <label className="text-gray-700 animate-pulse-slow font-semibold">Food Name</label>
          <input
            type="text"
            placeholder="Enter food name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-3 rounded-lg border border-gray-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-200 outline-none transition"
          />
          {error && !name && (
            <span className="text-red-700">Please enter a valid food name</span>
          )}

          <label className="text-gray-700 font-semibold animate-pulse-slow">Price (₹)</label>
          <input
            type="text"
            placeholder="Enter food price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="p-3 rounded-lg border border-gray-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-200 outline-none transition"
          />
          {error && !price && (
            <span className="text-red-700">Please enter a valid price</span>
          )}

          <label className="text-gray-700 font-semibold animate-pulse-slow">Image Path</label>
          <input
            type="text"
            placeholder="Enter image path (e.g. /burger.png)"
            value={path}
            onChange={(e) => setPath(e.target.value)}
            className="p-3 rounded-lg border border-gray-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-200 outline-none transition"
          />
          {error && !path && (
            <span className="text-red-700">Please enter a valid image path</span>
          )}

          <label className="text-gray-700 font-semibold animate-pulse-slow">Description</label>
          <input
            type="text"
            placeholder="Enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="p-3 rounded-lg border border-gray-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-200 outline-none transition"
          />
          {error && !description && (
            <span className="text-red-700">Please enter a valid description</span>
          )}

          <button
            type="button"
            className="mt-4 w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg shadow-md transition-transform transform hover:-translate-y-1 hover:shadow-lg"
            onClick={handleEditFooditem}
          >
            Update Food Item
          </button>
        </form>
      </div>

      <style jsx>{`
        @keyframes wave {
          0% {
            color: #fb923c;
            text-shadow: 0 0 5px #fb923c;
          }
          50% {
            color: #ea580c;
            text-shadow: 0 0 15px #fb923c;
          }
          100% {
            color: #fb923c;
            text-shadow: 0 0 5px #fb923c;
          }
        }
        .animate-wave {
          animation: wave 1s ease-in-out infinite;
        }
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.1;
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 2s infinite;
        }
      `}</style>
    </div>
  );
}








// "use client"
// import React, { useState } from 'react'

// export default function UpdateFooditems({ setAddItems }) {

//   const [name, setName] = useState("");
//   const [price, setPrice] = useState("");
//   const [path, setPath] = useState("");
//   const [description, setDescription] = useState("");
//   const [error, setError] = useState(false);

//   const handleEditFooditem = () => {
//     if (!name || !price || !path || !description) {
//       setError(true);
//       return;
//     }

//     setError(false);

//     const payload = {
//       Name: name,
//       Price: price,
//       Image: path,
//       Description: description,
//     };


//     alert("Item added successfully!");
//     setName("");
//     setPrice("");
//     setPath("");
//     setDescription("");
//     setAddItems(false)


//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-100 via-white to-orange-200 p-6">
//       <div className="w-full max-w-lg bg-white/70 backdrop-blur-md shadow-xl rounded-2xl p-10 border border-orange-200">
//         <h1 className="text-3xl animate-wave font-bold text-center text-orange-600 mb-8">
//           🍴 Update Food Item
//         </h1>
//   <style jsx>{`@keyframes wave {
//   0% { color: #fb923c; text-shadow: 0 0 5px #fb923c; }
//   50% { color: #ea580c; text-shadow: 0 0 15px #fb923c; }
//   100% { color: #fb923c; text-shadow: 0 0 5px #fb923c; }
// }
// .animate-wave {
//   animation: wave 1s ease-in-out infinite;
// }
// }
// .animate-wave {
//   animation: wave 2s ease-in-out infinite;
// }
//   @layer utilities {
//   @keyframes pulse-slow {
//     0%, 100% { opacity: 1; }
//     50% { opacity: 0.1  ; }
//   }
//   .animate-pulse-slow {
//     animation: pulse-slow 2s infinite;
//   }
// }

// `}</style>
//         <form className="flex flex-col gap-5">
//           <label className="text-gray-700 animate-pulse-slow font-semibold">Food Name</label>
//           <input
//             type="text"
//             placeholder="Enter food name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className="p-3 rounded-lg border border-gray-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-200 outline-none transition"
//           />
//           {error && !name && (
//             <span className="text-red-700">Please enter a valid food name</span>
//           )}
//           <label className="text-gray-700 font-semibold animate-pulse-slow">Price (₹)</label>
//           <input
//             type="text"
//             placeholder="Enter food price"
//             value={price}
//             onChange={(e) => setPrice(e.target.value)}
//             className="p-3 rounded-lg border border-gray-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-200 outline-none transition"
//           />
//           {error && !price && (
//             <span className="text-red-700">Please enter a valid price</span>
//           )}
//           <label className="text-gray-700 font-semibold animate-pulse-slow">Image Path</label>
//           <input
//             type="text"
//             placeholder="Enter image path (e.g. /burger.png)"
//             value={path}
//             onChange={(e) => setPath(e.target.value)}
//             className="p-3 rounded-lg border border-gray-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-200 outline-none transition"
//           />
//           {error && !path && (
//             <span className="text-red-700">Please enter a valid image path</span>
//           )}
//           <label className="text-gray-700 font-semibold animate-pulse-slow">Description</label>
//           <input
//             type="text"
//             placeholder="Enter description"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             className="p-3 rounded-lg border border-gray-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-200 outline-none transition"
//           />
//           {error && !description && (
//             <span className="text-red-700">Please enter a valid description</span>
//           )}

//           <button
//             type="button"
//             className="mt-4 w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg shadow-md transition-transform transform hover:-translate-y-1 hover:shadow-lg"
//             onClick={handleEditFooditem}
//           >
//             Update Food Item
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }



