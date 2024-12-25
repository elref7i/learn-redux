import { createSlice } from '@reduxjs/toolkit';
//* عايز منى
// * name - initialState - reducers - extraReducers

//* CounterReducer => عباره عن object
const counterReducer = createSlice({
  name: 'Counter',
  initialState: {
    counter: 0,
  },
});
export default counterReducer.reducer;
