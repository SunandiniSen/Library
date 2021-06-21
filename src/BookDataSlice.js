import { createSlice } from "@reduxjs/toolkit";

export const bookData = createSlice({
    name: "bookData",
    initialState: {
        books: [
            {
                bookname: 'Book1',
                description: 'Desc1',
                count: 4,
                author: 'Author1',
            },
            {
                bookname: 'Book2',
                description: 'Desc2',
                count: 3,
                author: 'Author2',
            },
            {
                bookname: 'Book3',
                description: 'Desc3',
                count: 1,
                author: 'Author1',
            }
        ]
    },
    reducers:{
        addBook: (state, actions) => {
            state.books = [...state.books, actions.payload];
        }
    }
});

export const { addBook } = bookData.actions;
export default bookData.reducer;