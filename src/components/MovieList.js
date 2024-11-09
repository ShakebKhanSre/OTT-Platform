import React from "react";
import { useNavigate } from "react-router-dom";
import MovieCard from "./MovieCard";

const MovieList = ({ title, moviesData }) => {
  const navigate = useNavigate();
  const onPressMovieCard = (id) => {
    navigate(`/${id}`);
  };

  return (
    <div className="py-10 px-5">
      <h1 className="text-2xl mb-5 text-white font-semibold">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {moviesData?.map((item, index) => (
            <MovieCard
              key={item.id}
              posterPath={item.poster_path}
              onPressMovieCard={onPressMovieCard}
              item={item}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
