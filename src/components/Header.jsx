import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <nav
      className={`fixed flexflex-wrap w-full items-center px-5 py-4  ${
        window.location.pathname === "/blog"
          ? "bg-blue-900 bg-opacity-20 backdrop-blur-sm shadow-lg"
          : "bg-white bg-opacity-20 backdrop-blur-sm shadow-lg"
      }`}
    >
      {/*<div className="flex items-center flex-shrink-0 mr-6  text-white">
        <span className="text-xl font-semibold tracking-tight">
          {siteTitle}
        </span>
      </div>*/}

      <div className=" md:hidden">
        {!isExpanded && (
          <button
            onClick={() => toggleExpansion(!isExpanded)}
            className="md:hidden flex items-center px-3 py-2 text-white border border-white rounded hover:text-white hover:border-white"
          >
            <svg
              className="w-3 h-3 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        )}
      </div>
      <div
        className={`${
          isExpanded ? `block` : `hidden`
        }  lg:flex lg:items-center lg:w-auto`}
      >
        <div className="flex  flex-row justify-start">
          <b className="flex lg:flex-row mr-4 gap-3">
            <Link
              to={`/`}
              href="#responsive-Header"
              className="block text-white lg:inline-block lg:mt-0 hover:text-white"
            >
              Home
            </Link>
            <Link
              to={`/blog`}
              className="block text-white lg:inline-block lg:mt-0 hover:text-white"
            >
              Blog
            </Link>
          </b>
        </div>
      </div>
    </nav>
  );
}
