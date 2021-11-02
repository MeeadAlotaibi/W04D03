import React from "react";
import { useState } from "react";

const Cards = () => {
  const [cards] = useState([
    {
      id: 0,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL7giCmepgviTv1ZD6bL8aGjGrVxPCoR0ZYA&usqp=CAU",
      name: "blue sky",
    },
    {
      id: 1,
      img: "https://images.squarespace-cdn.com/content/v1/55cfb535e4b061baebe310df/1587472623697-IC8B3J3ZIZI0AMIE7U8G/sky+photo+for+website+home+page.jpeg?format=2500w",
      name: "red sky",
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/53594/blue-clouds-day-fluffy-53594.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      name: "white sky",
    },
  ]);

  return (
    <div className="cards">
      {cards.map((item, id) => {
        return (
          <div className="card">
            <img src={item.img} alt="skyPhotos" />
            <h2>{item.name}</h2>
            <button onClick>Add to Favorite</button>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
