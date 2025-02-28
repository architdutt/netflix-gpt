import React from "react";
import { useGetVideo } from "../hooks/useGetVideo";
import { useDispatch, useSelector } from "react-redux";

const VideoPlayer = ({ movieId }) => {
  const trailerVideos = useSelector((state) => state.movies?.trailerVideos);

  useGetVideo(movieId);

  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideos?.key +
          "?autoplay=1&mute=1"
        }
        title="YouTube video player"
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
