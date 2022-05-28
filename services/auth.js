import { useEffect, useState } from "react"
import apiClient from "./api"

var user = [];

const Auth = () => {
    const [data, setData] = useState([])

    apiClient.get('/sanctum/csrf-cookie')
    .then(() => {
        apiClient.get('/api/get-user')
        .then(response => {
            setData(response.data)
        })
    }, []);

    console.log(data)
    return data
}

export default Auth;