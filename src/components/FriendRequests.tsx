import Image from "next/image";
import Link from "next/link";
import React from "react";

const FriendRequests = () => {
  return (
    <div className=" p-4 bg-white rounded-lg shadow-md text-xs flex flex-col gap-4">
      {/* TOP */}
      <div className=" flex justify-between font-medium">
        <span className=" text-gray-500">Friend Request</span>
        <Link className=" text-xs text-blue-500" href={"/"}>
          See all
        </Link>
      </div>
      {/* BOTTOM */}
      <div className=" flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            className=" rounded-full w-10 h-10 object-cover"
            src={
              "https://images.pexels.com/photos/16665229/pexels-photo-16665229/free-photo-of-mountains-against-a-cloudy-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            alt=""
            width={40}
            height={40}
          />
          <span className=" font-semibold"> User na</span>
        </div>
        <div className=" flex justify-end gap-3">
          <Image
            className=" cursor-pointer"
            src={"/accept.png"}
            alt=""
            width={20}
            height={20}
          />
          <Image
            className=" cursor-pointer"
            src={"/reject.png"}
            alt=""
            width={20}
            height={20}
          />
        </div>
      </div>
      {/*  */}
      <div className=" flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            className=" rounded-full w-10 h-10 object-cover"
            src={
              "https://images.pexels.com/photos/16665229/pexels-photo-16665229/free-photo-of-mountains-against-a-cloudy-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            alt=""
            width={40}
            height={40}
          />
          <span className=" font-semibold"> User na</span>
        </div>
        <div className=" flex justify-end gap-3">
          <Image
            className=" cursor-pointer"
            src={"/accept.png"}
            alt=""
            width={20}
            height={20}
          />
          <Image
            className=" cursor-pointer"
            src={"/reject.png"}
            alt=""
            width={20}
            height={20}
          />
        </div>
      </div>
      {/*  */}
    </div>
  );
};

export default FriendRequests;
