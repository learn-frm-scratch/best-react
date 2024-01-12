// imported react and reactdom from nodemodule folder
import React from "react";
import ReactDOM  from "react-dom/client";
// import "./index.css";
// import userIcon from "./user-image.png";

// if we would have nested elements, below is the idea -
const parent = React.createElement("div", {}, [
    React.createElement("div", {id:"child"}, "Hello Child 1" ),
    React.createElement("div", {id:"child 2"}, "Hello Child 2"),
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
