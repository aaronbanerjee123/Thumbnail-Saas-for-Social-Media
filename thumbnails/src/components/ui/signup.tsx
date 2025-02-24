"use client";

import Link from "next/link";
import { IoMdArrowBack } from "react-icons/io";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";
import { Label } from "./label";
import { Input } from "./input";
import { Button } from "./button";
import {useForm} from 'react-hook-form';
import { signInSchema } from "~/schemas/auth";
import { z } from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { toast } from "~/hooks/use-toast";
import { useRouter } from "next/navigation";
import { signup } from "~/app/actions/auth";

const Signup = () => {
    const router = useRouter();
  type FormValues = z.infer<typeof signInSchema>; //sets the form values to be a typescript type derieved from a zod schema

  const {register, handleSubmit, formState:{errors}} = useForm<FormValues>({resolver:zodResolver(signInSchema)}); //pass form values as the type for use form and pass ther resolver which will be used to populate errors
   
  const onSubmit = async (data:FormValues)=>{
    const error = await signup(data.email,data.password);

    if(error){
        toast({title:'Sign up failed',description:error, variant:"destructive"})
    }else{
        toast({title:'Sign up successful', description:'You can now sign in'})

    }
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col gap-4">
        <Link href="/" className="flex items-center gap-2">
          <IoMdArrowBack className="h-4 w-4" />
          <p className="leading-7">Go back</p>
        </Link>

        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle className="text-2xl">Sign Up</CardTitle>
            <CardDescription>
              Enter your Email and Password below to sign in
            </CardDescription>
          </CardHeader>

          <form onSubmit={handleSubmit(onSubmit)}>
            <CardContent className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input {...register("email")} id="email" type="email" placeholder="mail@gmail.com" />
                {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
             </div>

              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input {...register("password")} id="password" type="password" placeholder="" />
                {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}
            </div>
            </CardContent>

            <CardFooter className="flex flex-col gap-2">
              <Button type="submit" className="w-full">
                Sign Up
              </Button>

                <Link className="w-full" href="/signin">
                  <Button className="w-full" variant="link">Already have an account?</Button>
                </Link>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Signup;
