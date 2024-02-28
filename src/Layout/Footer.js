import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div>
      <footer className="text-white body-font border-t-2 bg-red-500">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-wrap md:text-left text-center justify-center -mb-10 -mx-4">
            <div className="lg:w-1/6 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium tracking-widest text-xl mb-3">
                Quick Links
              </h2>
              <nav className="list-none mb-1">
                <li>
                  <Link to={"/"} className=" hover:text-gray-800">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to={"/shop"} className=" hover:text-gray-800">
                    Shop Now
                  </Link>
                </li>
                <li>
                  <Link to={"/shop"} className=" hover:text-gray-800">
                    Categories
                  </Link>
                </li>
                <li>
                  <Link to={"/contact"} className=" hover:text-gray-800">
                    Contact
                  </Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/6 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium  tracking-widest text-xl mb-3">
                Extra Links
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link to={""} className=" hover:text-gray-800">
                    Ask Question
                  </Link>
                </li>
                <li>
                  <Link to={""} className=" hover:text-gray-800">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to={""} className=" hover:text-gray-800">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to={""} className=" hover:text-gray-800">
                    Terms Of Use
                  </Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/6 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold  tracking-widest text-xl mb-3">
                Contact Info
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link to={""} className=" hover:text-gray-800">
                    +91 9602681408
                  </Link>
                </li>
                <li>
                  <Link to={""} className=" hover:text-gray-800">
                    +91 9694796480
                  </Link>
                </li>
                <li>
                  <Link to={""} className=" hover:text-gray-800">
                    Hiteshmujwani@gmail.com
                  </Link>
                </li>
                <li>
                  <Link to={""} className=" hover:text-gray-800">
                    Jaipur,Rajasthan,302017
                  </Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/6 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium  tracking-widest text-xl mb-3">
                Follow Us
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link to={""} className=" hover:text-gray-800">
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link to={""} className=" hover:text-gray-800">
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link to={""} className=" hover:text-gray-800">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link to={""} className=" hover:text-gray-800">
                    LinkedIn
                  </Link>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200">
          <div className="container px-5 py-4 flex flex-wrap text-center items-center justify-center">
            <span className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
              <Link to={""} className="text-white">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </Link>
              <Link to={""} className="ml-3 text-white">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </Link>
              <Link to={""} className="ml-3 text-white">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                </svg>
              </Link>
              <Link to={""} className="ml-3 text-white">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={0}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  />
                  <circle cx={4} cy={4} r={2} stroke="none" />
                </svg>
              </Link>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};
