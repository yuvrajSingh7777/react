import react from "react";
import ReactDOM from "react-dom/client";
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById("root"));

const h1 = <h1 className="heading" style={{fontSize:"100px"}}>Heading</h1>

root.render(h1);