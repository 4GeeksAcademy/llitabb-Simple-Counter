//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import SecondsCounter from "./component/home.jsx";

setInterval(Counter, 1000);
let digit = 0;
function Counter() {
    if (digit < 100000) {
        digit = digit + 1;
        ReactDOM.render(<SecondsCounter seconds={digit} />, document.querySelector("#app"));
    }
}