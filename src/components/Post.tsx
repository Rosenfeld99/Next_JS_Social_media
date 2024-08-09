import Image from "next/image";
import React from "react";
import Comments from "./Comments";

const Post = () => {
  return (
    <div className=" flex flex-col gap-4">
      {/* USER */}
      <div className="">
        <div className=" flex items-center justify-between ">
          <div className=" flex items-center gap-4">
            <Image
              className=" rounded-full w-10 h-10"
              src={
                "https://images.pexels.com/photos/16665229/pexels-photo-16665229/free-photo-of-mountains-against-a-cloudy-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              alt=""
              width={40}
              height={40}
            />
            <span className=" font-medium">username</span>
          </div>
          <Image src={"/more.png"} alt="" width={16} height={16} />
        </div>
      </div>
      {/* DESC */}
      <div className=" flex flex-col gap-4">
        <div className=" w-full min-h-96 relative">
          <Image
            src={
              "https://images.pexels.com/photos/16665229/pexels-photo-16665229/free-photo-of-mountains-against-a-cloudy-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            alt=""
            fill
            className=" object-cover rounded-md"
          />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus autem earum odit labore velit tempore atque eos impedit
          culpa maiores cumque excepturi, est officia dolores! Placeat dolorum
          rem voluptatem corporis!
        </p>
      </div>
      {/* INTERACTION */}
      <div className=" flex items-center justify-between text-sm my-4">
        <div className=" flex gap-2 sm:gap-8">
          <div className=" flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image src={"/like.png"} alt="" width={16} height={16} />
            <span className=" text-gray-300">|</span>
            <span className=" text-gray-500">
              123 <span className=" hidden md:inline">Likes</span>
            </span>
          </div>
          <div className=" flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image src={"/comment.png"} alt="" width={16} height={16} />
            <span className=" text-gray-300">|</span>
            <span className=" text-gray-500">
              123 <span className=" hidden md:inline">Comments</span>
            </span>
          </div>
        </div>
        <div className="">
          <div className=" flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image src={"/share.png"} alt="" width={16} height={16} />
            <span className=" text-gray-300">|</span>
            <span className=" text-gray-500">
              123 <span className=" hidden md:inline">Shares</span>
            </span>
          </div>
        </div>
      </div>
      {/* COMMENTS */}
      <Comments/>
    </div>
  );
};

export default Post;
