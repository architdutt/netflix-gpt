import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { BACKGROUND_IMG } from "../utils/constant";

const GPTSearch = () => {
  return (
    <>
      <div className="fixed top-0 left-0 w-screen h-screen -z-10">
        <img
          className="w-full h-full object-cover"
          src={BACKGROUND_IMG}
          alt="background"
        />
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </>
  );
};

export default GPTSearch;
