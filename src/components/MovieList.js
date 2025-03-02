import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log("Movies in title=> ", title);
  return (
    <div className="px-4 ">
      <h1 className="text-3xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex ">
          {movies?.map((movie) => {
            return <MovieCard imgUrl={movie.poster_path} key={movie.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
