import axios from 'axios'

export default axios.create({
    baseURL: "/api/todos",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
})