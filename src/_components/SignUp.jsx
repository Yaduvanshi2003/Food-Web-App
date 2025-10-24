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

      {/* Right Side Form Section */}
      <div className="w-full lg:w-1/2 flex justify-center items-center py-10 px-6">
        <div className="w-full max-w-lg bg-white/70 backdrop-blur-lg shadow-2xl rounded-3xl p-10 border border-orange-200">
          
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

      {/* Animations */}
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





// "use client";

// import React, { useState } from "react";
// import { useRouter } from "next/navigation";

// export default function SignUp({ setLogin }) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [c_Password, setC_Password] = useState("");
//   const [restaurant, setRestaurant] = useState("");
//   const [city, setCity] = useState("");
//   const [address, setAddress] = useState("");
//   const [contact, setContact] = useState("");
//   const [error, setError] = useState(false);
//   const [passwordError, setPasswordError] = useState(false);

//   const router = useRouter();


//   const clearForm = () => {
//     setEmail("");
//     setPassword("");
//     setC_Password("");
//     setRestaurant("");
//     setCity("");
//     setAddress("");
//     setContact("");
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();


//     if (password !== c_Password) {
//       alert("Passwords do not match!");
//       setPasswordError(true);
//       return;
//     } else {
//       setPasswordError(false);
//     }


//     if (!email || !password || !c_Password || !restaurant || !city || !address || !contact) {
//       setError(true);
//       return;
//     }

//     setError(false);

//     const payload = {
//       email,
//       password,
//       restaurant,
//       city,
//       address,
//       contact,
//     };


//     localStorage.setItem("user", JSON.stringify(payload));
//     alert("Sign-up successful!");


//     clearForm();
//     setLogin(true);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-100 via-white to-orange-200 p-6">
//       <div className="w-full max-w-lg bg-white/70 backdrop-blur-md shadow-xl rounded-2xl p-10 border border-orange-200">
//         <h1 className="text-3xl font-bold text-center text-orange-600 mb-8 animate-wave">
//           🍴 Restaurant Sign Up
//         </h1>
//         <style jsx>{`@keyframes wave {
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
//         <form onSubmit={handleSubmit} className="flex flex-col gap-5">
//           <label className=" font-semibold animate-pulse-slow text-xl">Please Enter Email</label>
//           <input
//             type="email"
//             placeholder="Enter Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="p-3 rounded-lg border border-gray-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-200 outline-none transition"
//           />
//           {error && !email && <span className="text-red-700">Please Enter valid Email</span>}



//           <label className=" font-semibold animate-pulse-slow text-xl">Please Enter Password</label>
//           <input
//             type="password"
//             placeholder="Enter Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="p-3 rounded-lg border border-gray-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-200 outline-none transition"
//           />
//           {passwordError && (
//             <span className="text-red-700">Password and Confirm password do not match</span>
//           )}


//           <label className=" font-semibold animate-pulse-slow text-xl">Confirm Password</label>
//           <input
//             type="password"
//             placeholder="Confirm Password"
//             value={c_Password}
//             onChange={(e) => setC_Password(e.target.value)}
//             className="p-3 rounded-lg border border-gray-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-200 outline-none transition"
//           />
//           {passwordError && (
//             <span className="text-red-700">Password and Confirm password do not match</span>
//           )}



//           <label className=" font-semibold animate-pulse-slow text-xl">Please Enter  Restaurant Name</label>
//           <input
//             type="text"
//             placeholder="Restaurant Name"
//             value={restaurant}
//             onChange={(e) => setRestaurant(e.target.value)}
//             className="p-3 rounded-lg border border-gray-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-200 outline-none transition"
//           />
//           {error && !restaurant && (
//             <span className="text-red-700">Please enter valid Restaurant name</span>
//           )}



//           <label className=" font-semibold animate-pulse-slow text-xl">Enter Your City</label>
//           <input
//             type="text"
//             placeholder="City"
//             value={city}
//             onChange={(e) => setCity(e.target.value)}
//             className="p-3 rounded-lg border border-gray-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-200 outline-none transition"
//           />
//           {error && !city && <span className="text-red-700">Please enter valid City name</span>}



//           <label className=" font-semibold animate-pulse-slow text-xl">Enter Your Address</label>
//           <input
//             type="text"
//             placeholder="Full Address"
//             value={address}
//             onChange={(e) => setAddress(e.target.value)}
//             className="p-3 rounded-lg border border-gray-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-200 outline-none transition"
//           />
//           {error && !address && <span className="text-red-700">Please enter valid Address</span>}



//           <label className=" font-semibold animate-pulse-slow text-xl">Enter Your Number</label>
//           <input
//             type="number"
//             placeholder="Contact Number"
//             value={contact}
//             onChange={(e) => setContact(e.target.value)}
//             className="p-3 rounded-lg border border-gray-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-200 outline-none transition animate-pulse-slow"
//           />
//           {error && !contact && <span className="text-red-700">Please enter valid Number</span>}


//           <button
//             type="submit"
//             className="mt-4 w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg shadow-md transition-transform transform hover:-translate-y-1 hover:shadow-lg "
//           >
//             Sign Up
//           </button>
//         </form>

//         <p className="text-center text-gray-600 mt-5">
//           Already have an account?{" "}
//           <span
//             onClick={() => setLogin(true)}
//             className="text-orange-600 hover:underline cursor-pointer font-medium"
//           >
//             Login here
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// }



