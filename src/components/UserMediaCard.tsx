import Image from "next/image";
import Link from "next/link";
import React from "react";

const UserMediaCard = ({ userId }: { userId: string }) => {
  return (
    <div className=" p-4 bg-white rounded-lg shadow-md text-xs flex flex-col gap-4">
      {/* TOP */}
      <div className=" flex justify-between font-medium">
        <span className=" text-gray-500">User Media</span>
        <Link className=" text-xs text-blue-500" href={"/"}>
          See all
        </Link>
      </div>
      {/* BOTTOM */}
      <div className=" flex gap-4 flex-wrap ">
        <div className=" relative w-1/5 h-24">
          <Image
            className=" object-cover rounded-md"
            src={
              "https://images.pexels.com/photos/10542142/pexels-photo-10542142.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            alt=""
            fill
          />
        </div>
        <div className=" relative w-1/5 h-24">
          <Image
            className=" object-cover rounded-md"
            src={
              "https://images.pexels.com/photos/10542142/pexels-photo-10542142.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            alt=""
            fill
          />
        </div>
        <div className=" relative w-1/5 h-24">
          <Image
            className=" object-cover rounded-md"
            src={
              "https://images.pexels.com/photos/10542142/pexels-photo-10542142.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            alt=""
            fill
          />
        </div>
        <div className=" relative w-1/5 h-24">
          <Image
            className=" object-cover rounded-md"
            src={
              "https://images.pexels.com/photos/10542142/pexels-photo-10542142.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            alt=""
            fill
          />
        </div>
        <div className=" relative w-1/5 h-24">
          <Image
            className=" object-cover rounded-md"
            src={
              "https://images.pexels.com/photos/10542142/pexels-photo-10542142.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            alt=""
            fill
          />
        </div>
        <div className=" relative w-1/5 h-24">
          <Image
            className=" object-cover rounded-md"
            src={
              "https://images.pexels.com/photos/10542142/pexels-photo-10542142.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            alt=""
            fill
          />
        </div>
      </div>
    </div>
  );
};

export default UserMediaCard;
