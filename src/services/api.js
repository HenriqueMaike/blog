import axios from "axios";

//Base da API: https://jsonplaceholder.typicode.com/


//Listagem de posts:
//https://jsonplaceholder.typicode.com/posts

//Listagem de comentários de um post:
//https://jsonplaceholder.typicode.com/posts/[ID]/comments

//Listagem de usuários:
//https://jsonplaceholder.typicode.com/users

//Detalhes de um usuário:
//https://jsonplaceholder.typicode.com/users/[ID]

const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
});

export default api;