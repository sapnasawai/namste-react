// const heading = React.createElement("h1", {}, "Hello world from React");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
import React from "react";
import ReactDOM from "react-dom/client";
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("div", {}, "I'm an h1 tag"),
    React.createElement("div", {}, "I'm an h2 tag"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("div", {}, "I'm an h1 tag"),
    React.createElement("div", {}, "I'm an h2 tag"),
  ]),
]);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
