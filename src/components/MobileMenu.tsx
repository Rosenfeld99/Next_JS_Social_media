"use client";

import Link from "next/link";
import React, { useState } from "react";

const MobileMenu = () => {
  const [isOPen, setIsOPen] = useState(false);

  return (
    <div className=" md:hidden">
      <div
        onClick={() => setIsOPen(!isOPen)}
        className=" flex flex-col cursor-pointer gap-[4.5px]"
      >
        <div
          className={` w-6 h-1 bg-blue-500 rounded-sm ${
            isOPen ? "rotate-45" : ""
          } origin-left ease-in-out duration-300`}
        />
        <div
          className={` w-6 h-1 bg-blue-500 rounded-sm ${
            isOPen ? "opacity-0" : ""
          } ease-in-out duration-300`}
        />
        <div
          className={` w-6 h-1 bg-blue-500 rounded-sm ${
            isOPen ? "-rotate-45" : ""
          } origin-left ease-in-out duration-300`}
        />
      </div>

      {/* Is open`*/}
      {isOPen && (
        <div className=" absolute left-0 top-24 w-full h-[calc(100vh-96px)] bg-white flex flex-col items-center justify-center gap-8 font-medium text-xl z-10">
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>Friends</Link>
          <Link href={"/"}>Groups</Link>
          <Link href={"/"}>Stories</Link>
          <Link href={"/"}>Settings</Link>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
