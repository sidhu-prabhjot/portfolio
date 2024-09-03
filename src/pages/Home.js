import React from "react";

//styling
import "../styles/Home.css";

//images
import astronautPlanet from "../assets/astronaut_planet.png";

//react router dom
import { Link } from "react-router-dom";

//fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faLaptop,
  faStar,
  faUser,
  faEnvelope,
  faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";

import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

//spline
import Spline from "@splinetool/react-spline";

//prime react
import { Dock } from "primereact/dock";

const Home = () => {
  const iconColor = "#e7d6fc";

  const navItems = [
    {
      label: "Home",
      icon: () => (
        <Link to="/" alt="home">
          <FontAwesomeIcon
            style={{
              height: "42px",
              color: iconColor,
              margin: "0px 20px 10px 20px",
            }}
            icon={faHouse}
          />
        </Link>
      ),
    },
    {
      label: "About",
      icon: () => (
        <Link to="/about" alt="about">
          <FontAwesomeIcon
            style={{
              height: "42px",
              color: iconColor,
              margin: "0px 20px 10px 20px",
            }}
            icon={faUser}
          />
        </Link>
      ),
    },
    {
      label: "Skills",
      icon: () => (
        <Link to="/skills" alt="skills">
          <FontAwesomeIcon
            style={{
              height: "42px",
              color: iconColor,
              margin: "0px 20px 10px 20px",
            }}
            icon={faLaptop}
          />
        </Link>
      ),
    },
    {
      label: "Experience",
      icon: () => (
        <Link to="/experience" alt="experience">
          <FontAwesomeIcon
            style={{
              height: "42px",
              color: iconColor,
              margin: "0px 20px 10px 20px",
            }}
            icon={faStar}
          />
        </Link>
      ),
    },
    {
      label: "Projects",
      icon: () => (
        <Link to="/projects" alt="projects">
          <FontAwesomeIcon
            style={{
              height: "42px",
              color: iconColor,
              margin: "0px 20px 10px 20px",
            }}
            icon={faScrewdriverWrench}
          />
        </Link>
      ),
    },
    {
      label: "Contact",
      icon: () => (
        <Link to="/contact" alt="contact">
          <FontAwesomeIcon
            style={{
              height: "42px",
              color: iconColor,
              margin: "0px 20px 10px 20px",
            }}
            icon={faEnvelope}
          />
        </Link>
      ),
    },
  ];

  const socialItems = [
    {
      label: "Github",
      icon: () => (
        <Link to="/" alt="github">
          <FontAwesomeIcon
            style={{
              height: "42px",
              color: iconColor,
              margin: "0px 0px 20px 20px",
            }}
            icon={faGithub}
          />
        </Link>
      ),
    },
    {
      label: "Instagram",
      icon: () => (
        <Link to="/about" alt="instagram">
          <FontAwesomeIcon
            style={{
              height: "42px",
              color: iconColor,
              margin: "20px 0px 20px 20px",
            }}
            icon={faInstagram}
          />
        </Link>
      ),
    },
    {
      label: "LinkedIn",
      icon: () => (
        <Link to="/skills" alt="linkedin">
          <FontAwesomeIcon
            style={{
              height: "42px",
              color: iconColor,
              margin: "20px 0px 20px 20px",
            }}
            icon={faLinkedin}
          />
        </Link>
      ),
    },
    {
      label: "Email",
      icon: () => (
        <Link to="/experience" alt="email">
          <FontAwesomeIcon
            style={{
              height: "42px",
              color: iconColor,
              margin: "20px 0px 20px 20px",
            }}
            icon={faEnvelope}
          />
        </Link>
      ),
    },
  ];

  return (
    <div className={"home-main-container"}>
      <div className={"left-dock-container"}>
        <Dock model={socialItems} position={"left"} />
      </div>
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
      <div className={"dock-container"}>
        <Dock model={navItems} />
      </div>
    </div>
  );
};

export default Home;
