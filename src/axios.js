//this axios file its a library to make reques to server or an api endpoint

import axios from 'axios'

const instance=axios.create({
    baseURL:"https://api.themoviedb.org/3"
})
export default instance;