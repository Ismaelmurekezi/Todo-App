import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


interface TaskResponse {
  success: boolean;
  message: string;
  tasks: [];
}



interface InitialState {
    isLoading: boolean;
    error: boolean;
    tasks: TaskResponse[];
}

const initialState: InitialState = {
    isLoading: false,
    tasks: [],
    error: false,
};



export const fetchTodo = createAsyncThunk("fetchTodo", async () => {
  const res = await fetch("http://localhost:4000/api/task/getAllTasks");
  return res.json();
});


export const addTask = createAsyncThunk("addTask", async () => {
    const res = await fetch("http://localhost:4000/api/task/add",
        {
            method: "POST",
            headers: {
            
            }
        },

  );
  return res.json();
});

export const deleteTask = createAsyncThunk('deleteTask', async () => {
    const res = await fetch(
      "http://localhost:4000/api/task/deleteTask/66b923e975a7832efb760b7d"
    );
    return res.json()
})

export const updateTask = createAsyncThunk("updateTask", async () => {
  const res = await fetch(
    "http://localhost:4000/api/task/deleteTask/66b923e975a7832efb760b7d"
  );
  return res.json();
});


const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(fetchTodo.pending, (state) => {
            state.isLoading = true;

        })
        .addCase(fetchTodo.fulfilled, (state, action) => {
            state.isLoading = false;
            state.tasks=action.payload
        })
        .addCase(fetchTodo.rejected, (state) => {
            state.error = true;
            state.isLoading=false
        })
    }
})


export default todoSlice.reducer
