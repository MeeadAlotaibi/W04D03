import React from "react";

const Favorite = () => {
  let arrFav = JSON.parse(localStorage.getItem("arrFav"));
  return (
    <div className="Fav">
      {arrFav.map(
        (item, i) => (
          (<img src={item.img} alt="skyPhotos" />),
          (
            <h2>
              {" "}
              key={i}
              {item.name}
            </h2>
          )
        )
      )}
    </div>
  );
};

export default Favorite;
