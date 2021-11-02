import React from "react";
import { useState } from "react";

const Cards = () => {
  const [cards] = useState([
    {
      id: 0,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL7giCmepgviTv1ZD6bL8aGjGrVxPCoR0ZYA&usqp=CAU",
      name: "blue sky",
      isFav: false,
    },
    {
      id: 1,
      img: "https://images.squarespace-cdn.com/content/v1/55cfb535e4b061baebe310df/1587472623697-IC8B3J3ZIZI0AMIE7U8G/sky+photo+for+website+home+page.jpeg?format=2500w",
      name: "red sky",
      isFav: false,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/53594/blue-clouds-day-fluffy-53594.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      name: "white sky",
      isFav: false,
    },
  ]);

  const favorite = (id) => {
    let arrFav = [];
    arrFav = cards.map((item) => {
      if (item.id === id) {
        return { ...item, isFav: !item.isFav };
      } else {
        return item;
      }
    });

    localStorage.setItem("arrFav", JSON.stringify(arrFav));
    favRender();
  };

  return (
    <div>
      <input
        type="search"
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />
      {
        (cards.filter((val) => {
          if (search === "") {
            return val;
          } else if (val.name.toLowerCase().includes(search.toLowerCase())) {
            return val;
          }
        }),
        (
          <div className="cards">
            {cards.map((item, id) => {
              return (
                <div className="card">
                  <img src={item.img} alt="skyPhotos" />
                  <h2>{item.name}</h2>
                  <button
                    className="favBtn"
                    onClick={() => favorite((item, id))}
                  >
                    Add to Favorite
                  </button>
                </div>
              );
            })}
          </div>
        ))
      }
    </div>
  );
};

export default Cards;
