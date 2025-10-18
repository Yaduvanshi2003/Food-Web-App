"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login({ setLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false)
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!email || !password) {
      setError(true)
      if (!email) {
        alert(" Please enter email.");
      } else {
        alert("Please enter password. ");
      }
      return;
    }

    if (storedUser) {
      if (storedUser.email === email && storedUser.password === password) {
        setError(false)
        alert("Login successful!");
        router.push("/restaurant/dashboard");
      }
    } else {
      alert("Invalid email or password!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-100 via-white to-orange-200 p-6">
      <div className="w-full max-w-md bg-white/70 backdrop-blur-md shadow-xl rounded-2xl p-10 border border-orange-200">
        <h1 className="text-3xl font-bold text-center text-orange-600 mb-8 animate-wave">
          🍴 Restaurant Login
        </h1>
        <style jsx>{`@keyframes wave {
  0% { color: #fb923c; text-shadow: 0 0 5px #fb923c; }
  50% { color: #ea580c; text-shadow: 0 0 15px #fb923c; }
  100% { color: #fb923c; text-shadow: 0 0 5px #fb923c; }
}
.animate-wave {
  animation: wave 1s ease-in-out infinite;
}
}
.animate-wave {
  animation: wave 2s ease-in-out infinite;
}
  @layer utilities {
  @keyframes pulse-slow {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.1  ; }
  }
  .animate-pulse-slow {
    animation: pulse-slow 2s infinite;
  }
}

`}</style>

        <form onSubmit={handleLogin} className="flex flex-col gap-6">
          <label className=" font-semibold animate-pulse-slow text-xl">Please Enter Email</label>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 rounded-lg border border-gray-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-200 outline-none transition"
          />
          {
            error && !email && <span className="text-red-700">Please enter valid email</span>
          }



          <label className="  font-semibold animate-pulse-slow text-xl">Please Enter Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 rounded-lg border border-gray-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-200 outline-none transition"
          />
          {
            error && !password && <span className="text-red-700">Please enter valid password</span>
          }
          <button
            type="submit"
            className="mt-4 w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg shadow-md transition-transform transform hover:-translate-y-1 hover:shadow-lg"
            onClick={handleLogin}
          >
            Login
          </button>
        </form>

        <p className="text-center text-gray-600 mt-6">
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
