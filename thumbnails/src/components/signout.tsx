"use client"

import { signOut } from 'next-auth/react';
import React from 'react'
import {PiSignOutLight} from "react-icons/pi";

const Signout = () => {
    
  return (
    <PiSignOutLight onClick={()=> signOut({
        redirect:true,
        callbackUrl:'/signin'
    })}className="h-6 w-6 cursor-pointer"/>
  )
}

export default Signout