import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import profileImage from "../assets/image/samarth.png";
import CountUp from "react-countup";

// ==================== Dynamic Data ====================

const homeInfo = {
  position: "Frontend Developer / Game Developer",
  name: "Samarth Malviya",
  about:
    "I excel at crafting elegant digital experiences and I am proficient in various programming languages and technologies.",
  profileImage: profileImage,
};

const buttons = [
  {
    text: "Download CV",
    href: "#",
    className:
      "px-6 py-2 border-2 border-green-400 text-green-400 rounded-full hover:bg-green-400 hover:text-black",
  },
];

const socialLinks = [
  { icon: <FaGithub />, href: "https://github.com/", name: "GitHub" },
  { icon: <FaLinkedin />, href: "https://linkedin.com/", name: "LinkedIn" },
  { icon: <FaTwitter />, href: "https://twitter.com/", name: "Twitter" },
  { icon: <FaYoutube />, href: "https://youtube.com/", name: "YouTube" },
];

const statsData = [
  { end: 1.5, text: "Years of Experience", decimals: 1 },
  { end: 15, text: "Projects Completed" },
  { end: 5, text: "Technologies Mastered" },
  { end: 100, text: "Code Commits" },
];

// ==================== Component ====================

const Home = () => {
  return (
    <div className="h-auto flex flex-col bg-gray-900">
      {/* Top Section */}
      <section className="flex-1 py-20 flex items-center justify-center bg-gray-900 text-white mb-4 md:mb-0">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-8 mx-auto md:max-w-[900px] lg:max-w-[1170px] w-full">
          {/* Left Content */}
          <div className="max-w-xl text-center md:text-left mt-10 md:mt-0">
            <p className="text-gray-400 text-xl md:text-2xl">
              {homeInfo.position}
            </p>
            <h1 className="text-5xl md:text-7xl font-bold mt-4">
              Hello I'm <span className="text-green-400">{homeInfo.name}</span>
            </h1>
            <p className="mt-6 text-gray-400 leading-relaxed">
              {homeInfo.about}
            </p>

            <div className="mt-8 flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4">
              {buttons.map((btn, index) => (
                <a href={btn.href} key={index} className={btn.className}>
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

          {/* Right Image */}
          <div className="relative w-[250px] md:w-[400px] aspect-square rounded-full border-4 border-dashed border-green-400 flex items-center justify-center">
            <img
              src={homeInfo.profileImage}
              alt="profile"
              className="w-[240px] md:w-[390px] aspect-square rounded-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Bottom Stats Section */}
      <section className="flex-none bg-gray-800 text-white py-6">
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
  );
};

export default Home;
