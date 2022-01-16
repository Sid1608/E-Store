import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/'
const TOKEN= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZTBmOTM3NjQ1YTBlNDE1NjA3YTcyMiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MjMyMjY0MSwiZXhwIjoxNjQyNTgxODQxfQ.vArB-DxRHCl9SiiBQPl-AtQhRcGYUjON4ZEt6N73SEQ"
export const publicRequest=axios.create({
    baseUrl: BASE_URL
});
export const userRequest=axios.create({
    baseUrl: BASE_URL,
    header:{
        token:`Bearer ${TOKEN}`
    }
})