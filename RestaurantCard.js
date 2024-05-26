
    const RestaurantCard = (props) => {
      // {avgRating, deliveryTime, cuisines} = props
    return(
        <div className="cardContainer">
          {/* <img className="restroImage" alt="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/+{props.cloudinaryImageId}"}/>           */}
          <h4>{props.name}</h4>
          <h4>{props.avgRating}stars</h4>
          <h4>{props.deliveryTime}</h4>
          <h4>{props.cuisines}</h4>
        
        </div>
    )
    }
    export default RestaurantCard;

