import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoPlayer from "./VideoPlayer";

const MainContainer = () => {
  const movies = useSelector((state) => state.movies?.nowPlayingMovies);

  if (movies.length === 0) {
    return <div>Loading...</div>;
  }

  const mainMovie = movies[3];

  const { original_title, overview, id } = mainMovie;
  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoPlayer movieId={id} />
    </div>
  );
};

export default MainContainer;
