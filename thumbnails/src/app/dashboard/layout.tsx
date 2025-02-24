import Link from "next/link";
import Signout from "~/components/signout";
import { Button } from "~/components/ui/button";
import "~/styles/globals.css";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex h-screen w-full flex-col items-center overflow-y-scroll px-6 py-6">
      <nav className="flex w-full items-center pb-6 justify-end">
        <div className="flex items-center gap-4">
          <p>1 credit left</p>
          <Link href="/dashboard/pricing">
            <Button>Buy more</Button>
          </Link>

          <Signout />
        </div>
      </nav>

      {children}
    </div>
  );
}
