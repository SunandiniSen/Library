import { React, useState } from 'react';
import { useSelector } from 'react-redux';

const Search = () => {
    const books = useSelector(state => state.books.books);
    const [searchValue, setSearchValue] = useState('');

    const handleSearch = (e) => {
        setSearchValue(e.target.value);
        console.log('books', books)
        console.log('Search:', searchValue);
        const filteredBooks = books.filter((book) => book.bookname.includes(e.target.value) || book.description.includes(e.target.value) || book.author.includes(e.target.value));
        console.log("Filtered:", filteredBooks);
    }

    return(
        <>
            <input 
                type="text"
                value={searchValue}
                onChange={(e) => handleSearch(e)}
            />
        </>
    )
}

export default Search;