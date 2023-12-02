// const heading = React.createElement("h1", {}, "Hello world from React");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", { id: "heading" }, "Namste React 🚀");
console.log(heading);

// JS Engine doesn't understand JSX(Transpiled before it reches browser) = Parcel -> Babel

// JSX(transpiled) => React.createElement => React Element(JS- object) => HTMLElement Render
// React Element
const jsxheading = <h1>Namste React Using JSX 🚀</h1>;

const TitleComponent = () => {
  <h1 className="head" tabIndex={5}>
    Namste React Using JSX 🚀
  </h1>;
};

// React Component
const HeadingCompontent = () => {
  <div id="container">
    <TitleComponent />
    <h1>Namste React Functional Component</h1>
  </div>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingCompontent />);
