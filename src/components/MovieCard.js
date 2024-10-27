import React from "react";
import { IMG_CONST } from "../utils/constant";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48 pr-4">
      <img alt="movieCard" src={IMG_CONST + posterPath} />
    </div>
  );
};

export default MovieCard;
