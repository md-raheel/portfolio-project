import React from "react";
import ScreenShots from "./ScreenShots";

const importAll = (r) => {
  return r.keys().map(r);
};
const images = importAll(
  require.context("../Assets/screenShots/timer", false, /\.(png|jpe?g|svg)$/)
);

const Clocky = () => {
  return (
    <div>
      <ScreenShots images={images} />
    </div>
  );
};

export default Clocky;
