import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import cookie from 'cookie'
import Home from './components/Home'
import About from './components/About'
import Car from './components/Car'
import Login from './components/Login'

// write checkAuth function here
// Check the cookies for a cookie called "loggedIn"
const checkAuth =() => {
    const cookies = cookie.parse(document.cookie);
    return cookies['loggedin'] ? true : false;

};

// write ProtectedRoute function here
// This will hide routes unless logged in
const ProtectedRoute = (props) => {
    const {component: Component} = props
    return checkAuth() === true ? <Component /> : <Navigate to='/login'/>;
}

const Router = () => {
    return(
        <Routes>
            <Route path="/" element={<ProtectedRoute component={Home}/>} />
            <Route path="/about" element={<ProtectedRoute component={About}/>} />
            <Route path="/car/:id" element={<ProtectedRoute component={Car}/>} />
            <Route path="/login" element={<Login/>} />
        </Routes>
    )
}


export default Router;