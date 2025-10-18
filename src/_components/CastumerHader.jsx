

"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

export default function CastumerHeader() {
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
        <header className="flex items-center justify-between px-8 py-4 bg-gradient-to-r from-orange-100 via-white to-orange-200 shadow-md sticky top-0 z-50">

            <div className="flex items-center gap-3">
                <Image
                    src="/images1.png"
                    alt="Logo"
                    width={60}
                    height={60}
                    className="rounded-full shadow-sm"
                />
                <h1 className="text-2xl font-extrabold text-orange-600 tracking-wide">
                    Indian Food
                </h1>
            </div>

            <nav>
                <ul className="flex gap-8 text-lg font-medium text-gray-700">

                        <li>
                        <Link
                            href="/"
                            className="hover:text-orange-600 transition duration-200 text-2xl"
                        >
                            Home
                        </Link>
                    </li>

                    <li>
                        <Link
                            href="/"
                            className="hover:text-orange-600 transition duration-200 text-2xl"
                        >
                            🛒(1)
                        </Link>
                    </li>
                
                      <li>
                        <Link
                            href="/"
                            className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 shadow-md transition-all duration-200"
                        >
                            Add Restaurant
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
                                    className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 shadow-md transition-all duration-200"
                                >
                                    Logout
                                </button>
                            </li>
                        </>
                    ) : (
                        <li>
                            <Link
                                href="/login"
                                className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 shadow-md transition-all duration-200"
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
