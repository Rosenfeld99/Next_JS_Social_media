import Image from "next/image";
import React from "react";

const AddPost = () => {
  return (
    <div className=" bg-white rounded-lg flex gap-4 p-4 justify-between text-sm">
      {/* AVATAR */}
      <div className="">
        <Image
          src={
            "https://images.pexels.com/photos/16665229/pexels-photo-16665229/free-photo-of-mountains-against-a-cloudy-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          height={48}
          width={48}
          className="h-12 w-12 rounded-full object-cover"
          alt=""
        />
      </div>

      {/* POST */}
      <div className=" flex-1">
        {/* TEXT */}
        <div className=" flex gap-4">
          <textarea
            placeholder=" Whht's in your mind..?"
            className=" flex-1 bg-slate-100 rounded-lg p-2"
          ></textarea>
          <Image
            src={"/emoji.png"}
            height={20}
            width={20}
            className="h-5 w-5 cursor-pointer self-end"
            alt=""
          />
        </div>
        {/* POST OPTION */}
        <div className=" flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
          <div className=" flex items-center gap-2 cursor-pointer">
            <Image src={"/addimage.png"} alt="" width={20} height={20} />
            Photo
          </div>
          <div className=" flex items-center gap-2 cursor-pointer">
            <Image src={"/addVideo.png"} alt="" width={20} height={20} />
            Video
          </div>
          <div className=" flex items-center gap-2 cursor-pointer">
            <Image src={"/addevent.png"} alt="" width={20} height={20} />
            Event
          </div>
          <div className=" flex items-center gap-2 cursor-pointer">
            <Image src={"/poll.png"} alt="" width={20} height={20} />
            Poll
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
