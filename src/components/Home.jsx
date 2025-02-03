import React, { useEffect, useState } from "react";
import Sidenav from "./templates/Sidenav";
import Topnav from "./templates/Topnav";
import axios from "../utils/axios";

const Home = () => {
  document.title = "The_film_Vault || Homepage";

  const [wallpaper, setwallpaper] = useState(null);

  const GetHeaderWallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      console.log(data);

     let randomdata =  data.results[Math.random() * data.results.length];
      setwallpaper(randomdata);
    } catch (error) {
      console.error("Error fetching search results:", error.message);
    }
  };
  console.log(wallpaper);

  useEffect(() => {
    !wallpaper && GetHeaderWallpaper();
  }, []);

  return (
    <>
      <Sidenav />

      <div className="w-[80%] h-full ">
        <Topnav />
      </div>
    </>
  );
};

export default Home;
