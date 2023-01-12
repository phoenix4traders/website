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
    <div className="fixed w-full  text-lg z-50" ref={menuRef}>
      <nav
        className="flex container bg-white shadow-md mx-auto justify-between items-center h-16  text-black relative font-mono"
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
          <a href="#Home" className="p-4 hover:text-red-400">
            Home
          </a>
          <a href="#About" className="p-4 hover:text-red-400">
            About
          </a>
          <a href="#Contact" className="p-4 hover:text-red-400">
            Contact
          </a>
        </div>
      </nav>

        <sideNav className={`md:hidden block transition-all duration-500 bg-white ${isOpen ? 'translate-x-0' : 'translate-x-full'} shadow-md `}>
          <hr class=" border-gray-200" />
          <div className="px-2 pt-2 pb-4 space-y-3 text-center text-2xl">
            <a
              href="#Home"
              className="block px-3 py-2 rounded-md font-medium text-gray-700 hover:text-white hover:bg-red-400"
            >
              Home
            </a>
            <a
              href="#About"
              className="block px-3 py-2 rounded-md font-medium text-gray-700 hover:text-white hover:bg-red-400"
            >
              About
            </a>
            <a
              href="#Contact"
              className="block px-3 py-2 rounded-md font-medium text-gray-700 hover:text-white hover:bg-red-400"
            >
              Contact
            </a>
          </div>
        </sideNav>
    </div>
  );
};

export default Navbar;
