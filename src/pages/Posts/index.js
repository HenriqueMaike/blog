import React, {useState, useEffect} from "react";
import api from '../../services/api'
import { useParams } from "react-router-dom";
import LinearProgress from '@mui/material/LinearProgress'
import './posts.css'

function Posts(){

    const {id} = useParams();
    const [comments, setComments] = useState([])
    const [loading, setLoading] = useState(true);

    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        async function LoadComments(){
            await api.get(`/posts/${id}/comments`)
                 .then((response)=>{
                setComments(response.data)
                setLoading(false);
            })
                .catch(()=>{

                    return;
                })
            }

        LoadComments();

    }, [id])

    useEffect(()=>{
        async function loadPosts(){
            const response = await api.get("posts");

            setPosts(response.data)
            setLoading(false); 

        }
       
        loadPosts();
            
    }, [])


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
        <div className='container-comment-post'>
            <div className='list-post-comments'>
                {posts.map((post) => {
                if (post.id === Number(id)) {
                    return (
                        <div className='cards-post-comments'>
                            <div className='posts-post-comments'>
                                <article className="comments" key={post.id}>
                                    <strong>{post.title}</strong>
                                    <p>{post.body}</p>
                                </article> 
                            </div>
                            <div className='posts-img-comment'>
                                <img src='/foto.png' alt='imagem'/>
                            </div>
                        </div>
                        )
                    }else{
                        return Error;
                    }
                })}
                <div className="cards-comments-post">
                <h3>COMENTÁRIOS</h3>
                    {comments.map((comments)=>{
                        return(
                            <div className='card-comments-post'>
                                
                                <div className='posts-img-avatar'>
                                    <img src='/avatar.png' alt='imagem'/>
                                </div>

                                <div className='posts-comments-post'>
                                    <article className="comments" key={comments.id}>
                                        <strong>{comments.name}</strong>
                                        <a href={`mailto:${comments.email}`}>{comments.email}</a>
                                        <p>{comments.body}</p>
                                    </article> 
                                </div>
                            </div>
                            
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )

}

export default Posts;