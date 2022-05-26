import React, { useState, useEffect } from "react";
import apiClient from "../services/api";

const Books = () => {
    const [books, setBooks] = useState([])
    const [pages, setPages] = useState([])
    
    useEffect(() => {
        apiClient.get("http://localhost:8000/api/book")
            .then(response => {
                setBooks(response.data.data),
                setPages({
                    "current" : response.data.current_page,
                    "next" : response.data.current_page+1,
                    "last" : response.data.last_page
                })
            }, [])
            .catch(error => console.error(error))
    }, [])

    const bookList = books.map((book) =>
        <li key={book.id}>{book.title} by {book.author}</li>
    );

    return  (
        <>
            <ul>
                {bookList}
            </ul>
            <div className="page_links">
                <p>Page {pages.current} of {pages.last}</p>
            </div>
        </>
    )
}

export default Books;