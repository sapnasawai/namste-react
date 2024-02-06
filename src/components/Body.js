import RestaurantCard from "../../RestaurantCard"
import Search from "../../Search"
import { resList } from "../utils/mockData"

const Body = () => {
    console.log(resList)
    return(
        <>
        <Search/>
        <div className="allCards">
      
            {resList.map((restaurant) => 
           
        <RestaurantCard key={restaurant.id} resList = {restaurant}/>)}
        </div>
        </>
    )
    }

    export default Body