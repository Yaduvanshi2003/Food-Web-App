



"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function CastumerHeader(props) {
  const [cartNumber, setCartNumber] = useState(0);
  const [CartItem, setCartItem] = useState([]);
  const [details, setDetails] = useState(null);
  const router = useRouter();

  // Initialize cart from localStorage on mount
  useEffect(() => {
    const cartStorage = JSON.parse(localStorage.getItem("cart")) || [];
    setCartNumber(cartStorage.length);
    setCartItem(cartStorage);

    const data = localStorage.getItem("user");
    if (data) setDetails(JSON.parse(data));
  }, []);

  // Handle cart updates when props.cartData changes
  useEffect(() => {
    if (props.cartData) {
      console.log(props);
      if (cartNumber) {
        if (CartItem[0]?.Resname !== props.cartData.Resname) {
          localStorage.removeItem("cart");
          setCartNumber(1);
          setCartItem([props.cartData]);
          localStorage.setItem("cart", JSON.stringify([props.cartData]));
        } else {
          let LocalCartItem = [...CartItem];
          LocalCartItem.push(JSON.parse(JSON.stringify(props.cartData)));
          setCartItem(LocalCartItem);
          setCartNumber(cartNumber + 1);
          localStorage.setItem("cart", JSON.stringify(LocalCartItem));
        }
      } else {
        setCartNumber(1);
        setCartItem([props.cartData]);
        localStorage.setItem("cart", JSON.stringify([props.cartData]));
      }
    }
  }, [props.cartData]);

  const logout = () => {
    localStorage.removeItem("user");
    router.push("/restaurant");
  };

  return (
    <header className="w-full flex items-center justify-between px-4 md:px-8 py-3 bg-gradient-to-r from-orange-100 via-white to-orange-200 shadow-md sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center gap-3 flex-shrink-0">
        <Image
          src="/images1.png"
          alt="Logo"
          width={60}
          height={60}
          className="rounded-full w-12 h-12 md:w-16 md:h-16 object-cover"
        />
        <h1 className="text-xl md:text-2xl font-extrabold text-orange-600">
          Indian Food
        </h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1">
        <ul className="flex flex-wrap md:flex-nowrap items-center justify-center md:justify-end gap-4 md:gap-6 text-base md:text-lg font-medium text-gray-700">
          <li>
            <Link href="/" className="hover:text-orange-600 transition">
              Home
            </Link>
          </li>

          <li>
            <Link href="/" className="hover:text-orange-600 transition">
              🛒({cartNumber ? cartNumber : 0})
            </Link>
          </li>

          <li>
            <Link
              href="/"
              className="bg-orange-500 text-white px-3 md:px-4 py-1.5 md:py-2 rounded-lg hover:bg-orange-600 shadow-md transition text-sm md:text-base"
            >
              Add Restaurant
            </Link>
          </li>

          {details && details.email && details.password ? (
            <>
              <li>
                <Link href="/profile" className="hover:text-orange-600 transition">
                  Profile
                </Link>
              </li>
              <li>
                <button
                  onClick={logout}
                  className="bg-orange-500 text-white px-3 md:px-4 py-1.5 md:py-2 rounded-lg hover:bg-orange-600 shadow-md transition text-sm md:text-base"
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <li>
              <Link
                href="/login"
                className="bg-orange-500 text-white px-3 md:px-4 py-1.5 md:py-2 rounded-lg hover:bg-orange-600 shadow-md transition text-sm md:text-base"
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


// "use client";
// import React, { useEffect, useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { useRouter } from "next/navigation";

// export default function CastumerHeader(props) {

//    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];

//   const [CartItem, setCartItem] = useState(storedCart);
//   const [cartNumber, setcartNumber] = useState(storedCart.length);

//   useEffect(() => {
//     if (props.cartData) {
//       let updatedCart = [...CartItem, props.cartData]; 

//       setCartItem(updatedCart);
//       setcartNumber(updatedCart.length);


//       localStorage.setItem("cart", JSON.stringify(updatedCart));
//     }
//   }, [props.cartData]);

//   // const cartStorage = JSON.parse(localStorage.getItem('cart')) || [];

//   // const [cartNumber, setcartNumber] = useState(cartStorage.length)
//   // const [CartItem, setCartItem] = useState(cartStorage);

//   // useEffect(() => {

//   //   if (props.cartData) {
//   //     console.log(props);
//   //     if (cartNumber) {
//   //       if (CartItem[0].item.Resname != props.cartData.item.Resname) {
//   //         localStorage.removeItem('cart');
//   //         setcartNumber(1);
//   //         setCartItem([props.cartData])
//   //         localStorage.setItem('cart', JSON.stringify([props.cartData]))
//   //       } else {
//   //         let LocalCartItem = CartItem;

//   //         LocalCartItem.push(JSON.parse(JSON.stringify(props.cartData)))
//   //         setCartItem(LocalCartItem);
//   //         setcartNumber(cartNumber + 1);
//   //         localStorage.setItem('cart', JSON.stringify(LocalCartItem))
//   //       }



//   //     } else {
//   //       setcartNumber(1)
//   //       setCartItem([props.cartData])
//   //       localStorage.setItem('cart', JSON.stringify([props.cartData]))
//   //     }

//   //   }



//   // }, [props.cartData])



//   const [details, setDetails] = useState(null);
//   const router = useRouter();

//   useEffect(() => {
//     const data = localStorage.getItem("user");
//     if (data) setDetails(JSON.parse(data));
//   }, []);

//   const logout = () => {
//     localStorage.removeItem("user");
//     router.push("/restaurant");
//   };

//   return (
//     <header className="w-full flex items-center justify-between px-4 md:px-8 py-3 bg-gradient-to-r from-orange-100 via-white to-orange-200 shadow-md sticky top-0 z-50">

//       {/* Logo */}
//       <div className="flex items-center gap-3 flex-shrink-0">
//         <Image
//           src="/images1.png"
//           alt="Logo"
//           width={60}
//           height={60}
//           className="rounded-full w-12 h-12 md:w-16 md:h-16 object-cover"
//         />
//         <h1 className="text-xl md:text-2xl font-extrabold text-orange-600">
//           Indian Food
//         </h1>
//       </div>

//       {/* Navigation */}
//       <nav className="flex-1">
//         <ul className="flex flex-wrap md:flex-nowrap items-center justify-center md:justify-end gap-4 md:gap-6 text-base md:text-lg font-medium text-gray-700">
//           <li>
//             <Link href="/" className="hover:text-orange-600 transition">
//               Home
//             </Link>
//           </li>

//           <li>
//             <Link href="/" className="hover:text-orange-600 transition">
//               🛒({cartNumber ? cartNumber : 0})
//             </Link>
//           </li>

//           <li>
//             <Link
//               href="/"
//               className="bg-orange-500 text-white px-3 md:px-4 py-1.5 md:py-2 rounded-lg hover:bg-orange-600 shadow-md transition text-sm md:text-base"
//             >
//               Add Restaurant
//             </Link>
//           </li>

//           {details && details.email && details.password ? (
//             <>
//               <li>
//                 <Link href="/profile" className="hover:text-orange-600 transition">
//                   Profile
//                 </Link>
//               </li>
//               <li>
//                 <button
//                   onClick={logout}
//                   className="bg-orange-500 text-white px-3 md:px-4 py-1.5 md:py-2 rounded-lg hover:bg-orange-600 shadow-md transition text-sm md:text-base"
//                 >
//                   Logout
//                 </button>
//               </li>
//             </>
//           ) : (
//             <li>
//               <Link
//                 href="/login"
//                 className="bg-orange-500 text-white px-3 md:px-4 py-1.5 md:py-2 rounded-lg hover:bg-orange-600 shadow-md transition text-sm md:text-base"
//               >
//                 Login / SignUp
//               </Link>
//             </li>
//           )}
//         </ul>
//       </nav>
//     </header>
//   );
// }

