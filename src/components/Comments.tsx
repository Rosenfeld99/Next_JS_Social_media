import Image from "next/image";
import React from "react";

const Comments = () => {
  return (
    <div className="">
      {/* WRITE */}
      <div className=" flex-1 flex items-center gap-4">
        <Image
          src={
            "https://images.pexels.com/photos/16665229/pexels-photo-16665229/free-photo-of-mountains-against-a-cloudy-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          alt=""
          width={32}
          height={32}
          className=" rounded-full min-w-8 h-8"
        />
        <div className=" flex items-center justify-between bg-slate-100 rounded-full text-sm px-6 py-2 w-full">
          <input
            type="text"
            placeholder="Add comment... "
            className=" bg-transparent outline-none flex-1"
          />
          <Image src={"/emoji.png"} alt="" width={16} height={16} />
        </div>
      </div>
      {/* COMMENTS */}
      <div className=" flex flex-col gap-2">
        {/* COMMENT */}
        <div className=" flex gap-4 py-6">
          <Image
            src={
              "https://images.pexels.com/photos/16665229/pexels-photo-16665229/free-photo-of-mountains-against-a-cloudy-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            alt=""
            width={43}
            height={43}
            className=" rounded-full min-w-10 h-10"
          />
          <div className="">
            <span className=" font-medium">USERNAME</span>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
              sunt molestias, laudantium velit exercitationem aperiam animi
              consequatur reiciendis quis quae deserunt laboriosam similique
              nulla doloremque, rem voluptates aliquam corporis cupiditate.
            </p>
            <div className="">
              <div className="flex items-center gap-4 p-2 text-sm rounded-xl">
                <Image
                  src={"/like.png"}
                  alt=""
                  width={12}
                  height={12}
                  className=" w-4 h-4 cursor-pointer"
                />
                <span className=" text-gray-300">|</span>
                <span className=" text-gray-500">123</span>
                <span className=" text-gray-500 px-3">Reply</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
