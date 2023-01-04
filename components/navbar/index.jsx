import React from "react";
import { useState, useRef, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="fixed w-full bg-white shadow-xs text-lg" ref={menuRef}>
      <nav
        className="flex container mx-auto justify-between items-center h-16  text-black relative font-mono"
        role="navigation"
      >
        <a href="#" className="pl-8 text-3xl font-extrabold text-red-400 font-dmsans">
          phoeniX
        </a>
        <div
          className="px-4 cursor-pointer md:hidden"
          onClick={() => {
            setIsOpen((isOpen) => !isOpen);
          }}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </div>
        <div className="pr-8 md:block hidden">
          <a href="#" className="p-4 hover:text-red-400">
            Home
          </a>
          <a href="#" className="p-4">
            About
          </a>
          <a href="#" className="p-4">
            Contact
          </a>
          <a href="#" className="p-4">
            Login
          </a>
        </div>
      </nav>

      {isOpen && (
        <sideNav className="md:hidden block">
          <div className="px-2 pt-2 pb-4 space-y-1">
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-gray-900"
            >
              Home
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-gray-900"
            >
              About
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-gray-900"
            >
              Contact
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-gray-900"
            >
              Login
            </a>
          </div>
        </sideNav>
      )}
    </div>
  );
};

export default Navbar;
