import Image from "next/image";
import Link from "next/link";
import React from "react";

const Birthdays = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-xs flex flex-col gap-4">
      <div className=" flex justify-between font-medium">
        <span className=" text-gray-500">Birthdays</span>
      </div>
      {/* USERS */}
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
          <button className=" bg-blue-500 text-white px-2 py-1 rounded-md">
            Celebrate
          </button>
        </div>
      </div>
      {/* UPCOMING */}
      <div className=" p-4 bg-slate-100 rounded-lg flex items-center gap-4">
        <Image src={"/gift.png"} alt="" width={24} height={24} />
        <Link href={"/"}>
          <span className=" text-gray-700 font-semibold ">
            Upcoming Birthdays
          </span>
          <br />
          <span className=" text-gray-500 ">
            See others 16 gave upcoming Birthdays
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Birthdays;
