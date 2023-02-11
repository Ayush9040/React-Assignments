import React from "react";
import ReactDOM from "react-dom/client";

const Mhead = React.createElement("h1",{}, "h1 from react");
const Shead = React.createElement("h3",{class: "23"}, "h3");

const contain = React.createElement("div",{id: "oj"}, [Mhead, Shead]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(contain);