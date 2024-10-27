import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, moviesData }) => {
  return (
    <div className="py-10 px-5">
      <h1 className="text-2xl mb-5 text-white font-semibold">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {moviesData
            ? moviesData.map((item, index) => (
                <MovieCard key={item.id} posterPath={item.poster_path ?? ""} />
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
