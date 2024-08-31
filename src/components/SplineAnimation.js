import { useRef } from "react";

import Spline from "@splinetool/react-spline";

const SplineAnimation = () => {
  const spline = useRef();

  function onLoad(splineApp) {
    // save the app in a ref for later use
    spline.current = splineApp;
  }

  return (
    <Spline scene="https://prod.spline.design/lMBgoJP992raUh8I/scene.splinecode" />
  );
};

export default SplineAnimation;
