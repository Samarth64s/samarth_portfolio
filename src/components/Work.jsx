import React, { useState } from "react";
import { FiArrowUpRight, FiGithub, FiYoutube } from "react-icons/fi";
import sharpShooterImg from "../assets/project/sharpShooter.png";

// ----------------- Work Component ------------------
const Work = () => {
  // State for managing active category tab
  const [category, setCategory] = useState("Company Project");

  // State for managing currently displayed project within the category
  const [current, setCurrent] = useState(0);

  // ------------- Project Data --------------
  const projects = [
    // Company Projects
    {
      id: "01",
      title: "Fukey Education",
      description:
        "Contributed to the development of a mobile application for Fukey Education at Dhiyotech, with a focus on frontend development and UI animations. ",
      tech: ["Angular", "Html 5", "Css 3", "Javascript"],
      image: "",
      github: "",
      live: "",
      youtube: "",
      category: "Company Project",
    },
    {
      id: "02",
      title: "The Nami",
      description:
        "Contributed at Dhiyotech to the development of a Shopify eCommerce website, focusing on frontend design, theme customization, and user experience.",
      tech: ["Shopify"],
      image: "",
      github: "",
      live: "",
      youtube: "",
      category: "Company Project",
    },
    {
      id: "03",
      title: "JeevJanto Dhaboard",
      description:
        "Contributed to the development of the JeevJanto Dashboard at Dhiyotech, leveraging Angular for a dynamic and responsive frontend and Firebase for backend services, including real-time database and authentication.",
      tech: ["Angular", "Firebase"],
      image: "",
      github: "",
      live: "",
      youtube: "",
      category: "Company Project",
    },
    {
      id: "04",
      title: "The Royal Kitches",
      description:
        "At Level Up Technology, developed The Royal Kitchen eCommerce website using WordPress, with responsibilities including theme customization, WooCommerce setup, and payment gateway integration to enhance the online shopping experience.",
      tech: ["Angular", "Firebase"],
      image: "",
      github: "",
      live: "",
      youtube: "",
      category: "Company Project",
    },
    {
      id: "05",
      title: "Multiple Dashboards",
      description:
        "At Varlyq Technology, I developed 4 individual dashboards using React. My work involved creating reusable components, implementing responsive UI with Tailwind CSS, and maintaining clean, scalable code across each project.",
      tech: ["React", "Tailwind CSS"],
      image: "",
      github: "",
      live: "",
      youtube: "",
      category: "Company Project",
    },
    {
      id: "06",
      title: "Surshree Dashboard",
      description:
        "Contributed to the development of the SurShree Dashboard at Dhiyotech, leveraging Angular for a dynamic and responsive frontend and java for backend services, including real-time database and authentication.",
      tech: ["Angular", "Java"],
      image: "",
      github: "",
      live: "",
      youtube: "",
      category: "Company Project",
    },

    // Unity Game Project
    {
      id: "07",
      title: "Sharp Shooter Game",
      description: "A 3D shooting game made with Unity.",
      tech: ["Unity", "C#"],
      image: sharpShooterImg,
      github: "https://github.com/Samarth64s/sharp_shooter_game",
      live: " ",
      youtube: "https://www.youtube.com/watch?v=ro6E2SguGy0",
      category: "Personal",
    },

    // Freelance Project
    {
      id: "08",
      title: "Not Starting",
      description: "Not available",
      tech: ["React.js", "Tailwind CSS"],
      image: "",
      github: "https://github.com/Samarth64s/freelance-landing",
      live: "https://freelance-landing-page.netlify.app",
      youtube: "",
      category: "Freelance",
    },
  ];

  // Filter projects based on selected category tab
  const filteredProjects = projects.filter(
    (project) => project.category === category
  );

  // ----------------- Project Navigation Functions -----------------
  const nextProject = () => {
    setCurrent((prev) => (prev + 1) % filteredProjects.length);
  };

  const prevProject = () => {
    setCurrent(
      (prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length
    );
  };

  // ----------------- Current Displayed Project -----------------
  const project = filteredProjects[current];
  const projectNumber = (current + 1).toString().padStart(2, "0");

  return (
    <div className="h-screen overflow-hidden bg-gray-900 text-white flex flex-col items-center justify-start px-4 py-10 md:py-0">
      <div className="flex flex-col items-center justify-center w-full lg:max-w-[1170px] md:max-w-[900px]">
        {/* ----------------- Category Tabs ------------------ */}
        <div className="flex flex-col md:flex-row md:gap-8 gap-4 my-10 text-center md:text-left">
          <p
            onClick={() => {
              setCategory("Company Project");
              setCurrent(0);
            }}
            className={`cursor-pointer pb-2 ${
              category === "Company Project"
                ? "border-b-2 border-green-500 text-green-500"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Company Project
          </p>
          <p
            onClick={() => {
              setCategory("Personal");
              setCurrent(0);
            }}
            className={`cursor-pointer pb-2 ${
              category === "Personal"
                ? "border-b-2 border-green-500 text-green-500"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Unity Game Project
          </p>
          <p
            onClick={() => {
              setCategory("Freelance");
              setCurrent(0);
            }}
            className={`cursor-pointer pb-2 ${
              category === "Freelance"
                ? "border-b-2 border-green-500 text-green-500"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Freelance Project
          </p>
        </div>

        {/* ----------------- Project Card Section ----------------- */}
        <div className="flex flex-col md:flex-row gap-10 max-w-[1100px] w-full items-center">
          {/* ----------------- Project Description ----------------- */}
          <div className="flex-1 space-y-4 text-center md:text-left">
            <h2 className="text-5xl font-bold text-gray-600">
              {projectNumber}
            </h2>
            <h3 className="text-3xl font-mono">{project.title}</h3>
            <p className="text-gray-400 max-w-sm mx-auto md:mx-0">
              {project.description}
            </p>
            <p className="text-green-400">{project.tech.join(", ")}</p>

            {/* ----------------- Project Links ----------------- */}
            <div className="flex gap-4 mt-4 justify-center md:justify-start">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center border border-gray-700 rounded-full hover:bg-gray-700 transition"
                >
                  <FiArrowUpRight />
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center border border-gray-700 rounded-full hover:bg-gray-700 transition"
                >
                  <FiGithub />
                </a>
              )}
              {project.youtube && (
                <a
                  href={project.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center border border-gray-700 rounded-full hover:bg-gray-700 transition"
                >
                  <FiYoutube />
                </a>
              )}
            </div>
          </div>

          {/* ----------------- Project Image / Placeholder ----------------- */}
          <div className="flex-1 relative w-full max-w-md">
            {project.image ? (
              <img
                src={project.image}
                alt="Project Preview"
                className="rounded-md border border-gray-700 w-full h-auto"
              />
            ) : (
              <div className="bg-gray-700 w-full h-[300px] flex items-center justify-center text-gray-500 rounded-md text-center px-4">
                {category === "Company Project"
                  ? "Company Confidential. Screenshots available on request."
                  : "No image available"}
              </div>
            )}

            {/* ----------------- Next / Previous Navigation ----------------- */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              <button
                onClick={prevProject}
                className="w-8 h-8 flex items-center justify-center bg-green-500 hover:bg-green-400 text-black rounded-sm"
              >
                &lt;
              </button>
              <button
                onClick={nextProject}
                className="w-8 h-8 flex items-center justify-center bg-green-500 hover:bg-green-400 text-black rounded-sm"
              >
                &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
