import React, { useContext } from "react";
import { Layout } from "../Layout/Layout";
import { useSelector } from "react-redux";
import dummy from "../assets/Assets/product_12.png";
import { CartCard } from "../components/CartCard";

export const Cart = () => {
  const cart = useSelector((cart) => cart);
  console.log(cart);
  console.log(cart);
  return (
    <Layout>
      <CartCard image={dummy} name="product name" />
    </Layout>
  );
};
