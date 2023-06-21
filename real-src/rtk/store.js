import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./slices/products-slice";
import cartSlices from "./slices/cart-slices";

const store = configureStore({
  reducer: {
    products: productsSlice,
    cart: cartSlices,
  },
});
export default store;
