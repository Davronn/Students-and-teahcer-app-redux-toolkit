import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "./students/studentsSlice";

const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});

export default store;
