import React, { useCallback } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";

//styling
import "../styles/Experience.css";

//particles
import Particles from "react-particles";
import { loadStarsPreset } from "tsparticles-preset-stars";

//images
import astronautStandingPlanet from "../assets/astronaut_standing_planet.png";
import khanda from "../assets/khanda.png";
import perimeterInstitute from "../assets/perimeter_institute.jpg";
import universityOfGuelph from "../assets/uofg.png";

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

//prime react
import { Dock } from "primereact/dock";
import { Timeline } from "primereact/timeline";
import { Card } from "primereact/card";
import { Button } from "primereact/button";

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

const Experience = () => {
  const iconColor = "#99f1f6";

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

  const events = [
    {
      status: "Perimeter Institute: IT DevOps and Cloud Programmer Co-op",
      date: "May 2024 - August 2024",
      icon: perimeterInstitute,
      summary:
        "At Perimeter Institute, I developed and executed Node.js scripts to streamline Thinkific enrollments, achieving significant cost savings. I created a custom subtitle and transcription editor using React.js and Node.js, enhancing the editing of AI-generated subtitles. I also built a user-friendly dashboard for faculty, offering valuable insights into student and course data, and conducted stakeholder demos to clearly communicate technical details and project progress.",
      color: "#9C27B0",
    },
    {
      status: "University of Guelph OAC/COA: Web Developer Co-op",
      date: "September 2023 - May 2024",
      icon: universityOfGuelph,
      summary:
        "At the College of Arts / Ontario Agricultural College, I transitioned web pages from Drupal 7 to Drupal 9, enhancing functionality and security. I deployed streamlined, modular web pages to optimize user experience and navigation. Leveraged Microsoft Azure SQL databases for efficient employee and vehicle tracking, and led a team of web developers in redesigning websites to boost student recruitment.",
      color: "#673AB7",
    },
    {
      status: "Student Desk Clerk",
      date: "November 2021 - April 2023",
      icon: universityOfGuelph,
      summary:
        "As a Student Desk Clerk, I work with a team to deliver excellent services to residence students. This involves coordinating the distribution of supplies and packages, tracking them via Star Rez, and using effective communication to keep students informed about their residence and essential information. The role requires rapid learning to adapt to new challenges, including mastering new computer applications and procedures.",
      color: "#FF9800",
    },
    {
      status: "Guelph Sikh Society Developer Volunteer",
      date: "Summer 2021",
      icon: khanda,
      summary:
        "As a volunteer developer for the Guelph Sikh Society, I conducted meetings with the council to understand their needs and requests for an app. I researched the society’s demographics and engagement methods to inform development. Using React Native, I created an app designed to connect the community, particularly younger members, with the council, enhancing communication and engagement within the society.",
      color: "#607D8B",
    },
  ];

  const customizedMarker = (item) => {
    return (
      <span
        className="flex w-2rem h-2rem align-items-center justify-content-center text-white border-circle z-1 shadow-1"
        style={{ backgroundColor: "transparent" }}
      >
        <img
          src={item.icon}
          style={{ height: "48px", width: "auto", borderRadius: "5px" }}
        />
      </span>
    );
  };

  const customizedContent = (item) => {
    return (
      <div className={"timeline-card-container"}>
        <Card className={"timeline-card"}>
          <h1
            style={{
              fontFamily: "roboto, sans-serif",
            }}
          >
            {item.status}
          </h1>
          <h2
            style={{
              fontFamily: "roboto, sans-serif",
            }}
          >
            {item.date}
          </h2>
          <h3
            style={{
              fontFamily: "roboto, sans-serif",
            }}
          >
            {item.summary}
          </h3>
        </Card>
      </div>
    );
  };

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
                some of my work experience
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
            my expierence
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
        <div className={"experience-dock-container"}>
          <Dock model={navItems} />
        </div>
      </div>
      <div className={"planet-gap-container"}></div>
      <div className={"experience-container"}>
        <Timeline
          value={events}
          align="alternate"
          className="customized-timeline"
          marker={customizedMarker}
          content={customizedContent}
        />
      </div>
      <Particles
        className="particles"
        options={particleOptions}
        init={customInit}
      />
    </div>
  );
};

export default Experience;
