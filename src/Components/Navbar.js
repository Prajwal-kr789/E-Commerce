import React, { useState } from "react";
import Navbarlogo from "../Utils/Navbarlogo.png";
import { useSelector } from "react-redux";
import Cart from "./Cart";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDoubleDropdown, setShowDoubleDropdown] = useState(false);


  const cartitems = useSelector((store)=> store.cart.items)
  // console.log(cartitems);

  // Function to toggle the visibility of dropdowns
  const toggleDropdown = () => {
    setShowDropdown((prevShowDropdown) => !prevShowDropdown);
  };

  const toggleDoubleDropdown = () => {
    setShowDoubleDropdown((prevShowDoubleDropdown) => !prevShowDoubleDropdown);
  };

  return (
    <div>
      <nav className="bg-white fixed shadow-lg shadow-gray-500 top-0 w-full  border-gray-200 dark:bg-gray-900 dark:border-gray-700">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <p className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={Navbarlogo} className="h-8" alt="Cartify Logo" />
            <span className="self-center text-2xl text-fuchsia-500  font-bold whitespace-nowrap dark:text-white">
              Cartify
            </span>
          </p>

          <button
            onClick={toggleDropdown}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-expanded={showDropdown}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          <div
            className={`w-full md:block md:w-auto ${
              showDropdown ? "" : "hidden"
            }`}
            id="navbar-multi-level"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <p className="block py-2 px-3 text-white bg-fuchsia-500 rounded md:bg-transparent md:text-fuchsia-500 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent">
                  Home
                </p>
              </li>
              <li>
                <div className="relative">
                  <button
                    onClick={toggleDoubleDropdown} 
                    className="flex items-center justify-between w-full py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                  >
                    Dropdown{" "}
                    <svg
                      className={`w-2.5 h-2.5 ml-2.5 transform ${
                        showDoubleDropdown ? "rotate-0" : "rotate-180"
                      }`}
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </button>

                  {showDoubleDropdown && (
                    <div className="absolute top-full left-0 z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                      <ul
                        className="py-2 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="dropdownLargeButton"
                      >
                        <li>
                          <p className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                            Overview
                          </p>
                        </li>
                        <li>
                          <p className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                            My downloads
                          </p>
                        </li>
                        <li>
                          <p className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                            Billing
                          </p>
                        </li>
                        <li>
                          <hr />
                          <p className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                            Sign out
                          </p>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </li>
              <li>
                <p className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-fuchsia-500 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  Services
                </p>
              </li>
              <li>
                <p  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-fuchsia-500 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  🛒Cart({cartitems.length} items)
                </p>
              </li>
              <li>
                <p className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-fuchsia-500 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  Contact Us
                </p>
              </li>
              <li>
              <button className="block px-2  py-1 rounded bg-black text-white dark:text-black dark:bg-blue-400 hover:bg-gray-800 md:hover:bg-gray-800 md:border-0 md:hover:text-gray-200   md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  Sign in
                </button> 
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </div>
  );
};

export default Navbar;

