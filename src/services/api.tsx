import axios from 'axios'

const api = axios.create({
    baseURL: "https://arcane-coast-51898.herokuapp.com/",
})

export default api
