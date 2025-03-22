import React, { useState } from "react";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import image from "./../components/image.png";

const Navbar = ({ loading }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);  // Step 1: State for menu toggle

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);  // Step 2: Toggle menu visibility
  };

  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center text-xl font-bold mb-4 md:mb-0">
          {loading ? (
            <Skeleton circle width={30} height={30} />
          ) : (
            <img src={image} alt="Logo" className="mr-4 w-6 h-6" />
          )}
          <span>{loading ? <Skeleton width={100} height={20} /> : "Prodmast"}</span>
        </div>

        {/* Hamburger Icon for Mobile */}
        <button
          className="md:hidden text-2xl"
          onClick={toggleMenu}  // Step 3: Handle menu toggle
        >
          {isMenuOpen ? '×' : '☰'}  {/* Conditional render for the hamburger icon */}
        </button>

        {/* Navigation Links */}
        <ul
          className={`flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-6 text-lg ${isMenuOpen ? 'block' : 'hidden'}`}  // Step 4: Show/Hide menu based on state
        >
          {loading ? (
            Array.from({ length: 4 }).map((_, index) => <Skeleton key={index} width={60} height={20} />)
          ) : (
            <>
              <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
              <li><Link to="/" className="hover:text-blue-600">About</Link></li>
              <li><Link to="/" className="hover:text-blue-600">Services</Link></li>
              <li><Link to="/" className="hover:text-blue-600">Contact</Link></li>
            </>
          )}
        </ul>

        {/* Sign-Up Button */}
        {!loading && (
          <button className="mt-4 md:mt-0 bg-[#0c212a] text-white px-4 py-2 rounded">
            Sign Up
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
