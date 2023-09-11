import React from "react";
import "./Footer.css";
import { ImGithub } from "react-icons/im";
import { SiLinkedin } from "react-icons/si";
import { BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";

export const Footer = () => {
  const copyrightYear = new Date().getFullYear();

  return (
    <div className="footer">
      <small> &copy; {copyrightYear} VickyPrinz</small>
      <div className="social-links">
        <Link to="https://twitter.com/" target="_blank">
          <BsTwitter />
        </Link>
        <Link to="https://github.com/Vickyprinz" target="_blank">
          <ImGithub />
        </Link>
        <Link to="https://www.linkedin.com/" target="_blank">
          <SiLinkedin />
        </Link>
      </div>
    </div>
  );
};
