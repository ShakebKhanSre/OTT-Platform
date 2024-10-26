import React, { useEffect } from "react";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";

import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import "./styles.css";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div className="Home-Screen">
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
