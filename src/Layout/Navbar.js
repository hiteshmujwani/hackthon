import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Assets/logo.png";
import cartlogo from "../assets/cartlogo.png";

export const Navbar = () => {
  return (
    <div className="border-b-2 text-white bg-red-400">
      <header className=" body-font">
        <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
          <img src={logo} alt="logo" />
          <Link className="text-4xl font-bold text">
            <span className="text-yellow-400">M</span>y
            <span className="text-yellow-400">S</span>tore
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center uppercase font-bold text-lg justify-center">
            <Link to={"/"} className="mr-5 hover:text-gray-900">
              Home
            </Link>
            <Link to={"/shop"} className="mr-5 hover:text-gray-900">
              Shop
            </Link>
            <Link to={"/contact"} className="mr-5 hover:text-gray-900">
              Contact Us
            </Link>
            <Link to={"/cart"} className="mr-5 hover:text-gray-900">
              <img src={cartlogo} alt="cartlogo" style={{ width: "30px" }} />
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
};
