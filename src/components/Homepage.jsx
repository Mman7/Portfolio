import React from "react";
import avatar from "../assets/avatar.webp";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { Icon } from "@material-ui/core";
import FlutterIcon from "../assets/Icons/flutter-logo.svg";
import ReactIcon from "../assets/Icons/react-1.svg";
import FigmaIcon from "../assets/Icons/figma-1.svg";
import SassIcon from "../assets/Icons/sass-1.svg";
import MUIIcon from "../assets/Icons/material-ui-1.svg";

export default function Homepage() {
  return (
    <div className="home-page">
      <div className="self-introduce">
        <h1>Introduce myself</h1>
        <p>
          Hi I’m <span>Mack</span> from Malaysia. I’m a Front-end and Mobile
          Developer. I’m also interested in 3D stuff and animation
        </p>
        <div className="skill-icons">
          <Icon>
            <img className="skill-icon" src={FlutterIcon} alt="flutter-icon" />
            <img className="skill-icon" src={ReactIcon} alt="react-icon" />
            <img className="skill-icon" src={FigmaIcon} alt="figma-icon" />
            <img className="skill-icon" src={SassIcon} alt="Sass-icon" />
            <img className="skill-icon" src={MUIIcon} alt="MaterialUI-icon" />
          </Icon>
        </div>
        <Button className="contact-btn" variant="contained">
          <Link className="contact-btn-link" to="/contact">
            Contact me
          </Link>
        </Button>
      </div>
      <div className="image-wrapper">
        <img
          className="avatar"
          src={avatar}
          alt="this is a seal and i love it"
        />
        <h2>(i love seal)</h2>
      </div>
    </div>
  );
}
