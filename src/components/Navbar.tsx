import Link from "next/link";
import React from "react";
import MobileMenu from "./MobileMenu";
import Image from "next/image";
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import { SignedIn, SignedOut } from "@clerk/clerk-react";

const Navbar = () => {
  return (
    <div className="flex items-center h-24 justify-between">
      {/* Left */}
      <div className=" md:hidden lg:block w-[20%]">
        <Link href={"/"} className=" font-semibold text-blue-600">
          SOCIAL_LOGO
        </Link>
      </div>
      {/* Center */}
      <div className="hidden md:flex w-[50%] text-sm gap-8">
        {/* Links */}
        <Link href={"/"} className="flex items-center gap-2">
          <Image
            src={"/home.png"}
            alt="homepage"
            width={16}
            height={16}
            className="w-4 h-4"
          />
          <span>Home</span>
        </Link>
        <Link href={"/"} className="flex items-center gap-2">
          <Image
            src={"/friends.png"}
            alt="Friends"
            width={16}
            height={16}
            className="w-4 h-4"
          />
          <span>Friends</span>
        </Link>
        <Link href={"/"} className="flex items-center gap-2">
          <Image
            src={"/stories.png"}
            alt="Stories"
            width={16}
            height={16}
            className="w-4 h-4"
          />
          <span>Stories</span>
        </Link>
      </div>

      <div className="hidden xl:flex p-2 px-4 bg-slate-100 items-center rounded-xl">
        <input type="text" placeholder=" search..." className=" bg-transparent outline-none" />
        <Image className=" mx-4" src={"/search.png"} width={14} height={14} alt="" />
      </div>

      {/* right */}
      <div className="w-[30%] flex items-center justify-end gap-4 xl:gap-8">
        {/* clerk auth */}
        <ClerkLoading>
          <div className="inline-block bg-gray-400 h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"></div>
        </ClerkLoading>

        <ClerkLoaded>
          <SignedIn>
            <div className=" cursor-pointer ">
              <Image src={"/people.png"} width={20} height={20} alt="image" />
            </div>
            <div className=" cursor-pointer ">
              <Image src={"/messages.png"} width={20} height={20} alt="image" />
            </div>
            <div className="cursor-pointer ">
              <Image
                src={"/notifications.png"}
                width={20}
                height={20}
                alt="image"
              />
            </div>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <div className=" flex items-center gap-2 text-sm">
              <Image src={"/login.png"} width={20} height={20} alt="image" />
              <Link href={"/sign-in"}>Login/Register</Link>
            </div>
          </SignedOut>
        </ClerkLoaded>
        <MobileMenu />
      </div>
    </div>
  );
};

export default Navbar;
