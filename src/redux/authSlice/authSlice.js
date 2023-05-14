import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const signinUser = createAsyncThunk(
  "user/signin",
  async ({ email, password }) => {
    const result = await axios.post("http://localhost:8000/api/loginUser", {
      // username: "kminchelle",
      // password: "0lelplR",
      email,
      password,
    });
    return result.data.token;
  }
);

export const createUser = createAsyncThunk(
  "user/create",

  async ({
    userName,
    email,
    password,
    phoneNumber,
    address,
    UserType,
    secretKey,
  }) => {
    return await axios.post("http://localhost:8000/api/createUser", {
      userName,
      email,
      password,
      phoneNumber,
      address,
      UserType,
      secretKey,
    });
  }
);

export const logoutUser = createAsyncThunk("user/logout", async () => {});

export const checkIsUserAuthenticated = createAsyncThunk(
  "user/isAuthenticated",
  async () => {}
);

const initialState = {
  isAuthenticated: false,
  isLoading: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signOutUser: (state) => initialState,
  },
  extraReducers: ({ addCase }) => {
    // Login User
    addCase(signinUser.pending, (state, action) => {
      state.isLoading = true;
    });
    addCase(signinUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = true;
      // document.cookie = `token=${action.payload}; path=/; secure; SameSite=Lax`;
    });
    addCase(signinUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = false;
    });

    // Create User
    addCase(createUser.pending, (state, action) => {
      state.isLoading = true;
    });
    addCase(createUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = true;
    });
    addCase(createUser.rejected, (state, action) => {
      state.isLoading = false;
    });

    // Logout User
    addCase(logoutUser.pending, (state, action) => {
      state.isLoading = true;
    });
    addCase(logoutUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = false;
    });
    addCase(logoutUser.rejected, (state, action) => {
      state.isLoading = false;
    });

    // Check Is User Authenticated
    addCase(checkIsUserAuthenticated.pending, (state, action) => {
      state.isLoading = true;
    });
    addCase(checkIsUserAuthenticated.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = true;
    });
    addCase(checkIsUserAuthenticated.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

export default authSlice.reducer;
export const { signOutUser } = authSlice.actions;
