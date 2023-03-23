import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PaginationComponent from '../../components/Pagination/PaginationComponent';
import SelectPagination from '../../components/Pagination/SelectPagination';
import api from '../../services/api'
import LinearProgress from '@mui/material/LinearProgress'

import './home.css'
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';

function Home(){

    //variaveis de requisicao
    const [posts, setPosts] = useState([]);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);


    //variaveis responsaveis pela paginacao

    const [postsPerPage, setPostsPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(0)

    const pages = Math.ceil(posts.length / postsPerPage);

    const startIndex = currentPage * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    const currentPosts = posts.slice(startIndex, endIndex);

    //funcao para requisicao dos post na API
    useEffect(()=>{
        async function loadPosts(){
            const response = await api.get("posts");
            const responseUser = await api.get("users");

            setPosts(response.data)
            setUsers(responseUser.data) 

            setLoading(false);
        }
       
        loadPosts();  

    }, [])
    
    
    //funcao para retornar ao index 0 quando seleciona a quantidade de posts por pagina
    useEffect(()=>{
        setCurrentPage(0);
    }, [postsPerPage])

    //funcao para controlar o elemento do Material UI quando a funcao ainda nao retornou o resultado da requisicao
    if(loading){
        return(
            <div>
                <div className='loading'>
                    <LinearProgress />
                </div>
            </div>
        );
    }
    
    return(
        <div>
            <Banner/>
        <div className='container'>
            <div className='ListPosts'>
                {/* Acessa o component que seleciona quantos post por pagina serao exibidos */}
                <SelectPagination postsPerPage={postsPerPage} setPostsPerPage={setPostsPerPage}/>
                {currentPosts.map((posts)=>{
                    return(
                        <div>
                            <div className='cards'>
                                <div className='posts'>
                                    <article key={posts.id}>
                                        {/* ao clica no link encaminha o ID como parametro atraver da rota para ser acessado em outra pagina */}
                                        <Link to={`/posts/${posts.id}/comments`}><strong>{posts.title}</strong></Link>
                                        <p>{posts.body}</p>

                                        {
                                        users.map((users)=>{
                                                if(posts.userId === users.id){
                                                    return(
                                                        <div>
                                                            <Link to={`/users/${users.id}`}><p className='autor'>Autor: {users.name}</p></Link>
                                                            <Link to={`/posts/${posts.id}/comments`}><p className='comentarios'>Comentarios</p></Link>
                                                        </div>
                                                    )
                                                }else{
                                                    return console.log(Error); 
                                                }
                                            })       
                                        }
                                    </article> 
                                </div>
                                                               
                                <div className='posts-img'>
                                    <img src='/foto.png' alt='imagem'/>
                                </div>
                            </div>
                        </div>
                        )
                    })

                }
                {/* Acessa o component de paginacao */}
                <PaginationComponent pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage}/>

            </div> 
        </div>
        <Footer/>
        </div>
    )
}

export default Home;