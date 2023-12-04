import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";

const HeadingCompontent = () => {
  return (
    <div className="header-container">
      <div className="logo-container">
        <img
          src="https://www.pngitem.com/pimgs/m/69-694729_91-93-online-food-ordering-logo-hd-png.png"
          alt="This is food ordering company's logo"
          width={200}
        />
      </div>
      <input
        className="search-box"
        type="text"
        placeholder="Search"
        value={"Sapna"}
      />
      {/* <div
        className="user-icon"
        style={{ border: 1, backgroundColor: "GrayText" }}
      > */}
      <FontAwesomeIcon size="50" className="user-icon" icon={faUser} />
      {/* </div> */}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingCompontent />);
