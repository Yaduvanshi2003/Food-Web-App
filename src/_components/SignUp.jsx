"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function SignUp({ setLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [c_Password, setC_Password] = useState("");
  const [restaurant, setRestaurant] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [error, setError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const router = useRouter();

  const clearForm = () => {
    setEmail("");
    setPassword("");
    setC_Password("");
    setRestaurant("");
    setCity("");
    setAddress("");
    setContact("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== c_Password) {
      alert("Passwords do not match!");
      setPasswordError(true);
      return;
    } else {
      setPasswordError(false);
    }

    if (!email || !password || !c_Password || !restaurant || !city || !address || !contact) {
      setError(true);
      return;
    }

    setError(false);
    const payload = { email, password, restaurant, city, address, contact };
    localStorage.setItem("user", JSON.stringify(payload));
    alert("Sign-up successful!");
    clearForm();
    setLogin(true);
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center bg-gradient-to-br from-orange-50 via-white to-orange-100">
      

      <div className="w-full lg:w-1/2 h-64 sm:h-80 md:h-96 lg:h-screen relative">
        <Image
          src="/restaurant-bg1.jpg"
          alt="Indian Food"
          fill
          priority
          className="object-cover brightness-90 rounded-b-3xl lg:rounded-none"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center px-6 sm:px-10 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-3 sm:mb-4 bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent animate-wave">
            Indian Food
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-100 max-w-md">
            Partner with India’s favorite restaurant brand. Grow your business and reach thousands of customers daily.
          </p>
        </div>
      </div>

    
      <div className="w-full lg:w-1/2 flex justify-center items-center py-10 px-6">
        <div className="w-full max-w-lg bg-white/70 backdrop-blur-lg shadow-2xl rounded-3xl p-8 sm:p-10 border border-orange-200">
          
          <h1 className="text-3xl md:text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 drop-shadow-md mb-8 animate-fadeIn">
            🍛 Partner Registration
          </h1>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <Input label="Email Address" type="email" value={email} onChange={setEmail} error={error && !email} errorMsg="Please enter valid Email" />
            <Input label="Password" type="password" value={password} onChange={setPassword} error={passwordError} errorMsg="Passwords do not match" />
            <Input label="Confirm Password" type="password" value={c_Password} onChange={setC_Password} error={passwordError} errorMsg="Passwords do not match" />
            <Input label="Restaurant Name" type="text" value={restaurant} onChange={setRestaurant} error={error && !restaurant} errorMsg="Please enter valid Restaurant name" />
            <Input label="City" type="text" value={city} onChange={setCity} error={error && !city} errorMsg="Please enter valid City" />
            <Input label="Address" type="text" value={address} onChange={setAddress} error={error && !address} errorMsg="Please enter valid Address" />
            <Input label="Contact Number" type="number" value={contact} onChange={setContact} error={error && !contact} errorMsg="Please enter valid Number" />

            <button
              type="submit"
              className="mt-6 w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-3 rounded-xl shadow-lg transition-all transform hover:-translate-y-1 hover:shadow-xl"
            >
              Sign Up
            </button>
          </form>

          <p className="text-center text-gray-700 mt-6">
            Already have an account?{" "}
            <span
              onClick={() => setLogin(true)}
              className="text-orange-600 hover:underline cursor-pointer font-semibold"
            >
              Login here
            </span>
          </p>
        </div>
      </div>

    
      <style jsx>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(-10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-in-out;
        }
      `}</style>
    </div>
  );
}

function Input({ label, type, value, onChange, error, errorMsg }) {
  return (
    <div className="flex flex-col">
      <label className="font-semibold text-gray-700 text-lg mb-1">{label}</label>
      <input
        type={type}
        placeholder={label}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="p-3 rounded-xl border border-gray-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-200 outline-none transition"
      />
      {error && <span className="text-red-600 text-sm mt-1">{errorMsg}</span>}
    </div>
  );
}




