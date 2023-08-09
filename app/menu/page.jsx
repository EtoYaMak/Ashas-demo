"use client";
import React, { useState, useEffect } from "react";
import Menu from "@components/Menu";
import Loading from "./loading";
import VideoComp from "@components/VideoComp";
import { useTransition, animated, config } from "@react-spring/web";

const page = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [videoToPlay, setVideoToPlay] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 600);
  }, []);

  const handleVideoSelected = (videoUrl) => {
    setVideoToPlay(videoUrl);
  };

  const handleCloseVideo = () => {
    setVideoToPlay(null);
  };
  const myMolassesConfig = {
    ...config.molasses,
    tension: 340, // Change as required
    friction: 50, // Change as required
  };
  const transitions = useTransition(!isLoading, {
    from: { transform: "translateY(-100%)" },
    enter: { transform: "translateY(0%)" },
    leave: { transform: "translateY(100%)" },
    config: myMolassesConfig,
  });

  if (isLoading) {
    return <Loading />;
  }

  return transitions(
    (styles, item) =>
      item && (
        <animated.div style={styles}>
          <Menu onVideoSelected={handleVideoSelected} />
          {videoToPlay && (
            <VideoComp videoUrl={videoToPlay} onClose={handleCloseVideo} />
          )}
        </animated.div>
      )
  );
};

export default page;
