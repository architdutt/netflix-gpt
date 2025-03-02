import React from "react";
import { IMG_CDN_URL } from "../utils/constant";

const MovieCard = ({ imgUrl }) => {
  if (!imgUrl) {
    return null;
  }
  return (
    <div className="w-48 p-2">
      <img src={IMG_CDN_URL + imgUrl} alt="" />
    </div>
  );
};

export default MovieCard;
