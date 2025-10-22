// "use client";



// import React, { useEffect, useState } from "react";
// import Image from "next/image";

// export default function FooditemsList() {
//     const [loading, setLoading] = useState(false);
//     const [newdata, setNewData] = useState([]);
//     const [editingIndex, setEditingIndex] = useState(null);
//     const [editedItem, setEditedItem] = useState({});

//     const defaultItems = [
//         { S_No: "1", Name: "Burger", Price: "199", Image: "/burger.png", Description: "Delicious cheeseburger with fries 🍔" },
//         { S_No: "2", Name: "Briyani", Price: "349", Image: "/briyani.png", Description: "Aromatic biryani rice with spices and herbs 🍗" },
//         { S_No: "3", Name: "Pizza", Price: "399", Image: "/pizza.jpg", Description: "Cheesy pizza with fresh toppings and crispy crust 🍕" },
//         { S_No: "4", Name: "Poori", Price: "299", Image: "/poori.jpg", Description: "Crispy golden poori served with potato curry 🫓" },
//         { S_No: "5", Name: "Cake", Price: "599", Image: "/cake.jpg", Description: "Delicious creamy cake with chocolate frosting 🍰" },
//     ];

//     useEffect(() => {
//         setLoading(true);
//         try {
//             const storedData = JSON.parse(localStorage.getItem("food")) || [];
//             setNewData([...defaultItems, ...storedData]);
//         } catch (error) {
//             console.error("Error reading localStorage:", error);
//             setNewData(defaultItems);
//         }
//         setLoading(false);

//     }, []);

//     const handleEdit = (index) => {
//         setEditingIndex(index);
//         setEditedItem({ ...newdata[index] });
//     };



//     const handleDelete = (index) => {
//         const updatedData = newdata.filter((_, i) => i !== index);
//         setNewData(updatedData);
//         localStorage.setItem("food", JSON.stringify(updatedData.filter((item) => !defaultItems.includes(item))));
//     };

//     const handleSave = (index) => {
//         const updatedData = [...newdata];
//         updatedData[index] = editedItem;
//         setNewData(updatedData);
//         localStorage.setItem("food", JSON.stringify(updatedData.filter((item) => !defaultItems.includes(item))));
//         setEditingIndex(null);
//     };
//     const handleChange = (e) => {
//         setEditedItem({ ...editedItem, [e.target.name]: e.target.value });
//     };




//     if (loading) {
//         return <div className="text-center mt-20 text-orange-600 text-xl">Loading...</div>;
//     }

//     return (
//         <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-orange-100 via-white to-orange-200 p-6">
//             <h1 className="text-3xl font-bold animate-wave text-orange-600 mb-6">🍕 Food Items List</h1>
//  <style jsx>{`@keyframes wave {
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
//             <div className="overflow-x-auto shadow-lg rounded-2xl border border-orange-300 bg-white/80 backdrop-blur-sm w-full max-w-5xl">
//                 <table className="min-w-full text-sm text-left text-gray-600">
//                     <thead className="bg-orange-500 text-white text-base">
//                         <tr>
//                             <th className="px-6 py-4">S.No</th>
//                             <th className="px-6 py-4">Name</th>
//                             <th className="px-6 py-4">Price</th>
//                             <th className="px-6 py-4">Image</th>
//                             <th className="px-6 py-4">Description</th>
//                             <th className="px-6 py-4">Operations</th>
//                         </tr>
//                     </thead>

//                     {/* <tbody>
//                         {newdata.map((item, index) => (
//                             <tr key={index} className="border-b hover:bg-orange-50 transition">
//                                 <td className="px-6 py-4">{index + 1}</td>

//                                 <td className="px-6 py-4 font-semibold text-gray-800">{item.Name}</td>
//                                 <td className="px-6 py-4">₹{item.Price}</td>
//                                 <td className="px-6 py-4">
//                                     {item.Image ? (
//                                         <Image
//                                             src={item.Image && item.Image.startsWith('/') ? item.Image : '/burger.png'}
//                                             width={40}
//                                             height={40}
//                                             alt={item.Name || "Food"}
//                                             className="w-14 h-14 rounded-lg object-cover shadow-sm"
//                                         />
//                                     ) : (
//                                         <div className="w-14 h-14 flex items-center justify-center bg-gray-200 text-gray-400 rounded-lg">
//                                             No Image
//                                         </div>
//                                     )}
//                                 </td>
//                                 <td className="px-6 py-4">{item.Description}</td>
//                                 <td className="px-6 py-4 flex gap-3">
//                                     <button
//                                         onClick={() => handleEdit(index)}
//                                         className="bg-green-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-green-600 transition">
//                                         Edit
//                                     </button>
//                                     <button
//                                         onClick={() => handleDelete(index)}
//                                         className="bg-red-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-red-600 transition">
//                                         Delete
//                                     </button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody> */}
//                     <tbody>
//                         {newdata.map((item, index) => (
//                             <tr key={index} className="border-b hover:bg-orange-50 transition">
//                                 <td className="px-6 py-4">{index + 1}</td>

//                                 {/* ✅ Editable Name */}
//                                 <td className="px-6 py-4 font-semibold text-gray-800">
//                                     {editingIndex === index ? (
//                                         <input
//                                             type="text"
//                                             name="Name"
//                                             value={editedItem.Name}
//                                             onChange={handleChange}
//                                             className="border border-gray-300 px-2 py-1 rounded-md w-full"
//                                         />
//                                     ) : (
//                                         item.Name
//                                     )}
//                                 </td>

//                                 {/* ✅ Editable Price */}
//                                 <td className="px-6 py-4">
//                                     {editingIndex === index ? (
//                                         <input
//                                             type="number"
//                                             name="Price"
//                                             value={editedItem.Price}
//                                             onChange={handleChange}
//                                             className="border border-gray-300 px-2 py-1 rounded-md w-full"
//                                         />
//                                     ) : (
//                                         `₹${item.Price}`
//                                     )}
//                                 </td>

//                                 {/* ✅ Image */}
//                                 <td className="px-6 py-4">
//                                     {item.Image ? (
//                                         <Image
//                                             src={item.Image.startsWith("/") ? item.Image : "/burger.png"}
//                                             width={40}
//                                             height={40}
//                                             alt={item.Name || "Food"}
//                                             className="w-14 h-14 rounded-lg object-cover shadow-sm"
//                                         />
//                                     ) : (
//                                         <div className="w-14 h-14 flex items-center justify-center bg-gray-200 text-gray-400 rounded-lg">
//                                             No Image
//                                         </div>
//                                     )}
//                                 </td>

//                                 {/* ✅ Editable Description */}
//                                 <td className="px-6 py-4">
//                                     {editingIndex === index ? (
//                                         <input
//                                             type="text"
//                                             name="Description"
//                                             value={editedItem.Description}
//                                             onChange={handleChange}
//                                             className="border border-gray-300 px-2 py-1 rounded-md w-full"
//                                         />
//                                     ) : (
//                                         item.Description
//                                     )}
//                                 </td>

//                                 {/* ✅ Buttons */}
//                                 <td className="px-6 py-4 flex gap-3">
//                                     {editingIndex === index ? (
//                                         <button
//                                             onClick={() => handleSave(index)}
//                                             className="bg-blue-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-blue-600 transition"
//                                         >
//                                             Save
//                                         </button>
//                                     ) : (
//                                         <button
//                                             onClick={() => handleEdit(index)}
//                                             className="bg-green-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-green-600 transition"
//                                         >
//                                             Edit
//                                         </button>
//                                     )}
//                                     <button
//                                         onClick={() => handleDelete(index)}
//                                         className="bg-red-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-red-600 transition"
//                                     >
//                                         Delete
//                                     </button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// }
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function FooditemsList() {
  const [loading, setLoading] = useState(false);
  const [newdata, setNewData] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedItem, setEditedItem] = useState({});

  const defaultItems = [
    { S_No: "1", Resname: "KFC", Name: "Burger", Price: "199", Image: "/burger.png", Contact: "9998775265", City: "Gurugram", Description: "Delicious cheeseburger with fries 🍔" },
    { S_No: "2", Resname: "Biryani By kilo", Name: "Briyani", Price: "349", Image: "/briyani.png", Contact: "9998775265", City: "Delhi", Description: "Aromatic biryani rice with spices and herbs 🍗" },
    { S_No: "3", Resname: "Domino's", Name: "Pizza", Price: "399", Image: "/pizza.jpg", Contact: "9998775265", City: "Faridabad", Description: "Cheesy pizza with fresh toppings and crispy crust 🍕" },
    { S_No: "4", Resname: "Punjab Grill", Name: "Poori", Price: "299", Image: "/poori.jpg", Contact: "9998775265", City: "Gurugram", Description: "Crispy golden poori served with potato curry 🫓" },
    { S_No: "5", Resname: "Bikanervala", Name: "Cake", Price: "599", Image: "/cake.jpg", Contact: "9998775265", City: "Faridabad", Description: "Delicious creamy cake with chocolate frosting 🍰" },
    { S_No: "6", Resname: "Haldiram's", Name: "Samosa", Price: "599", Image: "/somasa.jpg", Contact: "9998775265", City: "Gurugram", Description: "Crispy golden triangles filled with spicy potatoes 🥔" },
    { S_No: "7", Resname: "Barbeque Nation", Name: "Noodle", Price: "199", Image: "/chomin.jpg", Contact: "9998775265", City: "Delhi", Description: "Soft and tangy noodles tossed with fresh veggies 🍜" },
    { S_No: "8", Resname: "Giani's Ice Cream", Name: "Ice cream", Price: "599", Image: "/ice-cream.jpg", Contact: "9998775265", City: "Faridabad", Description: "Chilled scoops of creamy sweetness 🍫 " },
    { S_No: "9", Resname: "Burger King", Name: "Raj kachori", Price: "599", Image: "/raj kachori.jpg", Contact: "8933587877", City: "Gurugram", Description: "Crispy shell filled with tangy curd and chutneys 🥗" },
    { S_No: "10", Resname: "The Garden of Eat'n ", Name: "Manchurian", Price: "599", Image: "/manchurian.jpg", Contact: "9865745421", City: " Delhi", Description: "Crispy veggie balls in flavorful Indo- Chinese sauce 🍲" },
  ];


  useEffect(() => {
    setLoading(true);
    try {
      const storedData = JSON.parse(localStorage.getItem("food"));
      if (storedData && storedData.length > 0) {
        setNewData(storedData);
      } else {
        localStorage.setItem("food", JSON.stringify(defaultItems));
        setNewData(defaultItems);
      }
    } catch (error) {
      console.error("Error reading localStorage:", error);
      setNewData(defaultItems);
    }
    setLoading(false);
  }, []);
  console.log("Good", newdata);

  const handleEdit = (index) => {
    setEditingIndex(index);
    setEditedItem({ ...newdata[index] });
  };

  const handleDelete = (index) => {
    const updatedData = newdata.filter((_, i) => i !== index);
    setNewData(updatedData);
    localStorage.setItem("food", JSON.stringify(updatedData));
  };

  const handleSave = (index) => {
    const updatedData = [...newdata];
    updatedData[index] = editedItem;
    setNewData(updatedData);
    localStorage.setItem("food", JSON.stringify(updatedData));
    setEditingIndex(null);
  };

  const handleChange = (e) => {
    setEditedItem({ ...editedItem, [e.target.name]: e.target.value });
  };

  if (loading) {
    return <div className="text-center mt-20 text-orange-600 text-xl">Loading...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-orange-100 via-white to-orange-200 p-6">
      <h1 className="text-3xl font-bold animate-wave text-orange-600 mb-6">🍕 Food Items List</h1>

      <style jsx>{`
        @keyframes wave {
          0% { color: #fb923c; text-shadow: 0 0 5px #fb923c; }
          50% { color: #ea580c; text-shadow: 0 0 15px #fb923c; }
          100% { color: #fb923c; text-shadow: 0 0 5px #fb923c; }
        }
        .animate-wave {
          animation: wave 1.5s ease-in-out infinite;
        }
      `}</style>

      <div className="overflow-x-auto shadow-lg rounded-2xl border border-orange-300 bg-white/80 backdrop-blur-sm w-full max-w-6xl">
        <table className="min-w-full text-sm text-left text-gray-600">
          <thead className="bg-orange-500 text-white text-base">
            <tr>
              <th className="px-6 py-4">S.No</th>
              <th className="px-6 py-4">Restaurants Name</th>
              <th className="px-6 py-4">Name</th>
              <th className="px-6 py-4">Price</th>
              <th className="px-6 py-4">Image</th>
              <th className="px-6 py-4">Location</th>
              <th className="px-6 py-4">Contact no</th>
              <th className="px-6 py-4">Description</th>
              <th className="px-6 py-4">Operations</th>
            </tr>
          </thead>

          <tbody>
            {newdata.map((item, index) => (
              <tr key={index} className="border-b hover:bg-orange-50 transition">
                <td className="px-6 py-4">{index + 1}</td>


                <td className="px-6 py-4 font-semibold text-gray-800">
                  {editingIndex === index ? (
                    <input
                      type="text"   
                      name="Resname"  // ✅ Correct name
                      value={editedItem.Resname}
                      onChange={handleChange}
                      className="border border-gray-300 px-2 py-1 rounded-md w-full"
                    />
                  ) : (
                    item.Resname
                  )}
                </td>


                <td className="px-6 py-4 font-semibold text-gray-800">
                  {editingIndex === index ? (
                    <input
                      type="text"
                      name="Name"
                      value={editedItem.Name}
                      onChange={handleChange}
                      className="border border-gray-300 px-2 py-1 rounded-md w-full"
                    />
                  ) : (
                    item.Name
                  )}
                </td>



                <td className="px-6 py-4">
                  {editingIndex === index ? (
                    <input
                      type="number"
                      name="Price"
                      value={editedItem.Price}
                      onChange={handleChange}
                      className="border border-gray-300 px-2 py-1 rounded-md w-full"
                    />
                  ) : (
                    `₹${item.Price}`
                  )}
                </td>

                <td className="px-6 py-4">
                  {item.Image ? (
                    <Image
                      src={item.Image.startsWith("/") ? item.Image : "/burger.png"}
                      width={40}
                      height={40}
                      alt={item.Name || "Food"}
                      className="w-14 h-14 rounded-lg object-cover shadow-sm"
                    />
                  ) : (
                    <div className="w-14 h-14 flex items-center justify-center bg-gray-200 text-gray-400 rounded-lg">
                      No Image
                    </div>
                  )}
                </td>
                <td className="px-6 py-4">
                  {editingIndex === index ? (
                    <input
                      type="text"
                      name="City"
                      value={editedItem.City}
                      onChange={handleChange}
                      className="border border-gray-300 px-2 py-1 rounded-md w-full"
                    />
                  ) : (
                    item.City
                  )}
                </td>
                <td className="px-6 py-4">
                  {editingIndex === index ? (
                    <input
                      type="text"
                      name="Contact"
                      value={editedItem.Contact}
                      onChange={handleChange}
                      className="border border-gray-300 px-2 py-1 rounded-md w-full"
                    />
                  ) : (
                    item.Contact
                  )}
                </td>
                <td className="px-6 py-4">
                  {editingIndex === index ? (
                    <input
                      type="text"
                      name="Description"
                      value={editedItem.Description}
                      onChange={handleChange}
                      className="border border-gray-300 px-2 py-1 rounded-md w-full"
                    />
                  ) : (
                    item.Description
                  )}
                </td>


                <td className="px-6 py-4 flex gap-3">
                  {editingIndex === index ? (
                    <button
                      onClick={() => handleSave(index)}
                      className="bg-blue-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-blue-600 transition"
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      onClick={() => handleEdit(index)}
                      className="bg-green-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-green-600 transition"
                    >
                      Edit
                    </button>
                  )}
                  <button
                    onClick={() => handleDelete(index)}
                    className="bg-red-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
