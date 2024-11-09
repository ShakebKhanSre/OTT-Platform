import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import "./styles.css";

const Browse = () => {
  useNowPlayingMovies();
  const isGptSearchEnabled = useSelector((store) => store?.gpt?.showGptSearch);

  return (
    <div className="Home-Screen">
      <Header />
      {isGptSearchEnabled ? (
        {
          /* <GptSearch /> */
        }
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
