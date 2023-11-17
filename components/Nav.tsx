"use client";
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";

export default function Nav() {
  const { user, isLoaded } = useUser();

  return (
    <header>
      <nav className="flex items-center justify-center p-6 lg:px-8 h-16 border border-t-0 border-l-0 border-r-0 border-gray-300">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            LOGO
          </a>
        </div>
        {isLoaded && user && (
          <>
            <UserButton afterSignOutUrl="/" showName signInUrl="/dashbord" />
          </>
        )}
      </nav>
    </header>
  );
}
