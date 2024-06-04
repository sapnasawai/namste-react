import { RESTAURANT_IMAGES_API_URL } from "../utils/constants";
import RestaurantMenu from "./RestaurantMenu";

const RestaurantCard = (props) => {
  const { cloudinaryImageId, name, avgRating, sla, cuisines } = props.resList;
  return (
    <div className="cardContainer" onClick={() => <RestaurantMenu />}>
      <img
        className="restroImage"
        alt="res-logo"
        src={RESTAURANT_IMAGES_API_URL + `${cloudinaryImageId}`}
      />
      <h4>{name}</h4>
      <h4>{avgRating}stars</h4>
      <h4>{sla.deliveryTime}</h4>
      <h4>{cuisines.join(", ")}</h4>
    </div>
  );
};
export default RestaurantCard;
