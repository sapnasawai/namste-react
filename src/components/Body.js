import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Search from "./Search";
import Shimmer from "./Shimmer";
import { RESTAURANT_API_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredListOfRestaurant, setFilteredListOfRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANT_API_URL);
    const res = await data.json();
    setListOfRestaurant(
      res?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredListOfRestaurant(
      res?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if(filteredListOfRestaurant.length === 0){
    return <Shimmer/>
  }


  return (
    
    <>
     <div className="headerButtonContainer">
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
            const filterList = listOfRestaurant.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredListOfRestaurant(filterList);
          }}
        >
          Search
        </button>
      </div>
      <div className="filterButton" style={{marginLeft:30}}>
        <button
          onClick={() => {
            const filterList = listOfRestaurant.filter(
              (res) => res.info.avgRating >= 4
            );
            setFilteredListOfRestaurant(filterList);
          }}
        >
          Filter Top Restaurant
        </button>
        </div> 
      </div>
      <div className="allCards">
        {filteredListOfRestaurant.map((restaurant) => (
          <Link to={"/restaurant/"+restaurant.info.id} className="link-card"><RestaurantCard key={restaurant.info.id} resList={restaurant.info} /></Link>
        ))}
      </div>
    </>
  );
};

export default Body;
