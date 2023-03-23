import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Header from "./components/Header";

import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Erro from "./pages/Erro";
import Users from "./pages/Users";

function RoutesApp(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/posts/:id/comments' element={<Posts/>}/>
                <Route path='/users/:id' element={<Users/>}/>

                <Route path='*' element={<Erro/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;