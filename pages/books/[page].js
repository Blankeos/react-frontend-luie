import React from "react";

import Books from "../../components/Books";

const page = () => {
    <main>
            <h1>Library</h1>
            <p>This page contains all the books available on the website</p>
            <hr />

            <div className="library">
                <Books />
            </div>
    </main>
}

export default page;