import RestaurantCard from "../../RestaurantCard";
import Search from "../../Search";
import { resList } from "../utils/mockData";

const Body = () => {
  return (
    <>
      <Search />
      <div className="allCards">
        {resList.map(
          (restaurant) => (
            console.log(restaurant.name),
            <RestaurantCard key={restaurant.id} resList={restaurant} />
          )
        )}
      </div>
    </>
  );
};

export default Body;
