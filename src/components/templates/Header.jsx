import React from "react";

const Header = ({ data }) => {
  console.log(data);

  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.4),rgba(0,0,0,.7),rgba(0,0,0,.9)), url(https://image.tmdb.org/t/p/original/${
          data.backdrop_path || data.profile_path
        }) `,
      }}
      className="w-full h-[50vh] "
    >
      Header
    </div>
  );
};

export default Header;
