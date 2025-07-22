// -------------------------
// Import React & Icons
// -------------------------
import React from "react";
import { FiArrowDownRight } from "react-icons/fi";

// -------------------------
// Services Data Array
// -------------------------
const services = [
  {
    id: "01",
    title: "React.js Frontend Development",
    description:
      "Building modern, responsive, and high-performance web applications using React.js and Tailwind CSS, focused on clean code and great user experience.",
  },
  {
    id: "02",
    title: "Mobile App Development (React Native / Android)",
    description:
      "Creating seamless mobile applications for Android using modern frameworks like React Native and native Android tools.",
  },
  {
    id: "03",
    title: "Unity Game Development (2D / 3D)",
    description:
      "Designing and developing engaging 2D and 3D games using Unity Engine with expertise in C#, physics, and animation systems.",
  },
  {
    id: "04",
    title: "UI Animation & Interaction Design",
    description:
      "Enhancing websites, apps, and games with smooth UI animations and interactive user experiences using CSS, Framer Motion, and Unity animations.",
  },
];

// -------------------------
// Services Component
// -------------------------
const Services = () => {
  return (
    <div className="bg-gray-900 text-white px-4 py-7">
      {/* Container for Grid Layout */}
      <div className="grid gap-10 md:grid-cols-2 md:max-w-[900px] lg:max-w-[1170px] w-full mx-auto">
        {/* Map through services array to render each card */}
        {services.map((service) => (
          <div
            key={service.id}
            className="relative border-t border-gray-700 pt-8 pb-12 transition duration-300 hover:bg-gray-800 rounded-md"
          >
            {/* Service ID as large faded text */}
            <h2 className="text-4xl md:text-5xl font-audiowide text-gray-400">
              {service.id}
            </h2>

            {/* Service Title */}
            <h3 className="text-xl md:text-2xl font-mono mt-2">
              {service.title}
            </h3>

            {/* Service Description */}
            <p className="mt-4 text-gray-400 text-sm leading-relaxed max-w-xs">
              {service.description}
            </p>

            {/* Arrow Icon with hover effect */}
            <div className="absolute right-4 top-4 w-10 h-10 bg-white text-gray-900 rounded-full flex items-center justify-center cursor-pointer hover:rotate-12 transition-transform">
              <FiArrowDownRight />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// -------------------------
// Export Services Component
// -------------------------
export default Services;
