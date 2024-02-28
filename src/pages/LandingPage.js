import React from "react";
import { Layout } from "../Layout/Layout";
import "../styles/Landing.css";
import { Link } from "react-router-dom";

export const LandingPage = () => {
  return (
    <Layout>
      <section
        className="text-gray-600 body-font hero-img"
        style={{ height: "90vh" }}
      >
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col justify-center h-full items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-5xl text-5xl mb-4 font-bold text-white">
              Where Fashion Meets Fun.
            </h1>
            <p className="text-white mb-5 font-medium text-xl">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged
            </p>
            <div className="flex justify-center">
              <Link
                to={"/shop"}
                className="inline-flex text-white bg-yellow-400 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg"
              >
                shop Now
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 p-10">
            <div className="flex flex-col gap-1">
              <div className="top-btn flex justify-center items-center text-center gap-1 w-full">
                <Link
                  to={"/mens"}
                  className=" bg-red-700 p-10 text-white text-3xl w-full"
                >
                  Mens
                </Link>
                <Link
                  to={"/womens"}
                  className=" bg-red-700 p-10 text-white text-3xl w-full"
                >
                  Womens
                </Link>
              </div>
              <Link
                to={"/kids"}
                className="text-center bg-red-700 p-10 text-white text-3xl"
              >
                Kids & Accessories
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
