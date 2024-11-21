import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./todoSlice"
import userReducer from "./userSlice"


export const store = configureStore({
    reducer: {
        task: taskReducer,
        user:userReducer
    }

});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;