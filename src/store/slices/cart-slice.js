import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  initialState: { cart: [] },
  name: "cartSlice",
  reducers: {
    addToCart: (state, action) => {
      const findItem = state.cart.find((el) => el.id === action.payload.id);
      if (findItem) {
        findItem.count++;
      } else {
        state.cart.push({ ...action.payload, count: 1 });
      }
    },
    removeToCart: (state, action) => {
      const findItem = state.cart.find((el) => el.id === action.payload.id);
      if (findItem)
        if (findItem.count === 1) {
          state.cart = state.cart.filter((el) => el.id !== findItem.id);
        }
      findItem.count--;
    },
    clearCart: (state, action) => {
      state.cart = [];
    },
  },
});

export const { addToCart, removeToCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
