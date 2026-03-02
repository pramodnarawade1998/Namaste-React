import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

import { mockMenuData } from "../utils/mockData";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    // const data = await fetch(MENU_API + resId);

    // console.log(data);
    // const json = await data.json();

    // setResInfo(json.data);

    console.log(mockMenuData.data);
    setResInfo(mockMenuData.data);
  };

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwo } = resInfo?.cards[0]?.card?.card?.info;

  // const { name, cuisines, costForTwo } = resInfo?.cards[2]?.card?.card?.info;

  const itemCards =
    resInfo?.cards[1]?.groupedCard?.cardGroupMap?.REGULAR?.cards[0]?.card?.card
      .itemCards;

  // const itemCards =
  // resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
  //   .itemCards;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - ₹{costForTwo}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - ₹
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
