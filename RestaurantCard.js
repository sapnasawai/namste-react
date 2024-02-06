
    const RestaurantCard = ({cloudinaryImageId, name,cuisines,avgRating, deliveryTime}) => {
    return(
        <div className="cardContainer">
          <img className="restroImage" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/+{cloudinaryImageId}"/>          
          <h4>{name}</h4>
          <h4>{avgRating}stars</h4>
          <h4>{deliveryTime}</h4>
          <h4>{cuisines}</h4>
        
        </div>
    )
    }
    export default RestaurantCard;