"use client"
import Fooditems from '@/_components/Fooditems';
import FooditemsList from '@/_components/FooditemsList';
import Hader from '@/_components/Hader'
import React, { useEffect, useState } from 'react'

export default function dashboard() {
  const [result, setResult] = useState();
  const [loading, setLoading] = useState(false);
  const [addItems, setAddItems] = useState(false);
  const [add,setAdd] =useState(true);
  useEffect(() => {
    let data = localStorage.getItem("user")
    if (!data) {
      setLoading(true)

    } else {
      setResult(JSON.parse(data))
      setLoading(false)
    }
  }, [])


  return (
    <> <div>
      <Hader />
      <div className=''>
        <button
          onClick={() => setAddItems(true)}
          className='bg-orange-500 text-white font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-orange-600 hover:shadow-lg transition transform hover:-translate-y-1'
        >Add Food</button>
        <button
          onClick={() => setAddItems(false)}
          className='bg-orange-500 text-white font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-orange-600 hover:shadow-lg transition transform hover:-translate-y-1'
        >Dashboard</button>
      </div>
      {
        addItems ? <Fooditems setAddItems={setAddItems}/>:<FooditemsList />
      }
    </div>
    </>
  )
}


