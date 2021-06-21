import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import {addBook} from './BookDataSlice';

const Addbook = () => {
    const [bookname, setBookname] = useState('');
    const [description, setDescription] = useState('');
    const [count, setCount] = useState(0);
    const [author, setAuthor] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(
            addBook({
                bookname: bookname,
                description: description,
                count: count,
                author: author,
            })
        )
    };

    return (
        <>
            <form id="addBookForm" onSubmit={(e) => handleSubmit(e)}>
                <input
                    type="text"
                    className="inputtext"
                    onChange={(e) => setBookname(e.target.value)}
                    value={bookname}
                    placeholder="Enter Book Title"
                />
                <input
                    type="text"
                    className="inputtext"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    placeholder="Enter Book Description"
                />
                <input
                    type="number"
                    className="inputtext"
                    onChange={(e) => setCount(e.target.value)}
                    value={count}
                    placeholder="Enter count"
                />
                <input
                    type="text"
                    className="inputtext"
                    onChange={(e) => setAuthor(e.target.value)}
                    value={author}
                    placeholder="Enter Author"
                />

                <button type="submit"> Add Book </button>
            </form>
        </>
    )
}

export default Addbook;
