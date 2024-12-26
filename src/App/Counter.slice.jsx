import { createSlice } from '@reduxjs/toolkit';
//* عايز منى
// * name - initialState - reducers - extraReducers

//* CounterReducer => عباره عن object
const counterReducer = createSlice({
  name: 'Counter',
  initialState: {
    counter: 0,
  },
  //* actions
  reducers: {
    increase: function (previousState, { payload }) {
      previousState.counter += payload;
    },
    decrease: function (previousState, { payload }) {
      previousState.counter -= payload;
    },
  },
});
export default counterReducer.reducer;
export const actions = counterReducer.actions;
