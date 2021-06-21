import { configureStore } from "@reduxjs/toolkit";
import BookReducer from "./BookDataSlice";

export default configureStore({
    reducer:{
        books: BookReducer
    }
});