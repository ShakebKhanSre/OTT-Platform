import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" px-20 py-60 absolute bg-gradient-to-r from-black h-screen aspect-video">
      <h className="text-6xl font-bold text-white">{title}</h>
      <p className="py-6 s  w-1/3 text-1xl  text-white">{overview}</p>
      <div className="flex w-1/5 justify-between">
        <button className="bg-white px-10 py-3 border-2 border-black rounded-xl">
          Play
        </button>
        <button className="bg-white  px-10 py-3 border-2 border-black rounded-xl">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
