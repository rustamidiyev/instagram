import { configureStore } from "@reduxjs/toolkit";
import filesSlice from "./filesSlice/filesSlice";

const store = configureStore({
  reducer: {
    posts:filesSlice
  },
});
export default store;


