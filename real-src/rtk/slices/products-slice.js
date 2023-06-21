import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts= createAsyncThunk("productsSlice/fetchProducts", async () => {
  const response = await fetch("http://localhost:2000/products");
  const data = await response.json();
  return data;
});

const productsSlice = createSlice({
  initialState: [],
  name: "productsSlice",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => action.payload);
  },
});
// export const {} = productsSlice.actions;
export default  productsSlice.reducer;
