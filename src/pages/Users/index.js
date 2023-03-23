import LinearProgress from '@mui/material/LinearProgress'
import React, {useState, useEffect} from "react";
import api from '../../services/api'
import { useParams } from "react-router-dom";

import './users.css'

function Users(){

    const {id} = useParams();
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        async function LoadUsers(){
            await api.get(`/users/${id}`)
                 .then((response)=>{
                setUsers(response.data)
                console.log(response.data)
                setLoading(false);
            })
                .catch(()=>{
                    return;
                })
            }
            
        LoadUsers();

    }, [id])

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
            <div className='container-info-autor'>
                <div className='info-autor'>
                    <div>
                        <h2>Informações sobre o autor</h2>
                    </div>
                    <div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam consequat posuere eros et vehicula. 
                            Pellentesque posuere enim at lacus cursus tristique. Donec vitae fringilla enim. Maecenas semper 
                            a nibh sit.
                        </p>
                    </div>
                </div>
            </div>
        <div className='container-users'>
            <div className='cards-user'>
                <div className='card-user'>
                    <article className="users" key={users.id}>
                        <h3>Personal</h3>
                        <p><strong>Name: </strong>{users.name}</p>
                        <p><strong>Username: </strong>{users.name}</p>
                        <p><strong>E-mail: </strong>{users.email}</p>
                    </article>
                </div> 
                <div className='card-user'>
                    <h3>Address</h3>
                    <p><strong>Street: </strong>{users.address.street}</p>
                    <p><strong>Suite: </strong>{users.address.suite}</p>
                    <p><strong>City: </strong>{users.address.city}</p>
                    <p><strong>Zipcode: </strong>{users.address.zipcode}</p>
                </div>
                <div className='card-user'>
                <h3>Contact</h3>
                    <p><strong>Phone: </strong>{users.phone}</p>
                    <p><strong>Website: </strong>{users.website}</p>
                </div>
                <div className='card-user'>
                    <h3>Company</h3>
                    <p><strong>Name: </strong>{users.company.name}</p>
                    <p><strong>CatchPhrase: </strong>{users.company.catchPhrase}</p>
                    <p><strong>BS: </strong>{users.company.bs}</p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Users;