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
    <div
      className=" fixed z-50 w-screen md:shadow-md text-lg lg:bg-white"
      ref={menuRef}
    >
      <nav
        className="font-mono container relative mx-auto flex h-16 items-center justify-between  bg-white text-black shadow-md md:shadow-none"
        role="navigation"
      >
        <a
          href="#"
          className="pl-8 font-dmsans text-3xl font-extrabold text-red-400"
        >
          phoeniX
        </a>
        <div
          className="cursor-pointer px-4 md:hidden"
          onClick={() => {
            setIsOpen((isOpen) => !isOpen);
          }}
        >
          <svg
            className="h-6 w-6"
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
        <div className="hidden pr-8 md:block">
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

      <sideNav
        className={`block bg-white transition-all duration-500 md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } shadow-md `}
      >
        <hr class=" border-gray-200" />
        <div className="space-y-3 px-2 pt-2 pb-4 text-center text-2xl">
          <a
            href="#Home"
            className="block rounded-md px-3 py-2 font-medium text-gray-700 hover:bg-red-400 hover:text-white"
          >
            Home
          </a>
          <a
            href="#About"
            className="block rounded-md px-3 py-2 font-medium text-gray-700 hover:bg-red-400 hover:text-white"
          >
            About
          </a>
          <a
            href="#Contact"
            className="block rounded-md px-3 py-2 font-medium text-gray-700 hover:bg-red-400 hover:text-white"
          >
            Contact
          </a>
        </div>
      </sideNav>
    </div>
  );
};

export default Navbar;
