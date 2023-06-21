import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "productsSlice/fetchProducts",
  async (keyword, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      //add price functions
      // const prices = [10.99, 5.99, 24.99, 8.49, 19.99, 12.99, 7.99, 14.99, 6.49, 29.99];
      // const getRandomPrice = () => prices[Math.floor(Math.random() * prices.length)].toFixed(2);
      // return res.map(el => ({ ...el, price: getRandomPrice() }))
      return (
        await axios.get(`http://localhost:2000/books/?q=${keyword.trim()}`)
      ).data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const productDitails = createAsyncThunk(
  "productsSlice/productDitails",
  async (id, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      return (await axios.get(`http://localhost:2000/books/${id}`)).data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const productsSlice = createSlice({
  name: "productsSlice",
  initialState: {
    products: [],
    product: null,
    loading: false,
    error: null,
  },
  reducers: {
    cleanUpProducts: (state, action) => {
      state.products = [];
    },
    cleanUpProduct: (state, action) => {
      state.product = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
    builder
      .addCase(productDitails.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(productDitails.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload;
      })
      .addCase(productDitails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export default productsSlice.reducer;
export const { cleanUpProducts, cleanUpProduct } = productsSlice.actions;
