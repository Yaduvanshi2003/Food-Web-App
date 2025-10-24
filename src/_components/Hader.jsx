"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

export default function Header() {
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
    <header className="flex flex-wrap md:flex-nowrap items-center justify-between gap-4 md:gap-0 px-4 md:px-8 py-3 md:py-4 bg-gradient-to-r from-orange-100 via-white to-orange-200 shadow-md sticky top-0 z-50">
      
      {/* Logo & Title */}
      <div className="flex items-center gap-3 w-full md:w-auto justify-center md:justify-start">
        <Image
          src="/images1.png"
          alt="Logo"
          width={55}
          height={55}
          className="rounded-full shadow-sm"
        />
        <h1 className="text-xl md:text-2xl font-extrabold text-orange-600 tracking-wide">
          Indian Food
        </h1>
      </div>

      {/* Navigation */}
      <nav className="w-full md:w-auto">
        <ul className="flex flex-wrap justify-center md:justify-end items-center gap-4 md:gap-8 text-base md:text-lg font-medium text-gray-700">
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
                  className="bg-orange-500 text-white px-3 md:px-4 py-1.5 md:py-2 rounded-lg hover:bg-orange-600 shadow-md transition-all duration-200 text-sm md:text-base"
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <li>
              <Link
                href="/login"
                className="bg-orange-500 text-white px-3 md:px-4 py-1.5 md:py-2 rounded-lg hover:bg-orange-600 shadow-md transition-all duration-200 text-sm md:text-base"
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
