import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";

console.log("Process file", process.env);
ReactDOM.render(<App />, document.getElementById("root"));
