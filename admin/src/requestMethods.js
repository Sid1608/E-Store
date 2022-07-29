import axios from 'axios';

const BASE_URL = "http://localhost:8080/api/"
// const TOKEN = localStorage.getItem('persist:root')
//   ? JSON.parse(JSON.parse(localStorage.getItem('persist:root'))?.user)
//       ?.currentUser?.token
//   : '';
const TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZTBmOTM3NjQ1YTBlNDE1NjA3YTcyMiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1OTAxMjg3NiwiZXhwIjoxNjU5MjcyMDc2fQ.Sbre64OA5DwQugviSxeaA8dAWrU92A29uPXq2AgDetA"

export const publicRequest=axios.create({
    baseURL: BASE_URL
});
export const userRequest=axios.create({
    baseURL: BASE_URL,
    headers:{
        token:`Bearer ${TOKEN}`
    }
})