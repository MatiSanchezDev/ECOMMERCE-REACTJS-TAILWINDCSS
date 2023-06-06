import { configureStore } from "@reduxjs/toolkit";
import { stickeriaSlice } from "./slices/stickeriaSlice";

export const store = configureStore({
  reducer: {
    stickeria: stickeriaSlice.reducer,
  },
});
