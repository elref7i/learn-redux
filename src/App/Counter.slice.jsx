import { createSlice } from '@reduxjs/toolkit';
//* عايز منى
// * name - initialState - reducers - extraReducers

//* CounterReducer => عباره عن object
const counterReducer = createSlice({
  name: 'Counter',
  initialState: {
    counter: 0,
  },
  reducers: {
    increase: function (previousState) {
      previousState.counter += 1;
    },
    decrease: function (previousState) {
      previousState.counter -= 1;
    },
  },
});
export default counterReducer.reducer;
export const actions = counterReducer.actions;
