import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
//* type-prefix=== unique similar type in object action => nameslice/namefunction

export const getproducts = createAsyncThunk(
  'products/getproducts',
  async function () {
    const { data } = await axios.get(
      'https://ecommerce.routemisr.com/api/v1/products'
    );
    return data.data;
  }
);
const productReducer = createSlice({
  name: 'products',
  initialState: {
    data: null,
    isLoading: true,
    isFetched: false,
    isPending: true,
    isError: false,
    error: null,
  },
  extraReducers: function (builder) {
    builder.addCase(getproducts.fulfilled, function (previousState, action) {
      previousState.data = action.payload;
      previousState.isLoading = false;
      previousState.isPending = false;
      previousState.isFetched = true;
      previousState.isError = false;
      previousState.error = null;

      console.log(previousState.data);
    });
    builder.addCase(getproducts.rejected, function (previousState, action) {
      previousState.isLoading = true;
      previousState.isPending = true;
      previousState.isFetched = false;
      previousState.isError = true;
      previousState.error = action.payload;
      console.log('❌');
    });
    builder.addCase(getproducts.pending, function (previousState, action) {
      previousState.isLoading = true;
      previousState.isPending = true;
      previousState.isFetched = false;
      previousState.isError = false;
      previousState.error = null;

      console.log('watting');
    });
  },
});

export default productReducer.reducer;
