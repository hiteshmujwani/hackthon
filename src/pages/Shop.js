import React from "react";
import { Layout } from "../Layout/Layout";
import { Link } from "react-router-dom";
import all_product from "../assets/Assets/all_product";
import { Card } from "../components/Card";
import "../styles/Shop.css";

export const Shop = () => {
  return (
    <Layout>
      <div>
        <div className="top-nav bg-red-400 text-white flex justify-end px-12 font-medium gap-5">
          <Link to={"/mens"} className=" border-r-2 p-4">
            Mens
          </Link>
          <Link to={"/womens"} className=" border-r-2 p-4">
            Womens
          </Link>
          <Link to={"/kids"} className=" border-r-2 p-4">
            Kids & Accessories
          </Link>
        </div>
        <div>
          <h1 className="text-3xl mt-4 mb-4 uppercase text-center font-bold font-mono">
            Shoping Section
          </h1>
        </div>
        <div className="collections py-8">
          <div className="mens-coll">
            <div className="col-heading inline">
              <h1 className="font-bold bg-red-500 text-4xl inline uppercase font-serif ml-16">
                Mens Collection
              </h1>
            </div>

            <div className="flex flex-wrap px-8 mt-3 gap-4 w-full">
              {all_product.map(
                (item) => item.category === "men" && <Card url={item.image} />
              )}
            </div>
          </div>

          <div className="womens-coll mt-10">
            <div className="col-heading inline">
              <h1 className="font-bold bg-red-500 text-4xl inline uppercase font-serif ml-16">
                Womens Collection
              </h1>
            </div>

            <div className="flex flex-wrap px-8 mt-3 gap-4 w-full">
              {all_product.map(
                (item) => item.category === "women" && <Card url={item.image} />
              )}
            </div>
          </div>

          <div className="mens-coll mt-10">
            <div className="col-heading inline">
              <h1 className="font-bold bg-red-500 text-4xl inline uppercase font-serif ml-16">
                Kids & Accessories
              </h1>
            </div>

            <div className="flex flex-wrap px-8 mt-3 gap-4 w-full">
              {all_product.map(
                (item) => item.category === "kid" && <Card url={item.image} />
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
