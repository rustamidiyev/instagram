import { createAsyncThunk } from "@reduxjs/toolkit";
import { updateProfile } from "firebase/auth";
import { auth } from "../components/lib/firebase";

export const changeUserProfile = createAsyncThunk(
    'user/changeProfile',
    async (data, { rejectWithValue }) => {
      console.log(data)
      try {
        await updateProfile(auth.currentUser, {
          displayName: data.username,
        //   photoURL:
        });
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );