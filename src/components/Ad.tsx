import Image from "next/image";
import React from "react";

const Ad = ({ size }: { size: "sm" | "md" | "lg" }) => {
  return (
    <div className=" p-4 bg-white rounded-lg shadow-md text-xs">
      {/* TOP */}
      <div className=" flex items-center justify-between text-gray-500 font-medium">
        <span>Sponsored Ads</span>
        <Image src={"/more.png"} alt="" width={16} height={16} />
      </div>
      {/* BOTTOM  */}
      <div className=""></div>
    </div>
  );
};

export default Ad;
