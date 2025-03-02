import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    moviesSuggested: [],
  },
  reducers: {
    toggleGptSearch: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addMoviesSuggested: (state, action) => {
      state.moviesSuggested = action.payload;
    },
  },
});

export const { toggleGptSearch, addMoviesSuggested } = gptSlice.actions;

export default gptSlice.reducer;
