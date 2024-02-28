import { createSlice } from "@reduxjs/toolkit";

let item =
  localStorage.getItem("items") != null
    ? JSON.parse(localStorage.getItem("items"))
    : [];
const cartSlice = createSlice({
  name: "cartItems",
  initialState: item,
  reducers: {
    addToCart(state, action) {
      state.push(action.payload);
      console.log(state);
      localStorage.setItem(
        "items",
        JSON.stringify(state.map((value) => value))
      );
    },
    removeFromCart(state, action) {
      localStorage.setItem(
        "items",
        JSON.stringify(state.filter((value) => value.id !== action.payload))
      );
      return state.filter((item) => item.id !== action.payload);
    },
  },
});
export default cartSlice.reducer;
export const { addToCart, removeFromCart } = cartSlice.actions;
