

"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

export default function Hader() {
  const [details, setDetails] = useState(null);
  const router = useRouter();
  const pathName = usePathname();

  useEffect(() => {
    const data = localStorage.getItem("user");
    if (data) setDetails(JSON.parse(data));
  }, []);

  const logout = () => {
    localStorage.removeItem("user");
    router.push("/restaurant");
  };

  return (
    <header className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-6 px-4 sm:px-6 md:px-10 py-3 sm:py-4 bg-gradient-to-r from-orange-100 via-white to-orange-200 shadow-md sticky top-0 z-50 w-full">
      
      {/* Logo & Title */}
      <div className="flex items-center justify-center sm:justify-start gap-2 sm:gap-3 w-full sm:w-auto">
        <Image
          src="/images1.png"
          alt="Logo"
          width={55}
          height={55}
          className="rounded-full shadow-sm"
        />
        <h1 className="text-lg sm:text-xl md:text-2xl font-extrabold text-orange-600 tracking-wide text-center sm:text-left">
          Indian Food
        </h1>
      </div>

      {/* Navigation */}
      <nav className="w-full sm:w-auto">
        <ul className="flex flex-wrap justify-center sm:justify-end items-center gap-3 sm:gap-5 md:gap-8 text-sm sm:text-base md:text-lg font-medium text-gray-700">
          <li>
            <Link
              href="/"
              className="hover:text-orange-600 transition duration-200"
            >
              Home
            </Link>
          </li>

          {details && details.email && details.password ? (
            <>
              <li>
                <Link
                  href="/profile"
                  className="hover:text-orange-600 transition duration-200"
                >
                  Profile
                </Link>
              </li>
              <li>
                <button
                  onClick={logout}
                  className="bg-orange-500 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg hover:bg-orange-600 shadow-md transition-all duration-200 text-sm sm:text-base"
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <li>
              <Link
                href="/login"
                className="bg-orange-500 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg hover:bg-orange-600 shadow-md transition-all duration-200 text-sm sm:text-base"
              >
                Login / SignUp
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}


