import React from "react";
import avatar from "../assets/avatar.webp";

export default function Homepage() {
  return (
    <div className="home-page">
      <div className="self-introduce">
        <h1>Introduce myself</h1>
        <p>
          Hi I’m Mack from Malaysia and I’m interested in web and mobile
          Development. I’m also a little interested about 3D stuff and animation
        </p>
        <button>Contact me</button>
      </div>
      <div className="image-wrapper">
        <img src={avatar} alt="this is a seal and i love it" />
        <h2>(i love seal)</h2>
      </div>
    </div>
  );
}
