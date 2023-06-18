import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./features/todo/todoSlice"
//store that contains the reducers

const store = configureStore({
    reducer:{
        todos: todoReducer,
    }
})

export default store;