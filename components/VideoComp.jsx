"use client";
import React, { useEffect, useRef, useState } from "react";
import { animated, useTransition } from "@react-spring/web";

const VideoComp = ({ videoUrl, onClose }) => {
  const videoRef = useRef();
  const AnimatedDiv = animated.div;

  const [isOpen, setIsOpen] = useState(true); // Initialize the video as open
  const [playVideo, setPlayVideo] = useState(false); // To control when to play the video

  const transitions = useTransition(isOpen, {
    from: {
      opacity: 0,
      transform: "scale(0)", // Start from size 0
    },
    enter: {
      opacity: 1,
      transform: "scale(1)", // Grow to original size
    },
    leave: {
      opacity: 0,
      transform: "scale(0)", // Shrink back to size 0
    },
    onRest: () => {
      if (isOpen) {
        setPlayVideo(true); // Start playing the video once the animation is done
      } else {
        onClose(); // Invoke the onClose callback once the "leave" transition has finished
      }
    },
  });

  useEffect(() => {
    const videoElement = videoRef.current;
    if (playVideo && videoElement) {
      videoElement.play();
      videoElement.addEventListener("ended", () => setIsOpen(false)); // Close the video when it ends
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener("ended", () => setIsOpen(false));
      }
    };
  }, [playVideo]);

  const handleOverlayClick = () => {
    setIsOpen(false); // Close the video when the overlay is clicked
  };

  const handleVideoClick = (event) => {
    event.stopPropagation(); // Stop the event from reaching the overlay click handler
  };

  return transitions(
    (style, item) =>
      item && (
        <AnimatedDiv
          className="fixed inset-0 flex items-center bg-black/90 backdrop-blur-sm justify-center"
          style={style}
          onClick={handleOverlayClick}
        >
          <div className="relative w-[360px] h-[640px]">
            <video
              ref={videoRef}
              src={videoUrl}
              className="absolute inset-0 w-full h-full object-fill rounded-3xl"
              muted
              onClick={handleVideoClick}
            />
            <button
              className="absolute top-4 right-4 text-white text-2xl"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>
          </div>
        </AnimatedDiv>
      )
  );
};

export default VideoComp;
