import React from "react";
import avatar from "../assets/avatar.webp";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div className="home-page">
      <div className="self-introduce">
        <h1>Introduce myself</h1>
        <p>
          Hi I’m <span>Mack</span> from Malaysia. I’m a Front-end and Mobile
          Developer. I’m also interested in 3D stuff and animation
        </p>
        <Button className="contact-btn" variant="contained">
          <Link className="contact-btn-link" to="/contact">
            Contact me
          </Link>
        </Button>
      </div>
      <div className="image-wrapper">
        <img src={avatar} alt="this is a seal and i love it" />
        <h2>(i love seal)</h2>
      </div>
    </div>
  );
}
