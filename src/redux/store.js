import { configureStore } from "@reduxjs/toolkit";
import { youtubeApiSlice } from "./features/videoApiCore";
import themeReducer from './features/themeSlice'

export default configureStore({
  reducer:{
    theme: themeReducer,
    [youtubeApiSlice.reducerPath]: youtubeApiSlice.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(youtubeApiSlice.middleware)
})