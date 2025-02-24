"use server"

import { redirect } from "next/navigation";
import Signin from "~/components/ui/signin";
import { auth } from "~/server/auth";

const page = async () => {
    const serverSession = await auth();

    if(serverSession?.user){
        redirect("/dashboard")
    }


    return <><Signin/></>

}


export default page;