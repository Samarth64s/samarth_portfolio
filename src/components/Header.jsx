import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-green-400 border-b-2 border-green-400 pb-1"
      : "hover:text-green-400 pb-1";

  return (
    <header className="bg-gray-900 text-white shadow-md sticky top-0 z-50">
      {/* -------------------- Desktop Header -------------------- */}
      <div className="flex justify-between items-center px-8 py-4 mx-auto md:max-w-[900px] lg:max-w-[1170px]">
        <h1 className="text-3xl font-bold tracking-wide">Samarth</h1>

        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex space-x-8 text-lg font-medium">
            <NavLink to="/" className={linkClass}>
              Home
            </NavLink>
            <NavLink to="/services" className={linkClass}>
              Services
            </NavLink>
            <NavLink to="/resume" className={linkClass}>
              Resume
            </NavLink>
            <NavLink to="/work" className={linkClass}>
              Work
            </NavLink>
            <NavLink to="/contact" className={linkClass}>
              Contact
            </NavLink>
          </nav>

          {/* <NavLink
            to="/contact"
            className="px-6 py-2 rounded-full bg-green-400 hover:bg-green-600 hover:text-black transition"
          >
            Hire Me
          </NavLink> */}
        </div>

        <button onClick={toggleSidebar} className="md:hidden text-3xl">
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* -------------------- Mobile Sidebar -------------------- */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-gray-800 text-white transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex justify-between items-center p-4">
          <h2 className="text-xl font-bold">Menu</h2>
          <button onClick={toggleSidebar} className="text-3xl">
            <FiX />
          </button>
        </div>

        <nav className="flex flex-col space-y-6 p-6 text-lg">
          <NavLink to="/" onClick={toggleSidebar} className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/services" onClick={toggleSidebar} className={linkClass}>
            Services
          </NavLink>
          <NavLink to="/resume" onClick={toggleSidebar} className={linkClass}>
            Resume
          </NavLink>
          <NavLink to="/work" onClick={toggleSidebar} className={linkClass}>
            Work
          </NavLink>
          <NavLink to="/contact" onClick={toggleSidebar} className={linkClass}>
            Contact
          </NavLink>
          {/* <NavLink
            to="/contact"
            onClick={toggleSidebar}
            className="px-4 py-2 rounded-full bg-green-400 hover:bg-green-600 text-center"
          >
            Hire Me
          </NavLink> */}
        </nav>
      </div>

      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
        ></div>
      )}
    </header>
  );
};

export default Header;
