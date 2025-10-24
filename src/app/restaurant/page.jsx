"use client";
import React, { useState } from 'react';
import Login from '../../_components/Login';
import SignUp from '../../_components/SignUp';
import Hader from '../../_components/Hader';
import Image from 'next/image';

export default function Restaurant() {
  const [login, setLogin] = useState(true);

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-gradient-to-br from-orange-50 via-white to-orange-100">
      {/* Optional left-side image or branding, only on large screens */}
      <div className="hidden lg:flex w-1/2 min-h-screen relative">
        <Image
          src="/restaurant-auth.jpg" // <-- use your actual image path, eg: /restaurant-bg1.jpg
          alt="Restaurant Welcome"
          fill
          className="object-cover brightness-90"
          priority
        />
        <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center px-12 text-center">
          <h1 className="text-5xl font-extrabold text-yellow-400 drop-shadow mb-2">
            Welcome Partner
          </h1>
          <p className="text-lg text-white/90 max-w-md">
            Join or sign in to manage your restaurant and grow with us!
          </p>
        </div>
      </div>

      {/* Right side: Login/Signup form area */}
      <div className="w-full lg:w-1/2 min-h-screen flex items-center justify-center p-6">
        <div className="max-w-md w-full mx-auto">
          {/* Insert header if needed */}
          <Hader />
          {login
            ? <Login setLogin={setLogin} />
            : <SignUp setLogin={setLogin} />}
        </div>
      </div>
    </div>
  );
}



// "use client"
// import React, { useState } from 'react'
// import Login from '../../_components/Login'
// import SignUp from '../../_components/SignUp'
// import Hader from '../../_components/Hader'
// export default function Restaurant() {
//     const [login, setLogin] = useState(true)
//     return (
//         <>
           
//             <div>
//                 <Hader/>
//             {
//                 login ? <Login setLogin={setLogin} /> : <SignUp setLogin={setLogin} />
//             }
            
//             </div>
//         </>
//     )
// }
