import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { useParams } from "react-router-dom";
import { API_OPTIONS, IMG_CONST } from "../utils/constant";
import Loader from "./Loader";

const DetailsPage = () => {
  const { id } = useParams();
  const [contentDetails, setContentDetails] = useState(null);
  const fetchContentDetails = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
      API_OPTIONS
    )
      .then((res) => res.json())
      .then((res) => setContentDetails(res))
      .catch((err) => console.error(err));
  };

  const colorArray = ["red", "yellow", "black", "aqua", "green"];

  useEffect(() => {
    fetchContentDetails();
  }, []);

  return (
    <div>
      {contentDetails ? (
        <>
          <img
            src={IMG_CONST + contentDetails?.backdrop_path}
            className="w-full h-full absolute -z-10 opacity-70"
          />
          <div className="Detail">
            <img
              src={IMG_CONST + contentDetails?.poster_path}
              className="Poster"
            />
            <div className="Description">
              <p className="overview">{contentDetails?.title}</p>
              <p className="overview">{contentDetails?.overview}</p>
              <p className="overview">
                {"Vote Average : " + contentDetails?.vote_average}
              </p>
              <p className="overview">
                {"Vote Count : " + contentDetails?.vote_count}
              </p>
              <Button variant="primary">Primary</Button>
            </div>
          </div>
        </>
      ) : (
        <div className="Loader-View">
          <Loader
            color={colorArray[Math.floor(Math.random() * colorArray.length)]}
          />
        </div>
      )}
    </div>
  );
};

export default DetailsPage;
