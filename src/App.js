import "./App.css";

import { useRef, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import About from "./pages/About";
import Contact from "./pages/Contact";

import Spline from "@splinetool/react-spline";

function App() {
  const spline = useRef();

  const [rocketVisible, setRocketVisible] = useState(false);
  const [astronautVisible, setAstronautVisible] = useState(false);

  function onLoad(splineApp) {
    // save the app in a ref for later use
    spline.current = splineApp;
  }

  function triggerRocketAnimation() {
    if (!rocketVisible) {
      spline.current.emitEvent("mouseDown", "Button");
      setRocketVisible(true);
      setAstronautVisible(false);
    } else {
      spline.current.emitEventReverse("mouseDown", "Button");
      setRocketVisible(false);
      setAstronautVisible(true);
    }
  }

  function triggerAstronautAnimation() {
    if (!astronautVisible) {
      spline.current.emitEvent("mouseDown", "Button 2");
      setAstronautVisible(true);
      setRocketVisible(false);
    } else {
      spline.current.emitEventReverse("mouseDown", "Button 2");
      setAstronautVisible(false);
      setRocketVisible(true);
    }
  }

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
    // <div className={"main-container"}>
    //   {/* <Spline
    //     scene="https://prod.spline.design/lMBgoJP992raUh8I/scene.splinecode"
    //     onLoad={onLoad}
    //   />
    //   <button type="button" onClick={triggerRocketAnimation}>
    //     Trigger Spline Animation
    //   </button>
    //   <button type="button" onClick={triggerAstronautAnimation}>
    //     Trigger Spline Animation
    //   </button> */}
    //   <Spline scene="https://prod.spline.design/3quvBPxcTbX-ciES/scene.splinecode" />
  );
}

export default App;
