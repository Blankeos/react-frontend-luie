import Books from "../../components/Books";
// import React, { useState, useEffect } from "react"

function LibraryPage() {
    return(
        <main>
            <h1>Library</h1>
            <p>This page contains all the books available on the website</p>
            <hr />

            <div className="library">
                <Books />
            </div>
        </main>
    )
}

export default LibraryPage;