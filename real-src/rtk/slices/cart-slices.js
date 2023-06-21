import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  initialState: [],
  name: "cartSlice",
  reducers: {
    addToCart: (state, action) => {
      const findProduct = state.find((el) => el.id === action.payload.id);
      if (findProduct) {
        findProduct.count++;
      } else {
        const productClone = { ...action.payload, count: 1 };
        state.push(productClone);
      }
    },
    removeToCart: (state, action) => {
      const product = state.find((el) => el.id === action.payload.id);
      if (product)
        if (product.count === 1)
          return state.filter((el) => el.id !== action.payload.id);
      product.count--;
    },

    clearCart: (state, action) => [],
  },
});

export const { addToCart, removeToCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
