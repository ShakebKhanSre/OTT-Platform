import React from "react";

const VideoBackground = ({ movieId }) => {
  return (
    <div>
      <iframe
        className="h-screen w-screen aspect-video"
        src="https://www.youtube.com/embed/AIBPlz5GBbY?si=OsTnqk8snKt8cOxZ&amp;start=7?&autoplay=1&mute=1"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
