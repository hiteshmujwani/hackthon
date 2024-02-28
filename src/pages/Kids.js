import React from "react";
import { Layout } from "../Layout/Layout";
import { ShopCard } from "../components/ShopCard";
import { Link } from "react-router-dom";
import all_product from "../assets/Assets/all_product";

export const Kids = () => {
  return (
    <Layout>
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
      <div className=" bg-red-300 py-10">
        <div className="text-center">
          <h1 className="mt-5 text-4xl text-center">KIDS COLLECTION</h1>
          <p className="text-center bg-yellow-400 inline-block text-xl font-medium mt-4 px-12">
            ~ Shop . Fun . Repeat ~
          </p>
        </div>

        <div className="flex flex-wrap px-8  gap-6 mt-5 w-full justify-center">
          {all_product.map(
            (item) =>
              item.category === "kid" && (
                <ShopCard
                  image={item.image}
                  name={item.name}
                  new_price={item.new_price}
                />
              )
          )}
        </div>
      </div>
    </Layout>
  );
};
