"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useRef, useEffect } from "react";
const LONG_PRESS_DURATION = 300; // 300ms

const MenuItem = ({ imgSrc, altText, price, title, videoUrl, onLongPress }) => {
  const pressTimer = useRef();

  const handlePressStart = () => {
    pressTimer.current = setTimeout(() => {
      onLongPress(videoUrl); // Notify parent about the video to play
    }, LONG_PRESS_DURATION);
  };

  const handlePressEnd = () => {
    clearTimeout(pressTimer.current);
  };

  useEffect(() => {
    return () => {
      // Cleanup timer on unmount
      clearTimeout(pressTimer.current);
    };
  }, []);
  return (
    <div
      className="flex flex-col font-inter select-none
     bg-none saturate-[55%] hover:saturate-[85%] ease-in-out duration-200 max-[500px]:w-full max-[500px]:mx-4"
      onMouseDown={handlePressStart}
      onMouseUp={handlePressEnd}
      onTouchStart={handlePressStart}
      onTouchEnd={handlePressEnd}
    >
      <div className="item group  ease-in-out duration-300 hover:scale-105 bg-transparent">
        {/* This bg-white is visible on the edges of the image.. */}
        <div href="" className="mx-auto h-fit w-fit max-[500px]:w-full ">
          <Image
            src={imgSrc}
            alt={altText}
            width={240}
            height={240}
            className=" rounded-t-md  w-[200px]  h-[200px]  object-cover max-[500px]:w-full"
          />
        </div>
        <div className="group bg-zinc-50 hover:bg-white rounded-b-md text-center">
          <h1 className="title font-medium px-2 py-1">{title}</h1>
          <div className="flex flex-row rounded-b-2xl justify-between items-center pb-2 px-2 ">
            <h1 className="price font-light group-hover:font-medium w-fit h-fit ">
              {price}
            </h1>
            <button
              className="item-button duration-100 ease-in-out outline outline-1 outline-[#999] hover:outline-none
         hover:bg-black/90 font-light hover:text-white rounded-full  px-2 py-1
          group-hover:outline-yellow-700 group-hover:outline-2 group-hover:bg-yellow-600 group-hover:text-white mt-1"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
