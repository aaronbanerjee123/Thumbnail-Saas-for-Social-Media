"use server";
import Link from "next/link";
import React from "react";
import Credits from "~/components/credits";
import ThumbnailsCreator from "~/components/ThumbnailsCreator";
import { Button } from "~/components/ui/button";
import { auth } from "~/server/auth";
import { db } from "~/server/db";

const page = async () => {
  const serverSession = await auth();

  const user = await db.user.findUnique({
    where: {
      id: serverSession?.user.id,
    },
    select: {
      credits: true,
    },
  });

  return (
    <div className="flex max-w-full items-center justify-center px-4 md:max-w-3xl md:px-0">
      <div className="flex max-w-full flex-col gap-10">
        {user?.credits === 0 ? (
          <div className="flex flex-col px-10 md:mt-10">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              Hi there
            </h1>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              Want to create a thumbnail?
            </h1>

            <div className="mt-2 flex flex-col gap-3">
              <p className="leading-7 text-muted-foreground">
                Buy more credits to continue generating thumbnails.
              </p>
              <Link href="/dashboard/pricing">
                <Button>Buy Credits</Button>
              </Link>
            </div>

            <div className="mt-4">
              Show recent thumbnails here
            </div>
          </div>
        ) : (
          <div>
            <ThumbnailsCreator />
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
