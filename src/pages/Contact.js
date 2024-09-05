import React from "react";

import "../styles/Contact.css";

//material ui
import TextField from "@mui/material/TextField";
import ResizableTextarea from "../components/ResizableTextArea";

import Particles from "react-particles";
import { loadStarsPreset } from "tsparticles-preset-stars";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faLaptop,
  faStar,
  faUser,
  faEnvelope,
  faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";

import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import { Dock } from "primereact/dock";

const Skills = () => {
  const iconColor = "#99f1f6";

  const navItems = [
    {
      label: "Home",
      icon: () => (
        <Link to="/">
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
        <Link to="/about">
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
        <Link to="/skills">
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
        <Link to="/experience">
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
        <Link to="/projects">
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
        <Link to="/contact">
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
        <Link to="/">
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
        <Link to="/about">
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
        <Link to="/skills">
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
        <Link to="/experience">
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

  const particleOptions = { preset: "stars" };

  const customInit = async (engine) => {
    const test = await loadStarsPreset(engine);
    return test;
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    ...theme.applyStyles("dark", {
      backgroundColor: "#1A2027",
    }),
  }));

  return (
    <div className={"page-container"}>
      <div className={"hero-container"}>
        <div className={"left-dock-container"}>
          <Dock model={socialItems} position={"left"} />
        </div>
        <div className={"header-container"}>
          <h1 className={"header-text name-text neon-glow-text"}>Contact Me</h1>
        </div>
        <div className={"contact-me-container"}>
          <div className={"contact-me-name-input-container"}>
            <TextField id="filled-basic" label="Filled" variant="filled" />
          </div>
          <div className={"contact-me-email-input-container"}>
            <TextField id="filled-basic" label="Filled" variant="filled" />
          </div>
          <div className={"contact-me-message-input-container"}>
            <ResizableTextarea />
          </div>
          <div className={"contact-me-submit-button-container"}></div>
          <div className={"contact-me-copyright-text-container"}></div>
        </div>
        <div className={"skills-dock-container"}>
          <Dock model={navItems} />
        </div>
      </div>
      <Particles
        className="particles"
        options={particleOptions}
        init={customInit}
      />
    </div>
  );
};

export default Skills;
