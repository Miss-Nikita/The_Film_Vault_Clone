import React, { useEffect, useState } from "react";
import axios from "../../utils/axios";
import { Link } from "react-router-dom";

const Topnav = () => {
  const [query, setquery] = useState("");
  const [searches, setsearches] = useState([]);

  const GetSearchs = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      setsearches(data.results);
      console.log(data);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    GetSearchs();
  }, [query]);

  return (
    <>
      <div className="  h-[10vh] relative  flex justify-start items-center ml-[15%]  ">
        <i class=" text-zinc-400 text-2xl ri-search-line"></i>
        <input
          onChange={(e) => setquery(e.target.value)}
          value={query}
          className="w-[50%] mx-10 p-3 rounded border-none bg-transparent text-zinc-200   outline-none   "
          type="text"
          placeholder="Seach anything"
        />
        {query.length > 0 && (
          <i
            onClick={() => setquery("")}
            class=" text-zinc-400 text-2xl ri-close-fill"
          ></i>
        )}

        <div className="absolute w-[50%] max-h-[50vh] bg-zinc-200  top-[90%] overflow-auto rounded ">
          {searches.map((s, i) => (
            <Link
              key={i}
              className="hover:text-black hover:bg-zinc-400 duration-300 font-semibold text-zinc-500  w-[100%] p-5 flex justify-start items-center border-b-2 border-zinc-100"
            >
              <img src="" alt="" />
              <span>
                {s.name || s.title || s.orignal_name || s.orignal_title}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Topnav;
