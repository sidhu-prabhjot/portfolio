import React from "react";

//styling
import "../styles/Home.css";

//images
import astronautPlanet from "../assets/astronaut_planet.png";

//components
import NavigationDock from "../components/NavigationDock";
import SocialDock from "../components/SocialDock";

const Home = () => {
  return (
    <div className={"home-main-container"}>
      <SocialDock />
      <div className={"home-header-container"}>
        <div className={"home-greeting-container"}>
          <div
            className={"home-greeting-title-container home-greeting-top-title"}
          >
            <div className={"home-greeting-rectangle"}></div>
            <h2
              className={
                "home-greeting-title home-greeting-sub-text home-normal-text home-greeting-top-title-text"
              }
            >
              a message from earth
            </h2>
          </div>
          <div>
            <h1
              className={
                "home-header-text home-greeting-title-text home-neon-glow-text"
              }
            >
              hello fellow galaxy member
            </h1>
          </div>
          <div
            className={
              "home-greeting-title-container home-greeting-title home-greeting-bottom-title"
            }
          >
            <h2
              className={
                "home-greeting-title home-greeting-sub-text home-normal-text home-greeting-bottom-title-text"
              }
            >
              a message from earth
            </h2>
            <div className={"home-greeting-rectangle"}></div>
          </div>
        </div>
        <h1 className={"home-header-text home-name-text home-neon-glow-text"}>
          i am prabhjot
        </h1>
      </div>
      <div className={"home-click-to-open-container"}>
        <div className={"home-click-to-open-text-container"}>
          <h3 className={"home-click-to-open-text"}>
            click to <br></br> open message
          </h3>
        </div>
      </div>
      <div className={"astronaut-planet-image-container"}>
        <img
          src={astronautPlanet}
          alt="cartoon astronaut sitting on glowing planet Earth"
          style={{ width: "1500px", height: "auto" }}
        />
      </div>
      <NavigationDock />
    </div>
  );
};

export default Home;
