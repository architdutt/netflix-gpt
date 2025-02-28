import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { useEffect } from "react";
import { addTrailerVideos } from "../utils/moviesSlice";

export const useGetVideo = (movideId) => {
  const dispatch = useDispatch();
  const getVideoTrailer = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movideId}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();

    const filterData = json.results.filter((item) => item.type === "Trailer");
    const trailer = filterData.length > 0 ? filterData[0] : json.results[0];
    dispatch(addTrailerVideos(trailer));
  };
  useEffect(() => {
    getVideoTrailer();
  }, []);
};
