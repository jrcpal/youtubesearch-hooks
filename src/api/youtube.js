import axios from 'axios'

const KEY = 'AIzaSyDu2ZSsxaL_3vUQl6z-rLj4pxuQ1xTHLI4'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    key: KEY,
    maxResults: 7,
    part: 'snippet',
    type: 'video'
  }
})