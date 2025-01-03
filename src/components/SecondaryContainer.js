import React from "react";
import { useSelector } from "react-redux";
import Loader from "./Loader";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movies);

  return (
    <div className="Movie-List">
      {movies?.nowPlayingMovies ? (
        <div className="Nested-Movie-list">
          <MovieList
            title={"Now Playing"}
            moviesData={movies?.nowPlayingMovies}
          />
          <MovieList title={"Trending"} moviesData={movies?.nowPlayingMovies} />
          <MovieList
            title={"Upcoming Movies"}
            moviesData={movies?.nowPlayingMovies}
          />
          <MovieList title={"Popular"} moviesData={movies?.nowPlayingMovies} />
          <MovieList
            title={"Horror Movies"}
            moviesData={movies?.nowPlayingMovies}
          />
        </div>
      ) : (
        <div className="Loader-View">
          <Loader />
        </div>
      )}
    </div>
  );
};

export default SecondaryContainer;
