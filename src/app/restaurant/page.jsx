"use client"
import React, { useState } from 'react'
import Login from '../../_components/Login'
import SignUp from '../../_components/SignUp'
import Hader from '@/_components/Hader'

export default function Restaurant() {
    const [login, setLogin] = useState(true)
  
    return (
        <>
           
            <div>
                <Hader/>
            {
                login ? <Login setLogin={setLogin} /> : <SignUp setLogin={setLogin} />
            }
            
            </div>
        </>
    )
}
