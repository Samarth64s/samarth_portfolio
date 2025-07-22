import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import profileImage from "../assets/Image/samarth.png";
import CountUp from "react-countup";

// ==================== Dynamic Data ====================

// Profile information
const homeInfo = {
  position: "Frontend Developer / Game Developer",
  name: "Samarth Malviya",
  about:
    "I excel at crafting elegant digital experiences and I am proficient in various programming languages and technologies.",
  profileImage: profileImage,
};

// Download CV Button
const buttons = [
  {
    text: "Download CV",
    href: "/assets/resume/Samarth_GameDeveloper.pdf",
    className:
      "px-6 py-2 border-2 border-green-400 text-green-400 rounded-full hover:bg-green-400 hover:text-black",
  },
];

// Social Media Links
const socialLinks = [
  { icon: <FaGithub />, href: "https://github.com/Samarth64s", name: "GitHub" },
  {
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/in/samarth-malviya-b64688112/",
    name: "LinkedIn",
  },
  // { icon: <FaTwitter />, href: "https://twitter.com/", name: "Twitter" },
  {
    icon: <FaYoutube />,
    href: "https://www.youtube.com/@Samarth_s_GameStudio",
    name: "YouTube",
  },
];

// Stats Section Data
const statsData = [
  { end: 1.5, text: "Years of Experience", decimals: 1 },
  { end: 10, text: "Projects Completed" },
  { end: 5, text: "Technologies Mastered" },
  { end: 100, text: "Code Commits" },
];

// ==================== Main Home Component ====================

const Home = () => {
  return (
    <div className="h-screen flex justify-center items-start bg-gray-900">
      <div className="h-auto flex flex-col w-full">
        {/* ==================== Top Section (Intro & Image) ==================== */}
        <section className="flex-1 py-[61px] flex items-center justify-center bg-gray-900 text-white mb-4">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 mx-auto max-w-[900px] lg:max-w-[1170px] w-full">
            {/* -------------------- Left Section (Text) -------------------- */}
            <div className="max-w-xl text-center lg:text-left mt-10">
              <p className="text-gray-400 text-xl">{homeInfo.position}</p>
              <h1 className="text-5xl font-bold mt-4">
                Hello I'm{" "}
                <span className="text-6xl font-audiowide text-green-400">
                  {homeInfo.name}
                </span>
              </h1>
              <p className="mt-6 text-gray-400 leading-relaxed">
                {homeInfo.about}
              </p>

              {/* Download Button & Social Media Links */}
              <div className="mt-8 flex flex-col lg:flex-row items-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-4">
                {buttons.map((btn, index) => (
                  <a
                    href={btn.href}
                    key={index}
                    className={btn.className}
                    download
                  >
                    {btn.text}
                  </a>
                ))}
                <div className="flex space-x-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-green-400 p-3 rounded-full hover:bg-green-400 hover:text-black transition"
                      aria-label={link.name}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* -------------------- Right Section (Profile Image with Rotating Border) -------------------- */}
            <div className="relative w-[250px] lg:w-[390px] aspect-square flex items-center justify-center mt-10">
              {/* Rotating Dashed Circle Border */}
              <svg
                className="absolute w-full h-full animate-spin-slow"
                viewBox="0 0 100 100"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="48"
                  stroke="#4ade80"
                  strokeWidth="1"
                  fill="none"
                  strokeDasharray="20 20"
                  strokeLinecap="round"
                  transform="rotate(-90 50 50)"
                />
              </svg>

              {/* Inner Circle Mask to Cover the Dashed Border Center */}
              <div className="absolute w-[235px] lg:w-[370px] aspect-square bg-gray-900 rounded-full z-10"></div>

              {/* Profile Image */}
              <img
                src={homeInfo.profileImage}
                alt="profile"
                className="w-[235px] lg:w-[370px] aspect-square rounded-full object-cover z-20"
              />
            </div>
          </div>
        </section>

        {/* ==================== Bottom Section (Stats) ==================== */}
        <section className="flex justify-center items-center w-full bg-gray-800 text-white py-6">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 px-6 xl:px-0 mx-auto md:max-w-[900px] lg:max-w-[1170px]">
            {statsData.map((item, index) => (
              <div
                key={index}
                className="flex flex-col lg:flex-row items-center justify-center text-center lg:text-left gap-y-2 lg:gap-y-0 lg:gap-x-4"
              >
                <h3 className="text-3xl md:text-4xl font-bold text-green-400 whitespace-nowrap">
                  <CountUp
                    start={0}
                    end={item.end}
                    duration={2}
                    decimals={item.decimals || 0}
                  />
                  +
                </h3>
                <p className="text-gray-400">{item.text}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
