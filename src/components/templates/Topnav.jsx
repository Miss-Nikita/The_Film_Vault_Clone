import React, { useState } from "react";
import { Link } from "react-router-dom";

const Topnav = () => {
  const [query, setquery] = useState("");

  

  return (
    <>
      <div className=" relative w-full h-[10vh]   flex justify-start items-center ml-[15%]  ">
        <i class=" text-zinc-400 text-2xl ri-search-line"></i>
        <input
        onChange={(e) => setquery(e.target.value)}
        value={query}
          className="w-[50%] mx-10 p-3 rounded border-none bg-transparent text-zinc-200  text-xl outline-none   "
          type="text"
          placeholder="Seach anything"
        />
        {query.length > 0 && (
            <i onClick={() => setquery("")} class=" text-zinc-400 text-2xl ri-close-fill"></i>

        )}
 
         <div className="absolute w-[50%] max-h-[50vh] bg-zinc-200 bottom-0 top-[90%] overflow-auto ">
          <Link className="hover:text-black hover:bg-zinc-400 duration-300 font-semibold text-zinc-500  w-[100%] p-7 flex justify-start items-center border-b-2 border-zinc-100">
            <img src="" alt="" />
            <span>Hello everyone</span>
          </Link>
        
          <Link className="hover:text-black hover:bg-zinc-400 duration-300 font-semibold text-zinc-500  w-[100%] p-7 flex justify-start items-center border-b-2 border-zinc-100">
            <img src="" alt="" />
            <span>Hello everyone</span>
          </Link>
        

        
        </div> 


      </div>
    </>
  );
};

export default Topnav;
