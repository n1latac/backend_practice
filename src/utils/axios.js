import axious from 'axios';

const instance = axious.create({
    baseURL: 'http://localhost/3004/api'
})

instance.interceptors.request.use(config=>{
    config.header.Authorization = window.localStorage.getItem('token')  //к какждому запросу добаляем наш токен

    return config
})

export default instance