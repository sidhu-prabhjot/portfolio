import React, { useCallback } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

//styling
import "../styles/Projects.css";

//particles
import Particles from "react-particles";
import { loadStarsPreset } from "tsparticles-preset-stars";

//images
import astronautStandingPlanet from "../assets/astronaut_standing_planet.png";
import piSubtitleEditorImage from "../assets/pi_subtitle_editor.png";
import sentimentClassifierImage from "../assets/sentiment_classifier.png";
import prabhjotWeatherImage from "../assets/prabhjot_weather.png";
import kungFu from "../assets/kung_fu.png";
import pacman from "../assets/pacman.png";
import molecule from "../assets/molecule.png";
import omnifood from "../assets/omnifood.png";

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

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

const Projects = () => {
  const iconColor = "#99f1f6";
  const theme = useTheme();

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

  const particleOptions = {
    preset: "stars",
  };

  const customInit = async (engine) => {
    // this adds the preset to tsParticles, you can safely use the
    const test = await loadStarsPreset(engine);
    return test;
  };

  const projectInformation = [
    {
      image: piSubtitleEditorImage,
      title: "Perimeter Institute Subtitle Editor",
      summary:
        "This tool is designed for efficient subtitle management and editing. It supports SRT and VTT subtitle formats, as well as an app-specific JSON file for additional functionality. The editor displays all subtitles along with their individual data, allowing users to view and manage them effectively. It also includes a feature for uploading the corresponding video to synchronize subtitles and make necessary edits.",
    },
    {
      image: sentimentClassifierImage,
      title: "ML Sentiment Classifer",
      summary:
        "This application enables users to upload text that expresses sentiment, and utilizes a trained sentiment classification language model to analyze the text. It determines whether the sentiment conveyed is positive or negative, providing clear insights into the emotional tone of the input.",
    },
    {
      image: prabhjotWeatherImage,
      title: "Weather Application",
      summary:
        "This versatile weather application offers comprehensive daily weather information, including hourly forecasts, UV index, and precipitation levels. Users can easily search for weather updates in various cities and switch between imperial and metric systems. The app supports both dark mode and light mode for personalized viewing preferences. Additionally, it provides detailed insights into other relevant weather indexes, ensuring users stay well-informed about current and forecasted conditions.",
    },
    {
      image: kungFu,
      title: "Kung-Fu A3C Deep Reinforcement Learning",
      summary:
        "This project focuses on training an AI model to play Atari's \"Kung-Fu Master\" using the A3C (Asynchronous Actor-Critic Agents) algorithm within Gymnasium's Atari Kung-Fu Master environment. The model leverages advanced reinforcement learning techniques to improve its gameplay, utilizing asynchronous updates and policy gradient methods to master the game.",
    },
    {
      image: pacman,
      title: "Pac-Man Deep Convolutional Q-Learning",
      summary:
        "This project involves training an AI model to play Atari's \"Pac-Man\" using Deep Convolutional Q-Learning (DQN) within Gymnasium's Atari Pac-Man environment. The model employs deep convolutional neural networks to learn and optimize its gameplay strategies, enhancing its performance through advanced reinforcement learning techniques tailored for the iconic arcade game.",
    },
    {
      image: molecule,
      title: "3D Molecule Viewer",
      summary:
        "This application allows users to upload SDF (Structure Data File) files, which contain detailed information about molecules. The viewer renders these molecules in 3D space, enabling users to explore and examine their structure visually. Users can interact with the 3D model by rotating it to view the molecule from different angles, providing an intuitive and comprehensive way to analyze molecular structures.",
    },
    {
      image: omnifood,
      title: "Omnifood Website",
      summary:
        "A premium healthy food delivery service website. It  presents a sleek, modern interface to showcase the company, app, and services. It offers a user-friendly experience where customers can easily explore healthy meal options, view detailed pricing information, and learn about the benefit.",
    },
  ];

  return (
    <div className={"page-container"}>
      <div className={"hero-container"}>
        <div className={"left-dock-container"}>
          <Dock model={socialItems} position={"left"} />
        </div>
        <div className={"header-container"}>
          <div className={"greeting-container"}>
            <div className={"greeting-title-container greeting-top-title"}>
              <div className={"greeting-rectangle"}></div>
              <h2
                className={
                  "greeting-title greeting-sub-text normal-text greeting-top-title-text"
                }
              >
                a message from earth
              </h2>
            </div>
            <div>
              <h1 className={"header-text greeting-title-text neon-glow-text"}>
                here are some projects I have built
              </h1>
            </div>
            <div
              className={
                "greeting-title-container greeting-title greeting-bottom-title"
              }
            >
              <h2
                className={
                  "greeting-title greeting-sub-text normal-text greeting-bottom-title-text"
                }
              >
                a message from earth
              </h2>
              <div className={"greeting-rectangle"}></div>
            </div>
          </div>
          <h1 className={"header-text name-text neon-glow-text"}>
            My Projects
          </h1>
        </div>
        <div className={"click-to-open-container"}>
          <div className={"click-to-open-text-container"}>
            <h3 className={"click-to-open-text"}>
              click to <br></br> open message
            </h3>
          </div>
        </div>
        <div className={"astronaut-standing-planet-image-container"}>
          <img
            src={astronautStandingPlanet}
            alt="cartoon astronaut sitting on glowing planet Earth"
            style={{ width: "1050px", height: "auto" }}
          />
        </div>
        <div className={"dock-container"}>
          <Dock model={navItems} />
        </div>
      </div>
      <div className={"planet-gap-container"}></div>
      <div className={"full-stack-projects-container"}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {projectInformation.map((item, index) => (
              <Grid key={index} size={{ xs: 2, sm: 4, md: 4 }}>
                <div
                  className={"project-card-container"}
                  style={{ overflow: "hidden" }}
                >
                  <Item
                    sx={{
                      backgroundColor: "transparent",
                      margin: "8px 0px 8px 0px",
                    }}
                  >
                    <div className={"project-card-image-container"}>
                      <img
                        src={item.image}
                        style={{ height: "250px", width: "auto" }}
                        alt="perimeter institute subtitle editor"
                      />
                      <h2
                        style={{
                          fontFamily: "roboto, sans-serif",
                          color: "#ffffff",
                        }}
                      >
                        {item.title}
                      </h2>
                      <h3
                        style={{
                          fontFamily: "roboto, sans-serif",
                          color: "#ffffff",
                        }}
                      >
                        {item.summary}
                      </h3>
                    </div>
                  </Item>
                </div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
      <Particles
        className="particles"
        options={particleOptions}
        init={customInit}
      />
    </div>
  );
};

export default Projects;
