import react from "react";
import ReactDOM from "react-dom/client";



const root = ReactDOM.createRoot(document.getElementById("root"));

const h1 = react.createElement("h1", {style:{color:"red",fontSize:"100px"},id:"heading"}, "hello world");

const div=react.createElement("div",{},h1)


root.render(div);