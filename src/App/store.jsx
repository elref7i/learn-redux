import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './Counter.slice';
// *  slice جواه اوبشن كتير  جواه  method عباره عن
export const myStore = configureStore({
  reducer: {
    counterReducer,
  },
});
