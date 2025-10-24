"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Login({ setLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!email || !password) {
      setError(true);
      alert(!email ? "Please enter email." : "Please enter password.");
      return;
    }

    if (storedUser && storedUser.email === email && storedUser.password === password) {
      setError(false);
      alert("Login successful!");
      router.push("/restaurant/dashboard");
    } else {
      alert("Invalid email or password!");
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center bg-gradient-to-br from-orange-100 via-white to-orange-200">
      
      {/* Left image panel for larger screens */}
      <div className="hidden lg:flex lg:w-1/2 h-screen relative">
        <Image
          src="/restaurant-bg1.jpg"
          alt="Indian Food"
          fill
          className="object-cover brightness-90"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center px-12 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent animate-wave">
            Indian Food
          </h1>
          <p className="text-lg md:text-xl text-gray-100 max-w-md">
            Partner with India’s favorite restaurant brand. Grow your business and reach thousands of customers daily.
          </p>
        </div>
      </div>

      {/* Login form */}
      <div className="w-full lg:w-1/2 max-w-md sm:max-w-lg bg-white/80 backdrop-blur-md shadow-xl rounded-3xl p-6 sm:p-8 md:p-10 border border-orange-200 m-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-orange-600 mb-8 animate-wave">
          🍛 Partner Login
        </h1>

        <style jsx>{`
          @keyframes wave {
            0% { color: #fb923c; text-shadow: 0 0 5px #fb923c; }
            50% { color: #ea580c; text-shadow: 0 0 15px #fb923c; }
            100% { color: #fb923c; text-shadow: 0 0 5px #fb923c; }
          }
          .animate-wave { animation: wave 2s ease-in-out infinite; }

          @keyframes pulse-slow {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.3; }
          }
          .animate-pulse-slow { animation: pulse-slow 2s infinite; }
        `}</style>

        <form onSubmit={handleLogin} className="flex flex-col gap-5 sm:gap-6">
          <label className="font-semibold animate-pulse-slow text-lg sm:text-xl">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 rounded-xl border border-gray-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-200 outline-none transition w-full"
          />
          {error && !email && (
            <span className="text-red-600 text-sm">Please enter a valid email</span>
          )}

          <label className="font-semibold animate-pulse-slow text-lg sm:text-xl">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 rounded-xl border border-gray-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-200 outline-none transition w-full"
          />
          {error && !password && (
            <span className="text-red-600 text-sm">Please enter a valid password</span>
          )}

          <button
            type="submit"
            className="mt-4 w-full bg-gradient-to-r from-orange-400 to-yellow-400 hover:from-orange-500 hover:to-yellow-500 text-white font-semibold py-3 rounded-xl shadow-lg transition-transform transform hover:-translate-y-1 hover:shadow-2xl"
          >
            Login
          </button>
        </form>

        <p className="text-center text-gray-700 mt-6 text-sm sm:text-base">
          Don’t have an account?{" "}
          <span
            onClick={() => setLogin(false)}
            className="text-orange-600 hover:underline cursor-pointer font-medium"
          >
            Sign up here
          </span>
        </p>
      </div>
    </div>
  );
}
