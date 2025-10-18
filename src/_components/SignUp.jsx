"use client";

// import React, { useState } from "react";
// import { useRouter } from "next/navigation";
// import Login from "./Login";
// export default function SignUp({setLogin }) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [c_Password, setC_Password] = useState("");
//   const [restaurant, setRestaurant] = useState("");
//   const [city, setCity] = useState("");
//   const [address, setAddress] = useState("");
//   const [contact, setContact] = useState("");
//   const [error,seterror]= useState(false);
//   const [passworderror,setPassworderror]=useState(false);

//   const router = useRouter();

//   const handleSubmit =async  (e) => {
//     e.preventDefault();

//     if (password !== c_Password) {
//       alert("Passwords do not match!");
//       setPassworderror(true)
//       return;
//     }else{
//       setPassworderror(false)
//     }
//     if ( !email ||!password ||!c_Password ||!restaurant ||!city ||!address||!contact) {
//       seterror(true)

//     }
//     else{
//      seterror(false)
//          const payload = {
//       email:email,
//       password:password,
//       c_Password:c_Password,
//       restaurant:restaurant,
//       city:city,
//       address:address,
//       contact:contact,
//     };
// console.log(payload);

//     localStorage.setItem("user", JSON.stringify(payload));
//     alert("Sign-up successful!");
//     router.push("/restaurant");
//     }


//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-100 via-white to-orange-200 p-6">
//       <div className="w-full max-w-lg bg-white/70 backdrop-blur-md shadow-xl rounded-2xl p-10 border border-orange-200">
//         <h1 className="text-3xl font-bold text-center text-orange-600 mb-8">
//           🍴 Restaurant Sign Up
//         </h1>

//         <form onSubmit={handleSubmit} className="flex flex-col gap-5">
//           <input
//             type="email"
//             placeholder="Enter Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="p-3 rounded-lg border border-gray-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-200 outline-none transition"
//           />
//           {
//             error && !email && <span className="text-red-700">Please enter vallid Email</span>
//           }
//           <input
//             type="password"
//             placeholder="Enter Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="p-3 rounded-lg border border-gray-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-200 outline-none transition"
//           />
//           {
//             passworderror && <span className="text-red-700">Password and Confirm password not match</span>
//           }
//           <input
//             type="password"
//             placeholder="Confirm Password"
//             value={c_Password}
//             onChange={(e) => setC_Password(e.target.value)}
//             className="p-3 rounded-lg border border-gray-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-200 outline-none transition"
//           />
//               {
//             passworderror && <span className="text-red-700">Password and Confirm password not match</span>
//               }
//           <input
//             type="text"
//             placeholder="Restaurant Name"
//             value={restaurant}
//             onChange={(e) => setRestaurant(e.target.value)}
//             className="p-3 rounded-lg border border-gray-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-200 outline-none transition"
//           />
//           {
//             error && !restaurant && <span className="text-red-700">Please enter vallid Restaurant name</span>
//           }
//           <input
//             type="text"
//             placeholder="City"
//             value={city}
//             onChange={(e) => setCity(e.target.value)}
//             className="p-3 rounded-lg border border-gray-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-200 outline-none transition"
//           />
//           {
//             error && !city && <span className="text-red-700">Please enter vallid City name</span>
//           }
//           <input
//             type="text"
//             placeholder="Full Address"
//             value={address}
//             onChange={(e) => setAddress(e.target.value)}
//             className="p-3 rounded-lg border border-gray-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-200 outline-none transition"
//           />
//           {
//             error && !address && <span className="text-red-700">Please enter vallid Address</span>
//           }
//           <input
//             type="number"
//             placeholder="Contact Number"
//             value={contact}
//             onChange={(e) => setContact(e.target.value)}
//             className="p-3 rounded-lg border border-gray-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-200 outline-none transition"
//           />
//           {
//             error && !contact && <span className="text-red-700">Please enter vallid Number</span>
//           }
//           <button
//             type="submit"
//             onClick={handleSubmit}
//             className="mt-4 w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg shadow-md transition-transform transform hover:-translate-y-1 hover:shadow-lg"
//           >
//             Sign Up
//           </button>
//         </form>

//         <p className="text-center text-gray-600 mt-5">
//           Already have an account?{" "}
//           <span
//              onClick={() => setLogin(true)}
//             className="text-orange-600 hover:underline cursor-pointer font-medium"
//           >
//             Login here
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// }
"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

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

    const payload = {
      email,
      password,
      restaurant,
      city,
      address,
      contact,
    };


    localStorage.setItem("user", JSON.stringify(payload));
    alert("Sign-up successful!");


    clearForm();
    setLogin(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-100 via-white to-orange-200 p-6">
      <div className="w-full max-w-lg bg-white/70 backdrop-blur-md shadow-xl rounded-2xl p-10 border border-orange-200">
        <h1 className="text-3xl font-bold text-center text-orange-600 mb-8 animate-wave">
          🍴 Restaurant Sign Up
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
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <label className=" font-semibold animate-pulse-slow text-xl">Please Enter Email</label>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 rounded-lg border border-gray-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-200 outline-none transition"
          />
          {error && !email && <span className="text-red-700">Please Enter valid Email</span>}



          <label className=" font-semibold animate-pulse-slow text-xl">Please Enter Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 rounded-lg border border-gray-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-200 outline-none transition"
          />
          {passwordError && (
            <span className="text-red-700">Password and Confirm password do not match</span>
          )}


          <label className=" font-semibold animate-pulse-slow text-xl">Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm Password"
            value={c_Password}
            onChange={(e) => setC_Password(e.target.value)}
            className="p-3 rounded-lg border border-gray-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-200 outline-none transition"
          />
          {passwordError && (
            <span className="text-red-700">Password and Confirm password do not match</span>
          )}



          <label className=" font-semibold animate-pulse-slow text-xl">Please Enter  Restaurant Name</label>
          <input
            type="text"
            placeholder="Restaurant Name"
            value={restaurant}
            onChange={(e) => setRestaurant(e.target.value)}
            className="p-3 rounded-lg border border-gray-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-200 outline-none transition"
          />
          {error && !restaurant && (
            <span className="text-red-700">Please enter valid Restaurant name</span>
          )}



          <label className=" font-semibold animate-pulse-slow text-xl">Enter Your City</label>
          <input
            type="text"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="p-3 rounded-lg border border-gray-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-200 outline-none transition"
          />
          {error && !city && <span className="text-red-700">Please enter valid City name</span>}



          <label className=" font-semibold animate-pulse-slow text-xl">Enter Your Address</label>
          <input
            type="text"
            placeholder="Full Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="p-3 rounded-lg border border-gray-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-200 outline-none transition"
          />
          {error && !address && <span className="text-red-700">Please enter valid Address</span>}



          <label className=" font-semibold animate-pulse-slow text-xl">Enter Your Number</label>
          <input
            type="number"
            placeholder="Contact Number"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            className="p-3 rounded-lg border border-gray-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-200 outline-none transition animate-pulse-slow"
          />
          {error && !contact && <span className="text-red-700">Please enter valid Number</span>}


          <button
            type="submit"
            className="mt-4 w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg shadow-md transition-transform transform hover:-translate-y-1 hover:shadow-lg "
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-gray-600 mt-5">
          Already have an account?{" "}
          <span
            onClick={() => setLogin(true)}
            className="text-orange-600 hover:underline cursor-pointer font-medium"
          >
            Login here
          </span>
        </p>
      </div>
    </div>
  );
}



