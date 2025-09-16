import { configureStore } from "@reduxjs/toolkit";
import comp1 from "./Slice";

export const store = configureStore({
  reducer: {
    comp1: comp1,
  },
});
