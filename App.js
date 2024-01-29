import React from "react"
import  ReactDOM  from "react-dom/client"

const Header = () => {
    return(
        <div className="headerContainer">
           <div className="imageContainer">
            <img className="image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnn4m1Ap6mClU9fZq6esWlK8E6vIvB5mKk2T9XCxzs4QhA5LeOXh3EVy_HrM1_lgXDTxY&usqp=CAU"/>
           </div>
           <div className="navItems">
             <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
             </ul>
           </div>
        </div>
    )
}

const Search = () => {
    return(
        <div className="searchContainer">
          <div className="searchBar">
           <input placeholder="Search"/>
          </div>
          <button>Search</button>
        </div>
    )
}

const RestaurantCard = () => {
return(
    <div className="cardContainer">
      <img className="restroImage" src=""/>
    </div>
)
}

const Body = () => {
return(
    <Search/>
)
}

const AppLayout = () => {
return(
    <div className="app">
    <Header/>
    <Body/>
    </div>
)
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<AppLayout/>)
