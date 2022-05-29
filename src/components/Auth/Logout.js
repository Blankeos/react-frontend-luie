import apiClient from "../../services/api"

const Logout = () => {
    const handleLogout = e => {
        e.preventDefault()
        apiClient.post('/logout')
        .then(() => {
            console.log("Logged out sucessfully")
        })
    }

    return (
        <form action="" onSubmit={handleLogout}>
            <button type="submit">Logout</button>
        </form>
    )
}

export default Logout;