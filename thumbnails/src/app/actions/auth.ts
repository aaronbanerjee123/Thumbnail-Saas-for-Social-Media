"use server";

import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";
import { signInSchema } from "~/schemas/auth";
import { db } from "~/server/db";
//219
export const signup = async (email: string, password: string) => {
  //Validation
  const isValid = signInSchema.safeParse({ email, password });
  //see if user exists
  if (isValid.error) {
    return "Error";
  }

  const user = await db.user.findUnique({
    where: {
      email: isValid.data.email,
    },
  });

  if (user) {
    return "User already exists";
  }

  const encryptPassword = await bcrypt.hash(isValid.data.password, 10);


  await db.user.create({
    data:{
        email:isValid.data.email,
        password:encryptPassword
    }
  })

  redirect("/signin");
};
