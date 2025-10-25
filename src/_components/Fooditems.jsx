import React, { useState } from 'react'

export default function Fooditems({ setAddItems }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [path, setPath] = useState("");
  const [city, setCity] = useState("");
  const [description, setDescription] = useState("");
  const [contact, setContact] = useState("");
  const [resname, setResname] = useState("");
  const [sprice, setSprice] = useState("");
  const [error, setError] = useState(false);
  const handleAddFooditem = () => {
    if (!name || !price || !path || !city || !description) {
      setError(true);
      return;
    }

    setError(false);
    const payload = {
      Resname: resname,
      Name: name,
      Price: price,
      Sprice: sprice,
      Image: path,
      City: city,
      Contact: contact,
      Description: description,
    };

    const existingData = JSON.parse(localStorage.getItem("food")) || [];
    const updatedData = [...existingData, payload];
    localStorage.setItem("food", JSON.stringify(updatedData));

    alert("Item added successfully!");
    setResname("");
    setName("");
    setPrice("");
    setSprice("");
    setPath("");
    setCity("");
    setContact("");
    setDescription("");
    setAddItems(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-100 via-white to-orange-200 p-4 sm:p-6 md:p-10">
      <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl bg-white/70 backdrop-blur-md shadow-xl rounded-2xl p-6 sm:p-8 md:p-10 border border-orange-200">
        <h1 className="text-2xl sm:text-3xl md:text-4xl animate-wave font-bold text-center text-orange-600 mb-6 sm:mb-8">
          🍴 Add Food Item
        </h1>

        <style jsx>{`
          @keyframes wave {
            0% { color: #fb923c; text-shadow: 0 0 5px #fb923c; }
            50% { color: #ea580c; text-shadow: 0 0 15px #fb923c; }
            100% { color: #fb923c; text-shadow: 0 0 5px #fb923c; }
          }
          .animate-wave {
            animation: wave 2s ease-in-out infinite;
          }
          @layer utilities {
            @keyframes pulse-slow {
              0%, 100% { opacity: 1; }
              50% { opacity: 0.1; }
            }
            .animate-pulse-slow {
              animation: pulse-slow 2s infinite;
            }
          }
        `}</style>

        <form className="flex flex-col gap-4 sm:gap-5">
          <label className="text-gray-700 animate-pulse-slow font-semibold">
            Restaurants Name 😋🍽️
          </label>
          <input
            type="text"
            placeholder="Enter Restaurant Name"
            value={resname}
            onChange={(e) => setResname(e.target.value)}
            className="p-2 sm:p-3 rounded-lg border border-gray-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-200 outline-none transition"
          />
          {error && !resname && (
            <span className="text-red-700 text-sm sm:text-base">Please enter a valid Restaurant Name</span>
          )}

          <label className="text-gray-700 animate-pulse-slow font-semibold">Food Name 😋🍽️</label>
          <input
            type="text"
            placeholder="Enter food name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-2 sm:p-3 rounded-lg border border-gray-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-200 outline-none transition"
          />
          {error && !name && (
            <span className="text-red-700 text-sm sm:text-base">Please enter a valid food name</span>
          )}

          <label className="text-gray-700 font-semibold animate-pulse-slow">Price 🏷️💰</label>
          <input
            type="number"
            placeholder="Enter food price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="p-2 sm:p-3 rounded-lg border border-gray-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-200 outline-none transition"
          />
          {error && !price && (
            <span className="text-red-700 text-sm sm:text-base">Please enter a valid price</span>
          )}

             <label className="text-gray-700 font-semibold animate-pulse-slow"> Sale Price 🏷️💰</label>
          <input
            type="number"
            placeholder="Enter food Sale Price"
            value={sprice}
            onChange={(e) => setPrice(e.target.value)}
            className="p-2 sm:p-3 rounded-lg border border-gray-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-200 outline-none transition"
          />
          {error && !price && (
            <span className="text-red-700 text-sm sm:text-base">Please enter a valid Sale Price</span>
          )}

          <label className="text-gray-700 font-semibold animate-pulse-slow">Image Path 🖼️</label>
          <input
            type="text"
            placeholder="Enter image path (e.g. /burger.png)"
            value={path}
            onChange={(e) => setPath(e.target.value)}
            className="p-2 sm:p-3 rounded-lg border border-gray-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-200 outline-none transition"
          />
          {error && !path && (
            <span className="text-red-700 text-sm sm:text-base">Please enter a valid image path</span>
          )}

          <label className="text-gray-700 font-semibold animate-pulse-slow">City 📍🗺️</label>
          <input
            type="text"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="p-2 sm:p-3 rounded-lg border border-gray-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-200 outline-none transition"
          />
          {error && !city && (
            <span className="text-red-700 text-sm sm:text-base">Please enter a valid city</span>
          )}

          <label className="text-gray-700 font-semibold animate-pulse-slow">Contact ☎️</label>
          <input
            type="text"
            placeholder="Contact Number"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            className="p-2 sm:p-3 rounded-lg border border-gray-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-200 outline-none transition"
          />
          {error && !contact && (
            <span className="text-red-700 text-sm sm:text-base">Please enter Contact Number</span>
          )}

          <label className="text-gray-700 font-semibold animate-pulse-slow">Description 📝</label>
          <input
            type="text"
            placeholder="Enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="p-2 sm:p-3 rounded-lg border border-gray-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-200 outline-none transition"
          />
          {error && !description && (
            <span className="text-red-700 text-sm sm:text-base">Please enter a valid description</span>
          )}

          <button
            type="button"
            className="mt-4 w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 sm:py-3 rounded-lg shadow-md transition-transform transform hover:-translate-y-1 hover:shadow-lg"
            onClick={handleAddFooditem}
          >
            Add Food Item
          </button>
        </form>
      </div>
    </div>
  );
}
