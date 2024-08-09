import Image from "next/image";
import React from "react";

const Stories = () => {
  return (
    <div className=" p-4 bg-white rounded-lg shadow-md text-xs overflow-x-scroll scrollbar-hide">
      <div className=" gap-8 flex w-max">
        {/* story */}
        <div className="gap-2  flex flex-col items-center cursor-pointer">
          <Image
            src={"https://images.pexels.com/photos/16665229/pexels-photo-16665229/free-photo-of-mountains-against-a-cloudy-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
            alt=""
            height={80}
            width={80}
            className=" w-20 h-20 rounded-full ring-2"
          />
          <span>username</span>
        </div>
        <div className="gap-2  flex flex-col items-center cursor-pointer">
          <Image
            src={""}
            alt=""
            height={80}
            width={80}
            className=" w-20 h-20 rounded-full ring-2"
          />
          <span>username</span>
        </div>
        <div className="gap-2  flex flex-col items-center cursor-pointer">
          <Image
            src={""}
            alt=""
            height={80}
            width={80}
            className=" w-20 h-20 rounded-full ring-2"
          />
          <span>username</span>
        </div>
        <div className="gap-2  flex flex-col items-center cursor-pointer">
          <Image
            src={""}
            alt=""
            height={80}
            width={80}
            className=" w-20 h-20 rounded-full ring-2"
          />
          <span>username</span>
        </div>
      </div>
    </div>
  );
};

export default Stories;
