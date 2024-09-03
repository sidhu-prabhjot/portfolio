import React from "react";
import "../styles/Skills.css";
import Particles from "react-particles";
import { loadStarsPreset } from "tsparticles-preset-stars";
import astronautStandingPlanet from "../assets/astronaut_standing_planet.png";
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
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Spline from "@splinetool/react-spline";
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

  const splineLanguagesUrl = [
    {
      url: "https://prod.spline.design/C85KBNMnBTZ-nJXK/scene.splinecode",
      title: "HTML",
      bullets: [],
    },
    {
      url: "https://prod.spline.design/vDu7CuFXLCTn9d4a/scene.splinecode",
      title: "CSS",
      bullets: [],
    },
    {
      url: "https://prod.spline.design/roGowL003CiJ97qC/scene.splinecode",
      title: "JavaScript",
      bullets: [],
    },
    {
      url: "https://prod.spline.design/jKcE6j1TgBVVYhhW/scene.splinecode",
      title: "Java",
      bullets: [],
    },
    {
      url: "https://prod.spline.design/3eGVyo6INRCABJcO/scene.splinecode",
      title: "Python",
      bullets: [],
    },
    {
      url: "https://prod.spline.design/1w0pd12j7fEghmbh/scene.splinecode",
      title: "TypeScript",
      bullets: [],
    },
    {
      url: "https://prod.spline.design/eOmxNo0hHE27F1tt/scene.splinecode",
      title: "C",
      bullets: [],
    },
  ];

  const splineFrameworksUrl = [
    {
      url: "https://prod.spline.design/bcCa5mqKr9IZJ-gl/scene.splinecode",
      title: "React",
      bullets: ["React.js", "React Native"],
    },
    {
      url: "https://prod.spline.design/O0bf2iPirqCVrpG8/scene.splinecode",
      title: "Unity",
      bullets: [],
    },
    {
      url: "https://prod.spline.design/9Pos-ZXVB84Fg2iC/scene.splinecode",
      title: "Node.js",
      bullets: [],
    },
    {
      url: "https://prod.spline.design/yO1WLQa6kUau129f/scene.splinecode",
      title: "Pytorch",
      bullets: [],
    },
    {
      url: "https://prod.spline.design/U6JgYjaylr-pvWWp/scene.splinecode",
      title: "GraphQL",
      bullets: [],
    },
    {
      url: "https://prod.spline.design/9jYYfiagwEzyWe38/scene.splinecode",
      title: "SQL",
      bullets: ["SQLite", "MySQL"],
    },
  ];

  const splineDevToolsUrl = [
    {
      url: "https://prod.spline.design/fll2uOz1qwqRE7hm/scene.splinecode",
      title: "Git",
      bullets: ["Github", "Gitlab"],
    },
    {
      url: "https://prod.spline.design/KLmEnJOaK9th5-7z/scene.splinecode",
      title: "VSCode",
      bullets: [],
    },
    {
      url: "https://prod.spline.design/sZddro7crecp-Se0/scene.splinecode",
      title: "Amazon Web Services",
      bullets: ["Amplify", "Lambda", "DynamoDB"],
    },
    {
      url: "https://prod.spline.design/JIyGfnZjgW5glKsG/scene.splinecode",
      title: "Google Cloud Platform",
      bullets: ["Cloud Functions", "Cloud Storage"],
    },
    {
      url: "https://prod.spline.design/k07Af1-MPozET7BU/scene.splinecode",
      title: "Firebase",
      bullets: [
        "Authentication",
        "Cloud Functions",
        "Realtime Database",
        "Firestore",
      ],
    },
  ];

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
                here is a list of my skills
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
          <h1 className={"header-text name-text neon-glow-text"}>My Skills</h1>
        </div>
        <div className={"click-to-open-container"}>
          <div className={"click-to-open-text-container"}>
            <h3 className={"click-to-open-text"}>
              click to <br /> open message
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
        <div className={"skills-dock-container"}>
          <Dock model={navItems} />
        </div>
      </div>
      <div className={"planet-gap-container"}></div>
      <div className={"skills-container"}>
        <h1 className={"skill-title"}>Languages and Markups</h1>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 12 }}
            columns={{ xs: 4, sm: 8, md: 20 }}
          >
            {splineLanguagesUrl.map((item, index) => (
              <Grid key={index} size={{ xs: 2, sm: 4, md: 4 }}>
                <div className={"skill-card-container"}>
                  <Item sx={{ background: "transparent" }}>
                    <Spline scene={item.url} width={250} height={250} />
                  </Item>
                  <h2 style={{ fontFamily: "roboto, sans-serif" }}>
                    {item.title}
                  </h2>
                  {item.bullets.length > 0 && (
                    <ul style={{ textAlign: "left", marginTop: "10px" }}>
                      {item.bullets.map((bullet, idx) => (
                        <li
                          style={{
                            fontFamily: "roboto, sans-serif",
                            padding: "4px 0px 4px 0px",
                          }}
                          key={idx}
                        >
                          <h3 style={{ fontFamily: "roboto, sans-serif" }}>
                            {bullet}
                          </h3>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </Grid>
            ))}
          </Grid>
        </Box>
        <h1 className={"skill-title"}>Frameworks and Technologies</h1>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 12 }}
            columns={{ xs: 4, sm: 8, md: 20 }}
          >
            {splineFrameworksUrl.map((item, index) => (
              <Grid key={index} size={{ xs: 2, sm: 4, md: 4 }}>
                <div className={"skill-card-container"}>
                  <Item sx={{ background: "transparent" }}>
                    <Spline scene={item.url} width={250} height={250} />
                  </Item>
                  <h2 style={{ fontFamily: "roboto, sans-serif" }}>
                    {item.title}
                  </h2>
                  {item.bullets.length > 0 && (
                    <ul style={{ textAlign: "left", marginTop: "10px" }}>
                      {item.bullets.map((bullet, idx) => (
                        <li
                          style={{
                            fontFamily: "roboto, sans-serif",
                            padding: "4px 0px 4px 0px",
                          }}
                          key={idx}
                        >
                          <h3 style={{ fontFamily: "roboto, sans-serif" }}>
                            {bullet}
                          </h3>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </Grid>
            ))}
          </Grid>
        </Box>
        <h1 className={"skill-title"}>Developer Tools</h1>
        <Box className={"skill-section-container"} sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 12 }}
            columns={{ xs: 4, sm: 8, md: 20 }}
          >
            {splineDevToolsUrl.map((item, index) => (
              <Grid key={index} size={{ xs: 2, sm: 4, md: 4 }}>
                <div className={"skill-card-container"}>
                  <Item sx={{ background: "transparent" }}>
                    <Spline scene={item.url} width={250} height={250} />
                  </Item>
                  <h2 style={{ fontFamily: "roboto, sans-serif" }}>
                    {item.title}
                  </h2>
                  {item.bullets.length > 0 && (
                    <ul style={{ textAlign: "left", marginTop: "10px" }}>
                      {item.bullets.map((bullet, idx) => (
                        <li
                          style={{
                            fontFamily: "roboto, sans-serif",
                            padding: "4px 0px 4px 0px",
                          }}
                          key={idx}
                        >
                          <h3 style={{ fontFamily: "roboto, sans-serif" }}>
                            {bullet}
                          </h3>
                        </li>
                      ))}
                    </ul>
                  )}
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

export default Skills;
