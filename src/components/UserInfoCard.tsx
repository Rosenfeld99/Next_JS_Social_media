import Image from "next/image";
import Link from "next/link";
import React from "react";

const UserInfoCard = ({ userId }: { userId?: string }) => {
  return (
    <div className=" p-4 bg-white rounded-lg shadow-md text-xs flex flex-col gap-4">
      {/* TOP */}
      <div className=" flex justify-between font-medium">
        <span className=" text-gray-500">User information</span>
        <Link className=" text-xs text-blue-500" href={"/"}>
          See all
        </Link>
      </div>
      {/* BOTTOM */}
      <div className=" flex flex-col gap-4 text-gray-500 ">
        <div className=" flex items-center gap-2 ">
          <span className=" text-xl text-black">Momo nane</span>
          <span className=" text-sm">@Momo nane</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          quae at iste, ut deserunt sed voluptate atque iure debitis
        </p>
        {/* Location */}
        <div className=" flex items-center gap-2 ">
          <Image src={"/map.png"} alt="" width={16} height={16} />
          <span>
            Living in <b>Israel</b>
          </span>
        </div>
        {/* Education */}
        <div className=" flex items-center gap-2 ">
          <Image src={"/school.png"} alt="" width={16} height={16} />
          <span>
            School to <b>OTR singalovsky</b>
          </span>
        </div>
        {/* Work */}
        <div className=" flex items-center gap-2 ">
          <Image src={"/work.png"} alt="" width={16} height={16} />
          <span>
            Working at <b>IDF</b>
          </span>
        </div>
        {/* Mittoing */}
        <div className=" flex items-center justify-between ">
          <div className=" flex gap-1 items-center">
            <Image src={"/link.png"} alt="" width={16} height={16} />
            <Link className="  font-medium text-blue-500" href={"/"}>
              eli-rosenfeld.com
            </Link>
          </div>
          <div className=" flex gap-1 items-center">
            <Image src={"/date.png"} alt="" width={16} height={16} />
            <span> Joined Nocember 2024</span>
          </div>
        </div>

        {/* Controllers */}
        <button className=" bg-blue-500 text-white text-sm rounded-md p-2">Follow</button>
        <span className=" text-red-400  self-end text-xs cursor-pointer">Block User</span>
      </div>
    </div>
  );
};

export default UserInfoCard;
