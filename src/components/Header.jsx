import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

const Header = () => {
  // -------------------- State to toggle mobile sidebar --------------------
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-900 text-white shadow-md sticky top-0 z-50">
      {/* -------------------- Desktop Header -------------------- */}
      <div className="flex justify-between items-center px-8 py-4 mx-auto md:max-w-[900px] lg:max-w-[1170px]">
        {/* Logo or Site Name */}
        <h1 className="text-3xl font-bold tracking-wide">Samarth</h1>

        {/* Navigation - Hidden on Mobile */}
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex space-x-8 text-lg font-medium">
            <Link to={"/"} className="hover:text-green-400">
              Home
            </Link>
            <Link to={"/services"} className="hover:text-green-400">
              Services
            </Link>
            <Link to={"/work"} className="hover:text-green-400">
              Work
            </Link>
            <Link to={"/contact"} className="hover:text-green-400">
              Contact
            </Link>
          </nav>

          {/* Hire Me Button */}
          <Link
            to={"/contact"}
            className="px-6 py-2 rounded-full bg-green-400 hover:bg-green-600 hover:text-black transition"
          >
            Hire Me
          </Link>
        </div>

        {/* Mobile Menu Icon */}
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
          <Link
            to={"/"}
            onClick={toggleSidebar}
            className="hover:text-green-400"
          >
            Home
          </Link>
          <Link
            to={"/services"}
            onClick={toggleSidebar}
            className="hover:text-green-400"
          >
            Services
          </Link>
          <Link
            to={"/work"}
            onClick={toggleSidebar}
            className="hover:text-green-400"
          >
            Work
          </Link>
          <Link
            to={"/contact"}
            onClick={toggleSidebar}
            className="hover:text-green-400"
          >
            Contact
          </Link>
          <Link
            to={"/contact"}
            onClick={toggleSidebar}
            className="px-4 py-2 rounded-full bg-green-400 hover:bg-green-600 text-center"
          >
            Hire Me
          </Link>
        </nav>
      </div>

      {/* -------------------- Overlay on Mobile when Sidebar is Open -------------------- */}
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
