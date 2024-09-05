//styling
import "../styles/SocialDock.css";

//prime react
import { Dock } from "primereact/dock";

//react router dom
import { Link } from "react-router-dom";

//fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const SocialDock = () => {
  const iconColor = "#e7d6fc";

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
    <div className={"left-dock-container"}>
      <Dock model={socialItems} position={"left"} />
    </div>
  );
};

export default SocialDock;
