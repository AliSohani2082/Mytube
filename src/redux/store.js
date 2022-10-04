import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { youtubeApiSlice } from "./features/videoApiCore";

export default configureStore({
  reducer:{
    [youtubeApiSlice.reducerPath]: youtubeApiSlice.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(youtubeApiSlice.middleware)
}) 