import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector(
    (state) => state.movies?.nowPlayingMovies
  );
  const popularMovies = useSelector((state) => state.movies?.popularMovies);
  const topRatedMovies = useSelector((state) => state.movies?.topRatedMovies);
  const upcomingMovies = useSelector((state) => state.movies?.upcomingMovies);
  return (
    <div className="bg-black  ">
      <div className=" -mt-62 pl-12 relative z-20">
        <MovieList title={"Now Playing"} movies={nowPlayingMovies} />
        <MovieList title={"Trending "} movies={topRatedMovies} />
        <MovieList title={"Popular"} movies={popularMovies} />
        <MovieList title={"Upcoming Movies"} movies={upcomingMovies} />
        <MovieList title={"Horror"} movies={nowPlayingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
