import React from "react";
// import ReactDOM from "react-dom";
import "./styles.css";
import { BlurImageLoader } from "./BlurImageLoader";

// import small from "./assets/light3_.webp";
// import large from "./assets/light3.webp";

function App() {
  return (
    <div className="ImageDiv">
      <BlurImageLoader
       className="img"
         image={ process.env.PUBLIC_URL + "/light3.webp"}
        placeholder={ process.env.PUBLIC_URL +  "/light3_.webp"}
        width={2992}
        height={2134}
        ratio={71.323529411}
        rel="preload"
      />
    </div>
  );
}
export default App;
