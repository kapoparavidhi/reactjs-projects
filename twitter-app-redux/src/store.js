// store.js
import { configureStore } from "@reduxjs/toolkit";
import twubricReducer from "./features/twubricSlice";

const store = configureStore({
  reducer: {
    twubric: twubricReducer,
  },
});

export default store;
