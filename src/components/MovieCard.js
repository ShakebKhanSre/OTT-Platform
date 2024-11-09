import React from "react";
import { IMG_CONST } from "../utils/constant";

const MovieCard = ({ posterPath, onPressMovieCard, item }) => {
  return (
    <div className="w-48 pr-4" onClick={() => onPressMovieCard(item?.id)}>
      {posterPath ? (
        <img
          alt="movieCard"
          src={IMG_CONST + posterPath}
          defaultValue={
            "https://static.everypixel.com/ep-pixabay/0329/8099/0858/84037/3298099085884037069-head.png"
          }
        />
      ) : (
        <div className="bg-black w-[176px] h-[264px] border-2 border-white rounded"></div>
      )}
    </div>
  );
};

export default MovieCard;
