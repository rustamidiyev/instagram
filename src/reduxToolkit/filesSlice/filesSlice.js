/** @format */

import { createSlice } from "@reduxjs/toolkit";
import { changeUserProfile } from "../extraReducer";
// import { changeUserProfile, publishPosts } from "../extraReducer";
// import { Flag, FlashOnTwoTone } from "@mui/icons-material";
const initialState = {
  loading: null,
  error: null,
  postLoading: false,
};

const filesSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // builder
    //   .addCase(publishPosts.pending, (state, action) => {
    //     state.loading = true;
    //     state.postLoading = true;
    //   })
    //   .addCase(publishPosts.fulfilled, (state, action) => {
    //     state.postLoading = false;
    //   })
    //   .addCase(publishPosts.rejected, (state, action) => {
    //     state.error = action.error.message;
    //   });
      builder
      .addCase(changeUserProfile.pending, (state, action) => {
        state.loading = true;
        state.postLoading = true;
        console.log("pending")
      })
      .addCase(changeUserProfile.fulfilled, (state, action) => {
        state.postLoading = false;
        console.log("uplload")
      })
      .addCase(changeUserProfile.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});
export const {} = filesSlice.actions;
export default filesSlice.reducer;
