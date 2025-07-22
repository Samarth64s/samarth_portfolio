import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-900 text-white shadow-md sticky top-0 z-50">
      <div className="flex justify-between items-center px-8 py-4 mx-auto md:max-w-[900px] lg:max-w-[1170px]">
        <h1 className="text-3xl font-bold tracking-wide">Samarth</h1>

        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex space-x-8 text-lg font-medium">
            <a href="#about" className="hover:text-green-400">About</a>
            <a href="#projects" className="hover:text-green-400">Projects</a>
            <a href="#contact" className="hover:text-green-400">Contact</a>
          </nav>
          <a
            href="#contact"
            className="px-6 py-2 rounded-full bg-green-400 hover:bg-green-600 hover:text-black transition"
          >
            Hire Me
          </a>
        </div>

        <button
          onClick={toggleSidebar}
          className="md:hidden text-3xl"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

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
          <a href="#about" onClick={toggleSidebar} className="hover:text-green-400">About</a>
          <a href="#projects" onClick={toggleSidebar} className="hover:text-green-400">Projects</a>
          <a href="#contact" onClick={toggleSidebar} className="hover:text-green-400">Contact</a>
          <a href="#contact" onClick={toggleSidebar} className="px-4 py-2 rounded-full bg-green-400 hover:bg-green-600 text-center">Hire Me</a>
        </nav>
      </div>

      {/* Overlay when sidebar is open */}
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
