import React from "react";
import ReactDOM from 'react-dom/client';




const heading1 = React.createElement("h1",{className: "main"}, {key: "main"} , "heading 1");

const heading2 = React.createElement("h2",{className: "sub", style: 'text-align: center' }, "heading 2");

const container = React.createElement("div", {id: "container"}, [heading1, heading2]);

// console.log(container);
// const home = document.getElementById("root");
// const ok = ReactDOM.createRoot(home);
// ok.render(container);

