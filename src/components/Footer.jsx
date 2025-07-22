import React from "react";
import { FiGithub, FiLinkedin, FiYoutube } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 px-4">
      <div className="max-w-[1170px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Samarth | All Rights Reserved
        </p>

        <div className="flex gap-4 text-lg">
          <a
            href="https://github.com/Samarth64s"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FiGithub />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FiLinkedin />
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FiYoutube />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
