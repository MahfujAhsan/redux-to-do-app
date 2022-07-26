import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "../features/books/BooksSclice";

const store = configureStore({
    reducer: {
        booksReducer: booksReducer,
    }
})

export default store;