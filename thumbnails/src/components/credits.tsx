"use server";
import React from 'react'
import { auth } from '~/server/auth';
import { db } from '~/server/db';

const Credits = async () => {
    const serverSession = await auth();
    const user = await db.user.findUnique({
        where:{
            id:serverSession?.user.id
        },
        select:{
            credits:true
        }

    })


  return (
    <p>{user?.credits} credits left</p>
  )
}

export default Credits