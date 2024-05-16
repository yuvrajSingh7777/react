import react from "react";
import ReactDOM from "react-dom/client";
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById("root"));

const h1 = <h1 className="heading" style={{ fontSize: "100px" }}>Heading</h1>

const H1 = ({data}) => {
    return (
        <div>
            <h1>{data}</h1>
        </div>
    )
}

// */ const Body = () => {
//     return (
//         <div>
//?             <H1 />
//?             <H1></H1>
//?             {H1()}
//?             {h1}
//         </div>
//     )
// }
const Body = () => {
    return (
        <div>
            <H1 data="yuvraj"/>
            <H1 data="Age"/>
            <H1 data="class"/>
            <H1 data="row"/>
            <H1 data="col"/>
            <H1 data="dasd"/>
            <H1 data="dfd"/>
            <H1 data="sdsds"/>
        </div>
    )
}

root.render(<Body />);