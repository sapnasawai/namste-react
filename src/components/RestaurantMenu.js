import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { RESTAURANT_MENU_API_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(RESTAURANT_MENU_API_URL+resId+"&catalog_qa=undefined");
    const resInfo = await data.json();
    // console.log(resInfo.data.cards[2].card.card.info)
    setMenuData(resInfo);
  };
  if (menuData.length === 0) {
    return <Shimmer />;
  }
  const {
    name,
    avgRating,
    cuisines,
    areaName,
    costForTwoMessage,
  } = menuData?.data?.cards[2]?.card?.card?.info;


  const { itemCards } =
    menuData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  // console.log("itemCards",menuData?.data?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card.categories[0]);

  return (
    <div>
      <h1>{name}</h1>
      <h4>{avgRating}</h4>
      <p>{cuisines.join(", ")}</p>
      <p>{areaName}</p>
      <p>{costForTwoMessage}</p>
      <h3>Menu</h3>
      <ul>
        {itemCards.map((item) => {
          return (
            <li key={item?.card?.info?.id}>
              {item?.card?.info?.name} - {' Rs.'} {item?.card?.info?.price / 100}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
