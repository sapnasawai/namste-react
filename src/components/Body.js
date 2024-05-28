import { useEffect, useState } from "react";
import RestaurantCard from "../../RestaurantCard";
import Search from "../../Search";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredListOfRestaurant, setFilteredListOfRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.94128110319547&lng=77.75196057724607&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const res = await data.json();
    setListOfRestaurant(
      res?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredListOfRestaurant(res?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  };

  return (
    <>
      <div className="searchContainer">
        <div className="searchBar">
          <input
            type="text"
            className="search-box"
            placeholder="Search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
        <button
          onClick={() => {
            console.log("listOfRestaurant",listOfRestaurant)
            const filterList = listOfRestaurant.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredListOfRestaurant(filterList)
          }}
        >
          Search
        </button>
      </div>
      <div className="allCards">
        {filteredListOfRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resList={restaurant.info} />
        ))}
      </div>
    </>
  );
};

export default Body;
