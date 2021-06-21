import { React, useState } from 'react';
import { useSelector } from 'react-redux';

const ShowTable = () => {
    const books = useSelector((state) => state.books.books);
    return(
        <>
            <h3> Available Books </h3>
            <table>
                <tbody>
                    <tr>
                        <th> Book Name </th>
                        <th> Description </th>
                        <th> Count </th>
                        <th> Author </th>
                    </tr>
                    {
                        books.map((book, indx) => (
                            <tr>
                                <td> {book.bookname} </td>
                                <td> {book.description} </td>
                                <td> {book.count} </td>
                                <td> {book.author} </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}

export default ShowTable;
