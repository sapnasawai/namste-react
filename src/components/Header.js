const Header = () => {
    return(
        <div className="headerContainer">
           <div className="imageContainer">
            <img className="image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnn4m1Ap6mClU9fZq6esWlK8E6vIvB5mKk2T9XCxzs4QhA5LeOXh4EVy_HrM1_lgXDTxY&usqp=CAU"/>
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

export default Header;