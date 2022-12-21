import React from 'react';
import { Routes, Route } from "react-router-dom";
import HEADER from '../components/Header';
import Home from '../components/Home';
import JobsNav from '../components/JobsNav';
import Search from '../components/Search';

const routesApp = () => {
  return (
    <>
        <HEADER/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/resultJob' element={<JobsNav/>} />
            <Route path='/search/:jobTitle' element={<Search/>} />
        </Routes>
    </>
  )
}

export default routesApp