import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

interface User {
  username: string;
  email: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
}

interface UserState {
  isLoading: boolean;
  error: boolean;
  user: User | null;
  message: string | null;
}

interface RegisterResponse {
  success: boolean;
  message: string;
  newUser: User;
}

const initialState: UserState = {
  isLoading: false,
  error: false,
  user: null,
  message: null,
};

export const registerUser = createAsyncThunk<
  RegisterResponse,
  { username: string; email: string; password: string },
  { rejectValue: string }
>("user/register", async (formData, { rejectWithValue }) => {
  try {
    const response = await fetch("http://localhost:4000/api/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (!response.ok) {
      const errorData = await response.json();
      return rejectWithValue(errorData.message || "Failed to create user");
    }
    const userData = await response.json();
    return userData;
  } catch (error) {
    return rejectWithValue("Failed to create user");
  }
});

export const loginUser = createAsyncThunk<
  RegisterResponse,
  { email: string; password: string },
  { rejectValue: string }
>("user/login", async (formData, { rejectWithValue }) => {
  try {
    const response = await fetch("http://localhost:4000/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (!response.ok) {
      const errorData = await response.json();
      return rejectWithValue(errorData.message || "Failed to log in");
    }
    const userData = await response.json();
    localStorage.setItem("User", JSON.stringify(userData.token));
    return userData;
  } catch (error) {}
  return rejectWithValue("Failed to log user in");
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        registerUser.fulfilled,
        (state, action: PayloadAction<RegisterResponse>) => {
          state.isLoading = false;
          state.user = action.payload.newUser;
          state.message = action.payload.message;
          toast.success("User created successfully");
        }
      )
      .addCase(registerUser.rejected, (state, action) => {
        state.error = true;
        state.isLoading = false;
        toast.error(action.payload || "Failed to log in");
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.newUser;
        state.message = action.payload.message;
        toast.success("Logged in successfully");
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.error = true;
        toast.error(action.payload || "Failed to log in");
      });
  },
});

export default userSlice.reducer;
