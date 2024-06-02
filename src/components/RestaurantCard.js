import RestaurantMenu from "./RestaurantMenu";

const RestaurantCard = (props) => {
  const { cloudinaryImageId, name, avgRating, sla, cuisines } = props.resList;
  return (
    <div className="cardContainer" onClick={() => <RestaurantMenu />}>
      <img
        className="restroImage"
        alt="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          `${cloudinaryImageId}`
        }
      />
      <h4>{name}</h4>
      <h4>{avgRating}stars</h4>
      <h4>{sla.deliveryTime}</h4>
      <h4>{cuisines.join(", ")}</h4>
    </div>
  );
};
export default RestaurantCard;
