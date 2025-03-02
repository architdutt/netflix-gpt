import React, { useRef } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addMoviesSuggested } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const searchText = useRef(null);

  const searchMovies = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" + movie,
      API_OPTIONS
    );
    const json = await data.json();
    return json ? json.results : [];
  };
  const handleSearch = async () => {
    console.log("Search clicked=> ", searchText.current.value);
    const gptQuery =
      "Act as a movie recommendation system and suggest some movies for the query: " +
      searchText.current.value +
      " only give me names for 5 movies, comma separated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi mil gaya ";
    // const gtpResults = await client.chat.completions.create({
    //   messages: [{ role: "user", content: gptQuery }],
    //   model: "gpt-3.5-turbo",
    // });
    const gtpResults = [
      "Andaz Apna Apna",
      "Sholay",
      "Dil Chahta Hai",
      "Golmaal",
      "Koi Mil Gaya",
    ];
    console.log("Chat completion=> ", gtpResults);

    const movies = gtpResults.map((movie) => {
      return searchMovies(movie);
    });

    const movieResults = await Promise.all(movies);

    console.log("Movie results=> ", movieResults);
    dispatch(addMoviesSuggested(movieResults));
  };
  return (
    <div className="pt-[10%] flex justify-center">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-1/2 bg-black grid grid-cols-12"
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9 bg-gray-600"
          placeholder="What would you like to watch today?"
        />

        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={handleSearch}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
