import axios from 'axios';

const KEY = 'AIzaSyDeuHGWmWzNq0eA-rYL0sXHmM0UOW3YRNI'; //marked as uppercase, since it's a constant value


export default axios.create({ //basic axios request to API
    baseURL: 'https://www.googleapis.com/youtube/v3', //baseURL that we can use to append request link to
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: `${KEY}`
    }

})



