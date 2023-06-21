// redux store

import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./slices/products-slice";
import cartSlice from "./slices/cart-slice";

const store = configureStore({
  reducer: {
    productsSlice: productsSlice,
    cartSlice: cartSlice,
  },
});

export default store;
