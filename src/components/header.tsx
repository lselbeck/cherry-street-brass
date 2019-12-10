import React, { ReactElement, useState } from 'react'
import { Link } from 'gatsby';
const trumpetIcon = require('../images/trumpet.svg');

export default function Header(): ReactElement {
  const [isMenuOpen, setMenuOpen] = useState(false)
  return (
    <nav className="flex items-center justify-between flex-wrap bg-blue-400 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <img
          className="fill-current h-8 w-8 mr-2"
          src={trumpetIcon}
          alt='trumpet icon'
        ></img>
        <Link to="/" className="font-semibold text-xl tracking-tight">Cherry Street Brass</Link>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => {
            setMenuOpen(isMenuOpen => !isMenuOpen)
          }}
          className="flex items-center px-3 py-2 border rounded text-blue-200 border-blue-400 hover:text-white hover:border-white"
        >
        <svg
          className="fill-current h-3 w-3"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
        </button>
      </div>
      <div
        className={`w-full ${
          isMenuOpen ? "block" : "hidden"
        } lg:block flex-grow lg:flex lg:items-center lg:w-auto`}
      >
        <div className="text-sm lg:flex-grow">
          <Link
            to="/band"
            className="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-4"
          >
            The Band
          </Link>
          <Link
            to="/listen"
            className="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-4"
          >
            Listen
          </Link>
          <Link
            to="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white"
          >
            Gigs
          </Link>
        </div>
        <div>
          <Link
          to="/contact"
          className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 lg:mt-0"
          >
          Contact Us!
          </Link>
        </div>
      </div>
    </nav>
  );
}