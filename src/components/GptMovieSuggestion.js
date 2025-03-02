import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
  const suggestedMovies = useSelector((store) => store.gpt.moviesSuggested);

  if (suggestedMovies.length === 0) {
    return null;
  }

  console.log("Suggested movies in GptMovieSuggestion=> ", suggestedMovies);
  return (
    <div>
      <h1 className="p-4 m-4 bg-black bg-opacity-55 text-white">
        {suggestedMovies?.map((movie, index) => {
          console.log("Movie:", movie);
          console.log("Title:", movie[0].title);

          return (
            <MovieList title={movie[0].title} movies={suggestedMovies[index]} />
          );
        })}
      </h1>
    </div>
  );
};

export default GptMovieSuggestion;
