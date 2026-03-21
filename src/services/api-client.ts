import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api/',
    params: {
        key: '50245e0d9b524f1d8db1b877f21087a9'
    }
})