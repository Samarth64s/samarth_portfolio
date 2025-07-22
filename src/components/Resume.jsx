// ----------------- Import React and hooks -----------------
import React, { useState } from "react";

// ----------------- Import Icons -----------------
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaWordpress } from "react-icons/fa";
import { SiTailwindcss, SiShopify, SiUnity } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";

// ----------------- Import Certification Images -----------------
import webDeveloper from "../assets/certifications/webDeveloper.jpg";
import gameDeveloper from "../assets/certifications/gameDeveloper.jpg";

// ----------------- Data Structure for Tabs -----------------
const data = {
  Experience: {
    title: "My experience",
    description:
      "Professional journey through development roles in web, mobile, and game technologies.",
    items: [
      {
        time: "Nov 2024 - May 2025",
        role: "Full Stack Developer",
        company: "Dhiyotech Private Limited",
      },
      {
        time: "Apr 2024 - Sep 2024",
        role: "Software Developer",
        company: "Level Up Technologies",
      },
      {
        time: "Jul 2019 - Mar 2020",
        role: "Production Engineer (Trainee)",
        company: "Welspun Group Pvt Ltd.",
      },
      {
        time: "Sep 2016 - May 2018",
        role: "Service Engineer",
        company: "Unicon Infratech Pvt Ltd.",
      },
    ],
  },

  Education: {
    title: "My education",
    description:
      "Academic qualifications from high school through engineering.",
    items: [
      {
        time: "2012 - 2016",
        role: "B.Tech Mechanical Engineering",
        company: "Kailash Narayan Patidar College, RGPV",
      },
      {
        time: "2011 - 2012",
        role: "Higher Secondary (PCM)",
        company: "Saraswati Vidya Mandir H.S., MP Board",
      },
      {
        time: "2009 - 2010",
        role: "High School (Class X)",
        company: "Saraswati Vidya Mandir H.S., MP Board",
      },
    ],
  },

  Internship: {
    title: "Internship",
    description: "Hands-on training during internships to sharpen skills.",
    items: [
      {
        time: "Mar 2024 - Apr 2024",
        role: "React Developer Intern",
        company: "Varlyq Technologies",
      },
      {
        time: "Dec 2023 - Mar 2024",
        role: "Software Developer Intern",
        company: "LeopardRuns Innovation & Technology",
      },
    ],
  },

  Certification: {
    title: "Certifications",
    description: "Courses I have successfully completed.",
    items: [
      {
        time: "2023",
        role: "The Complete Web Developer in 2023: Zero to Mastery",
        company: "Udemy",
        image: webDeveloper,
      },
      {
        time: "2025",
        role: "Complete C# Unity Game Developer 3D (Unity 6)",
        company: "Udemy",
        image: gameDeveloper,
      },
    ],
  },

  Skills: {
    title: "My skills",
    description:
      "Technologies I use daily for building websites, applications, and games.",
    skills: [
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "JavaScript", icon: FaJs },
      { name: "React JS", icon: FaReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Unity Engine", icon: SiUnity },
      { name: "C Sharp", icon: TbBrandCSharp },
      { name: "Shopify", icon: SiShopify },
      { name: "WordPress", icon: FaWordpress },
    ],
  },

  "About me": {
    title: "About me",
    description: "Personal details and background information.",
    info: [
      { label: "Name", value: "Samarth Malviya" },
      { label: "Phone", value: "(+91) 8962346214" },
      { label: "Total Experience", value: "3.5+ Years" },
      { label: "Github", value: "Samarth64s" },
      { label: "Nationality", value: "Indian" },
      { label: "Email", value: "malviya214samarth@gmail.com" },
      { label: "Freelance", value: "Available" },
      { label: "Languages", value: "English, Hindi" },
    ],
  },
};

// ----------------- Resume Component -----------------
const Resume = () => {
  // State to track active tab
  const [activeTab, setActiveTab] = useState("Experience");

  return (
    <div className="bg-gray-900 text-white px-4 py-7 flex items-start justify-center">
      <div className="grid md:grid-cols-2 gap-12 md:max-w-[900px] lg:max-w-[1170px] w-full">
        {/* ---------------- Left Section: Navigation ---------------- */}
        <div>
          <h2 className="text-3xl md:text-4xl font-audiowide mb-4">
            Why hire me?
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-8">
            Passionate about modern technologies, clean code, and solving
            complex problems.
          </p>

          {/* Tab Buttons */}
          <div className="space-y-3">
            {Object.keys(data).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`w-full text-left px-6 py-3 rounded-md transition ${
                  activeTab === tab
                    ? "bg-green-400 text-black"
                    : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* ---------------- Right Section: Dynamic Content ---------------- */}
        <div className="h-[600px] overflow-y-auto pr-2 hide-scrollbar">
          <h2 className="text-3xl md:text-4xl font-mono mb-4">
            {data[activeTab].title}
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-8">
            {data[activeTab].description}
          </p>

          {/* ---------------- Skills Section ---------------- */}
          {activeTab === "Skills" && (
            <div className="grid grid-cols-4 gap-6 text-4xl text-gray-300">
              {data.Skills.skills.map((skill, idx) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={idx}
                    className="relative group bg-gray-800 p-3 md:p-6 rounded-lg flex items-center justify-center hover:bg-gray-700 transition"
                  >
                    <Icon
                      className="hover:text-green-400 transition duration-300"
                      title={skill.name}
                    />
                    <span className="absolute bottom-2 left-1/2 -translate-x-1/2 translate-y-full text-xs bg-gray-700 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                      {skill.name}
                    </span>
                  </div>
                );
              })}
            </div>
          )}

          {/* ---------------- About Me Section ---------------- */}
          {activeTab === "About me" && (
            <div className="grid grid-cols-2 gap-4 text-sm">
              {data["About me"].info.map((item, idx) => (
                <p key={idx}>
                  <strong>{item.label}</strong>: {item.value}
                </p>
              ))}
            </div>
          )}

          {/* ---------------- Experience, Education, Internship, Certification ---------------- */}
          {["Experience", "Education", "Internship", "Certification"].includes(
            activeTab
          ) && (
            <div className="grid grid-cols-1 gap-6">
              {data[activeTab].items.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-gray-800 rounded-md p-4 space-y-4 hover:bg-gray-700 transition"
                >
                  <span className="text-xs text-green-400">{item.time}</span>
                  <h3 className="font-mono text-lg">{item.role}</h3>
                  <p className="text-gray-400 text-sm">• {item.company}</p>
                  {/* Conditionally render image if exists */}
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.role}
                      className="rounded-md object-contain w-full max-h-56 border border-gray-700"
                    />
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Resume;
