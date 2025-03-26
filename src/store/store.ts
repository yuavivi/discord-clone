import { configureStore } from "@reduxjs/toolkit";
import  useReducer from "../features/useSlice";

export const store = configureStore({
  reducer: useReducer,
});

export type AppDispatch = typeof store.dispatch; // AppDispatchの型を定義
export type RootState = ReturnType<typeof store.getState>; // RootStateの型を定義