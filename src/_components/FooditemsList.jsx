"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function FooditemsList() {
  const [loading, setLoading] = useState(false);
  const [newdata, setNewData] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedItem, setEditedItem] = useState({});

  const defaultItems = [
    { S_No: "1", Resname: "KFC", Name: "Burger", Price: "299",Sprice:"259", Image: "/burger.png", Contact: "9998775265", City: "Gurugram", Description: "Delicious cheeseburger with fries 🍔" },
    { S_No: "2", Resname: "KFC", Name: "Manchurian", Price: "299" ,Sprice:"209", Image: "/pizza.jpg", Contact: "9865745421", City: "Delhi", Description: "Crispy veggie balls in flavorful Indo-Chinese sauce 🍲" },
    { S_No: "3", Resname: "KFC", Name: "Raj kachori", Price: "999",Sprice:"209", Image: "/raj kachori.jpg", Contact: "9865745421", City: "Delhi", Description: "Crispy veggie balls in flavorful Indo-Chinese sauce 🍲" },
    { S_No: "4", Resname: "KFC", Name: "Ice cream", Price: "799",Sprice:"209", Image: "/briyani.png", Contact: "9865745421", City: "Delhi", Description: "Crispy veggie balls in flavorful Indo-Chinese sauce 🍲" },
    { S_No: "5", Resname: "KFC", Name: "Noodle", Price: "499",Sprice:"209", Image: "/manchurian.jpg", Contact: "9865745421", City: "Delhi", Description: "Crispy veggie balls in flavorful Indo-Chinese sauce 🍲" },


    { S_No: "6", Resname: "Biryani By Kilo", Name: "Biryani", Price: "349",Sprice:"299", Image: "/briyani.png", Contact: "9998775265", City: "Delhi", Description: "Aromatic biryani rice with spices and herbs 🍗" },
    { S_No: "7", Resname: "Biryani By Kilo", Name: "Manchurian", Price: "299" ,Sprice:"209", Image: "/burger.png", Contact: "9865745421", City: "Delhi", Description: "Crispy veggie balls in flavorful Indo-Chinese sauce 🍲" },
    { S_No: "8", Resname: "Biryani By Kilo", Name: "Raj kachori", Price: "999",Sprice:"209", Image: "/raj kachori.jpg", Contact: "9865745421", City: "Delhi", Description: "Crispy veggie balls in flavorful Indo-Chinese sauce 🍲" },
    { S_No: "9", Resname: "Biryani By Kilo", Name: "Ice cream", Price: "799",Sprice:"209", Image: "/manchurian.jpg", Contact: "9865745421", City: "Delhi", Description: "Crispy veggie balls in flavorful Indo-Chinese sauce 🍲" },
    { S_No: "10", Resname: "Biryani By Kilo", Name: "Noodle", Price: "499",Sprice:"209", Image: "/manchurian.jpg", Contact: "9865745421", City: "Delhi", Description: "Crispy veggie balls in flavorful Indo-Chinese sauce 🍲" },
    
   
    { S_No: "11", Resname: "Domino's", Name: "Pizza", Price: "399",Sprice:"299", Image: "/pizza.jpg", Contact: "9998775265", City: "Faridabad", Description: "Cheesy pizza with fresh toppings and crispy crust 🍕" },
    { S_No: "12", Resname: "Domino's", Name: "Manchurian", Price: "299" ,Sprice:"209", Image: "/burger.png", Contact: "9865745421", City: "Delhi", Description: "Crispy veggie balls in flavorful Indo-Chinese sauce 🍲" },
    { S_No: "13", Resname: "Domino's", Name: "Raj kachori", Price: "999",Sprice:"209", Image: "/raj kachori.jpg", Contact: "9865745421", City: "Delhi", Description: "Crispy veggie balls in flavorful Indo-Chinese sauce 🍲" },
    { S_No: "14", Resname: "Domino's", Name: "Ice cream", Price: "799",Sprice:"209", Image: "/briyani.png", Contact: "9865745421", City: "Delhi", Description: "Crispy veggie balls in flavorful Indo-Chinese sauce 🍲" },
    { S_No: "15", Resname: "Domino's", Name: "Noodle", Price: "499",Sprice:"209", Image: "/manchurian.jpg", Contact: "9865745421", City: "Delhi", Description: "Crispy veggie balls in flavorful Indo-Chinese sauce 🍲" },

   
    { S_No: "16", Resname: "Punjab Grill", Name: "Poori", Price: "299",Sprice:"279", Image: "/poori.jpg", Contact: "9998775265", City: "Gurugram", Description: "Crispy golden poori served with potato curry 🫓" },
    { S_No: "17", Resname: "Punjab Grill", Name: "Manchurian", Price: "299" ,Sprice:"209", Image: "/burger.png", Contact: "9865745421", City: "Delhi", Description: "Crispy veggie balls in flavorful Indo-Chinese sauce 🍲" },
    { S_No: "18", Resname: "Punjab Grill", Name: "Raj kachori", Price: "999",Sprice:"209", Image: "/raj kachori.jpg", Contact: "9865745421", City: "Delhi", Description: "Crispy veggie balls in flavorful Indo-Chinese sauce 🍲" },
    { S_No: "19", Resname: "Punjab Grill", Name: "Ice cream", Price: "799",Sprice:"209", Image: "/briyani.png", Contact: "9865745421", City: "Delhi", Description: "Crispy veggie balls in flavorful Indo-Chinese sauce 🍲" },
    { S_No: "20", Resname: "Punjab Grill", Name: "Noodle", Price: "499",Sprice:"209", Image: "/manchurian.jpg", Contact: "9865745421", City: "Delhi", Description: "Crispy veggie balls in flavorful Indo-Chinese sauce 🍲" },


    { S_No: "21", Resname: "Bikanervala", Name: "Cake", Price: "599",Sprice:"459", Image: "/cake.jpg", Contact: "9998775265", City: "Faridabad", Description: "Delicious creamy cake with chocolate frosting 🍰" },
    { S_No: "22", Resname: "Bikanervala", Name: "Manchurian", Price: "299" ,Sprice:"209", Image: "/burger.png", Contact: "9865745421", City: "Delhi", Description: "Crispy veggie balls in flavorful Indo-Chinese sauce 🍲" },
    { S_No: "33", Resname: "Bikanervala", Name: "Raj kachori", Price: "999",Sprice:"209", Image: "/raj kachori.jpg", Contact: "9865745421", City: "Delhi", Description: "Crispy veggie balls in flavorful Indo-Chinese sauce 🍲" },
    { S_No: "24", Resname: "Bikanervala", Name: "Ice cream", Price: "799",Sprice:"209", Image: "/briyani.png", Contact: "9865745421", City: "Delhi", Description: "Crispy veggie balls in flavorful Indo-Chinese sauce 🍲" },
    { S_No: "25", Resname: "Bikanervala", Name: "Noodle", Price: "499",Sprice:"209", Image: "/manchurian.jpg", Contact: "9865745421", City: "Delhi", Description: "Crispy veggie balls in flavorful Indo-Chinese sauce 🍲" },

   
    { S_No: "26", Resname: "Haldiram's", Name: "Samosa", Price: "599",Sprice:"199", Image: "/somasa.jpg", Contact: "9998775265", City: "Gurugram", Description: "Crispy golden triangles filled with spicy potatoes 🥔" },
    { S_No: "27", Resname: "Haldiram's", Name: "Manchurian", Price: "299" ,Sprice:"209", Image: "/burger.png", Contact: "9865745421", City: "Delhi", Description: "Crispy veggie balls in flavorful Indo-Chinese sauce 🍲" },
    { S_No: "28", Resname: "Haldiram's", Name: "Raj kachori", Price: "999",Sprice:"209", Image: "/raj kachori.jpg", Contact: "9865745421", City: "Delhi", Description: "Crispy veggie balls in flavorful Indo-Chinese sauce 🍲" },
    { S_No: "29", Resname: "Haldiram's", Name: "Ice cream", Price: "799",Sprice:"209", Image: "/briyani.png", Contact: "9865745421", City: "Delhi", Description: "Crispy veggie balls in flavorful Indo-Chinese sauce 🍲" },
    { S_No: "30", Resname: "Haldiram's", Name: "Noodle", Price: "499",Sprice:"209", Image: "/manchurian.jpg", Contact: "9865745421", City: "Delhi", Description: "Crispy veggie balls in flavorful Indo-Chinese sauce 🍲" },
   
    
    { S_No: "31", Resname: "Barbeque Nation", Name: "Noodle", Price: "199",Sprice:"1499", Image: "/chomin.jpg", Contact: "9998775265", City: "Delhi", Description: "Soft and tangy noodles tossed with fresh veggies 🍜" },
    { S_No: "32", Resname: "Barbeque Nation", Name: "Manchurian", Price: "299" ,Sprice:"209", Image: "/burger.png", Contact: "9865745421", City: "Delhi", Description: "Crispy veggie balls in flavorful Indo-Chinese sauce 🍲" },
    { S_No: "33", Resname: "Barbeque Nation", Name: "Raj kachori", Price: "999",Sprice:"209", Image: "/raj kachori.jpg", Contact: "9865745421", City: "Delhi", Description: "Crispy veggie balls in flavorful Indo-Chinese sauce 🍲" },
    { S_No: "34", Resname: "Barbeque Nation", Name: "Ice cream", Price: "799",Sprice:"209", Image: "/briyani.png", Contact: "9865745421", City: "Delhi", Description: "Crispy veggie balls in flavorful Indo-Chinese sauce 🍲" },
    { S_No: "35", Resname: "Barbeque Nation", Name: "Noodle", Price: "499",Sprice:"209", Image: "/manchurian.jpg", Contact: "9865745421", City: "Delhi", Description: "Crispy veggie balls in flavorful Indo-Chinese sauce 🍲" },

   
    { S_No: "36", Resname: "Giani's Ice Cream", Name: "Ice cream", Price: "599",Sprice:"109", Image: "/ice-cream.jpg", Contact: "9998775265", City: "Faridabad", Description: "Chilled scoops of creamy sweetness 🍫" },
    { S_No: "37", Resname: "Giani's Ice Cream", Name: "Manchurian", Price: "299" ,Sprice:"209", Image: "/burger.png", Contact: "9865745421", City: "Delhi", Description: "Crispy veggie balls in flavorful Indo-Chinese sauce 🍲" },
    { S_No: "38", Resname: "Giani's Ice Cream", Name: "Raj kachori", Price: "999",Sprice:"209", Image: "/raj kachori.jpg", Contact: "9865745421", City: "Delhi", Description: "Crispy veggie balls in flavorful Indo-Chinese sauce 🍲" },
    { S_No: "39", Resname: "Giani's Ice Cream", Name: "Ice cream", Price: "799",Sprice:"209", Image: "/briyani.png", Contact: "9865745421", City: "Delhi", Description: "Crispy veggie balls in flavorful Indo-Chinese sauce 🍲" },
    { S_No: "40", Resname: "Giani's Ice Cream", Name: "Noodle", Price: "499",Sprice:"209", Image: "/manchurian.jpg", Contact: "9865745421", City: "Delhi", Description: "Crispy veggie balls in flavorful Indo-Chinese sauce 🍲" },
 
    
    { S_No: "41", Resname: "Burger King", Name: "Raj kachori", Price: "599",Sprice:"499", Image: "/raj kachori.jpg", Contact: "8933587877", City: "Gurugram", Description: "Crispy shell filled with tangy curd and chutneys 🥗" },
    { S_No: "42", Resname: "Burger King", Name: "Manchurian", Price: "299" ,Sprice:"209", Image: "/burger.png", Contact: "9865745421", City: "Delhi", Description: "Crispy veggie balls in flavorful Indo-Chinese sauce 🍲" },
    { S_No: "43", Resname: "Burger King", Name: "Raj kachori", Price: "999",Sprice:"209", Image: "/manchurian.jpg", Contact: "9865745421", City: "Delhi", Description: "Crispy veggie balls in flavorful Indo-Chinese sauce 🍲" },
    { S_No: "44", Resname: "Burger King", Name: "Ice cream", Price: "799",Sprice:"209", Image: "/briyani.png", Contact: "9865745421", City: "Delhi", Description: "Crispy veggie balls in flavorful Indo-Chinese sauce 🍲" },
    { S_No: "45", Resname: "Burger King", Name: "Noodle", Price: "499",Sprice:"209", Image: "/manchurian.jpg", Contact: "9865745421", City: "Delhi", Description: "Crispy veggie balls in flavorful Indo-Chinese sauce 🍲" }, 
     
    
    { S_No: "46", Resname: "The Garden of Eat'n", Name: "Manchurian", Price: "599",Sprice:"209", Image: "/manchurian.jpg", Contact: "9865745421", City: "Delhi", Description: "Crispy veggie balls in flavorful Indo-Chinese sauce 🍲" },
    { S_No: "47", Resname: "The Garden of Eat'n", Name: "Manchurian", Price: "299" ,Sprice:"209", Image: "/burger.png", Contact: "9865745421", City: "Delhi", Description: "Crispy veggie balls in flavorful Indo-Chinese sauce 🍲" },
    { S_No: "48", Resname: "The Garden of Eat'n", Name: "Raj kachori", Price: "999",Sprice:"209", Image: "/raj kachori.jpg", Contact: "9865745421", City: "Delhi", Description: "Crispy veggie balls in flavorful Indo-Chinese sauce 🍲" },
    { S_No: "49", Resname: "The Garden of Eat'n", Name: "Ice cream", Price: "799",Sprice:"209", Image: "/briyani.png", Contact: "9865745421", City: "Delhi", Description: "Crispy veggie balls in flavorful Indo-Chinese sauce 🍲" },
    { S_No: "50", Resname: "The Garden of Eat'n", Name: "Noodle", Price: "499",Sprice:"209", Image: "/manchurian.jpg", Contact: "9865745421", City: "Delhi", Description: "Crispy veggie balls in flavorful Indo-Chinese sauce 🍲" },
    

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
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-orange-100 via-white to-orange-200 p-4 sm:p-6 md:p-10">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold animate-wave text-orange-600 mb-6 text-center">
        🍕 Food Items List
      </h1>

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

      <div className="overflow-x-auto shadow-lg rounded-2xl border border-orange-300 bg-white/80 backdrop-blur-sm w-full max-w-7xl">
        <table className="min-w-full text-xs sm:text-sm md:text-base text-left text-gray-600">
          <thead className="bg-orange-500 text-white text-sm sm:text-base">
            <tr>
              <th className="px-3 sm:px-4 md:px-6 py-3 sm:py-4">S.No</th>
              <th className="px-3 sm:px-4 md:px-6 py-3 sm:py-4">Restaurant Name</th>
              <th className="px-3 sm:px-4 md:px-6 py-3 sm:py-4">Name</th>
              <th className="px-3 sm:px-4 md:px-6 py-3 sm:py-4">Price</th>
              <th className="px-3 sm:px-4 md:px-6 py-3 sm:py-4">Sale Price</th>
              <th className="px-3 sm:px-4 md:px-6 py-3 sm:py-4">Image</th>
              <th className="px-3 sm:px-4 md:px-6 py-3 sm:py-4">City</th>
              <th className="px-3 sm:px-4 md:px-6 py-3 sm:py-4">Contact</th>
              <th className="px-3 sm:px-4 md:px-6 py-3 sm:py-4">Description</th>
              <th className="px-3 sm:px-4 md:px-6 py-3 sm:py-4">Actions</th>
            </tr>
          </thead>

          <tbody>
            {newdata.map((item, index) => (
              <tr key={index} className="border-b hover:bg-orange-50 transition">
                <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4">{index + 1}</td>

                <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 font-semibold text-gray-800">
                  {editingIndex === index ? (
                    <input
                      type="text"
                      name="Resname"
                      value={editedItem.Resname}
                      onChange={handleChange}
                      className="border border-gray-300 px-2 py-1 rounded-md w-full"
                    />
                  ) : (
                    item.Resname
                  )}
                </td>

                <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4">
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

                <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4">
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
                  <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4">
                  {editingIndex === index ? (
                    <input
                      type="number"
                      name="Sprice"
                      value={editedItem.Sprice}
                      onChange={handleChange}
                      className="border border-gray-300 px-2 py-1 rounded-md w-full"
                    />
                  ) : (
                    `₹${item.Sprice}`
                  )}
                </td>

                <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4">
                  {item.Image ? (
                    <Image
                      src={item.Image.startsWith("/") ? item.Image : "/burger.png"}
                      width={40}
                      height={40}
                      alt={item.Name || "Food"}
                      className="w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 rounded-lg object-cover shadow-sm"
                    />
                  ) : (
                    <div className="w-14 h-14 flex items-center justify-center bg-gray-200 text-gray-400 rounded-lg">
                      No Image
                    </div>
                  )}
                </td>

                <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4">
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

                <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4">
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

                <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4">
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

                <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 flex flex-wrap gap-2 sm:gap-3">
                  {editingIndex === index ? (
                    <button
                      onClick={() => handleSave(index)}
                      className="bg-blue-500 text-white px-2 sm:px-3 py-1 rounded-md text-xs sm:text-sm hover:bg-blue-600 transition"
                    >
                      Save......
                    </button>
                  ) : (
                    <button
                      onClick={() => handleEdit(index)}
                      className="bg-green-500 text-white px-2 sm:px-3 py-1 rounded-md text-xs sm:text-sm hover:bg-green-600 transition"
                    >
                      Edit......
                    </button>
                  )}
                  <button
                    onClick={() => handleDelete(index)}
                   
                    className="bg-red-500 text-white px-2 sm:px-3 py-1 rounded-md text-xs sm:text-sm hover:bg-red-600 transition"
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
