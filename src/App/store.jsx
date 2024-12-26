import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './Counter.slice';
import productReducer from './products.slice';
// *  slice جواه اوبشن كتير  جواه  method عباره عن
export const myStore = configureStore({
  reducer: {
    counterReducer,
    productReducer,
  },
});
