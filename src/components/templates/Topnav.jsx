import React, { useEffect, useState } from "react";
import axios from "../../utils/axios"; // Ensure axios is correctly set up
import { Link } from "react-router-dom";
import noimage from "../../../public/noimage.jpg";

const Topnav = () => {
  const [query, setQuery] = useState("");
  const [searches, setsearches] = useState([]);
  const API_KEY = "ae960b08a31b318a19333e7760980220";
  
  // Debounce for better performance
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (query.trim().length > 0) {
        GetSearches();
      } else {
        setsearches([]); // Clear results when query is empty
      }
    }, 500); // 500ms delay

    return () => clearTimeout(delayDebounceFn);
  }, [query]);

  const GetSearches = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/multi?query=${query}&api_key=${API_KEY}`
      );
      setsearches(data.results || []);
    } catch (error) {
      console.error("Error fetching search results:", error.message);
    }
  };

  return (
    <>
      <div className="h-[10vh] relative flex justify-start items-center ml-[15%]">
        <i className="text-zinc-400 text-2xl ri-search-line"></i>
        <input
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          className="w-[50%] mx-10 p-3 rounded border-none bg-transparent text-zinc-200 outline-none"
          type="text"
          placeholder="Search anything"
        />
        {query.length > 0 && (
          <i onClick={() => setQuery("")} className="text-zinc-400 text-2xl ri-close-fill"></i>
        )}

        {/* Show search results only if query is not empty and results exist */}
        {query.length > 0 && searches.length > 0 && (
          <div className="absolute w-[50%] max-h-[50vh] bg-zinc-200 top-[90%] overflow-auto rounded">
            {searches.map((s, i) => (
              <Link
                key={i}
                to={`/movie/${s.id}`}
                className="hover:text-black hover:bg-zinc-400 duration-300 font-semibold text-zinc-500 w-[100%] p-5 flex justify-start items-center border-b-2 border-zinc-100"
              >
                <img
                  className="w-[10vh] h-[10vh] object-cover rounded mr-5 shadow-lg"
                  src={
                    s.backdrop_path || s.profile_path
                      ? `https://image.tmdb.org/t/p/original/${s.backdrop_path || s.profile_path}`
                      : noimage
                  }
                  alt=""
                />
                <span>{s.name || s.title || s.original_name || s.original_title}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Topnav;
