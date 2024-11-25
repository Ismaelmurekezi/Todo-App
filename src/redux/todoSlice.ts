import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

interface TaskResponse {
  success: boolean;
  message: string;
  userTask: [];
}

interface InitialState {
  isLoading: boolean;
  error: boolean;
  tasks: TaskResponse | null;
}

const initialState: InitialState = {
  isLoading: false,
  tasks:null,
  error: false,
};

interface TaskData {
  task: string;
  user: string;
}

export const fetchTodo = createAsyncThunk("fetchTodo", async () => {
  const res = await fetch("http://localhost:4000/api/task/getAllTasks");
  return res.json();
});

export const fetchUserTasks = createAsyncThunk(
  "fetchUserTasks",
  async (userId: string, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("access_token");
      if (!token) {
        return rejectWithValue("No authentication token found");
      }
      const parsedToken = JSON.parse(token);

      const response = await fetch(
        `http://localhost:4000/api/task/getTask/${userId}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${parsedToken}`,
          },
        }
      );
      if (!response.ok) {
        const errorData = await response.json();
        return rejectWithValue(errorData.message || "Failed to create task");
      }

      return response.json();
    } catch (error) {
      return rejectWithValue("Failed to fetch tasks");
    }
  }
);

export const addTask = createAsyncThunk(
  "addTask",
  async (formData: TaskData, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("access_token");
      console.log(formData);
      if (!token) {
        return rejectWithValue("No authentication token found");
      }

      const parsedToken = JSON.parse(token);
      const response = await fetch("http://localhost:4000/api/task/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${parsedToken}`,
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        const errorData = await response.json();
        return rejectWithValue(errorData.message || "Failed to create task");
      }
      const taskData = await response.json();
      // console.log(taskData)
      return taskData;
    } catch (error) {
      return rejectWithValue("Failed to create task");
    }
  }
);

export const deleteTask = createAsyncThunk("deleteTask", async () => {
  const res = await fetch(
    "http://localhost:4000/api/task/deleteTask/66b923e975a7832efb760b7d"
  );
  return res.json();
});

export const updateTask = createAsyncThunk("updateTask", async () => {
  const res = await fetch(
    "http://localhost:4000/api/task/deleteTask/66b923e975a7832efb760b7d"
  );
  return res.json();
});

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchTodo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.tasks = action.payload;
      })
      .addCase(fetchTodo.rejected, (state) => {
        state.error = true;
        state.isLoading = false;
      })
      .addCase(fetchUserTasks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUserTasks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.tasks = action.payload;
      })
      .addCase(fetchUserTasks.rejected, (state) => {
        state.error = true;
        state.isLoading = false;
        toast.error(state.error || "Something went wrong" )
      })
      .addCase(addTask.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.tasks = action.payload;
        toast.success("Task is added successfully")
      })
      .addCase(addTask.rejected, (state) => {
        state.error = true;
        state.isLoading = false;
        toast.error(state.error||"Failed to add task")
      });
  },
});

export default todoSlice.reducer;
