import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID P1-ikcuHZ4ZxCojloaZr6KX36nGGhBFEHUh1lVvA4Wg'
  } 
})