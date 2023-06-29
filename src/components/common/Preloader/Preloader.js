import React from "react";
import loader from "../../../assets/image/loader.gif";

let Preloader = (props) => {
  return (
    <div style={{ backgroundColor: "white" }}>
      <img srcSet={loader} alt="loading" />
    </div>
  );
};

export default Preloader;
