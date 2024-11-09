import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store?.movies?.nowPlayingMovies);
  if (movies == null) return;
  const firstMovie = movies[0];

  return (
    <div>
      <VideoTitle
        title={firstMovie?.original_title}
        overview={firstMovie?.overview}
      />
      <VideoBackground />
    </div>
  );
};

export default MainContainer;
