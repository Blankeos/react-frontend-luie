import React, { useState, useEffect } from "react";
import axios from "axios";

const Books = () => {
    const [books, setBooks] = useState([])
    const [pages, setPages] = useState([])
    const [url, setUrl] = useState("http://localhost:8000/api/book?page="+pages.current)
    const [hasPrev, setHasPrev] = useState(false)
    const [hasNext, setHasNext] = useState(false)
    const [httpResponse, setHttpResponse] = useState(0)
    
    useEffect(() => {
        if(response.data.current_page < response.data.last_page) var current_page

        axios.get(url)
            .then(response => {
                console.log(response.data),
                setBooks(response.data.data),
                setPages({
                    "current" : response.data.current_page,
                    "next" : response.data.current_page+1,
                    "last" : response.data.last_page
                }),
                console.log(pages)
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
                {
                    if()
                }
            </div>
        </>
    )
}

export default Books;