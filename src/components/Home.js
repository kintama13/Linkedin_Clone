import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import '../styles/Home.css';
import { selectUser } from "../features/counter/userSlice";
import Feed from './Feed';
// import HEADER from './Header';
import Sidebar from './Sidebar';
// import Login from './Login';
import Widgets from './Widgets';



function Home() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const handleClick=()=>{
    localStorage.clear();
    window.location.reload();
  }
  

  useEffect(() => {

  }, [])

  return (
    <div className="app">
        <div className='app__body'>
        <Sidebar />
        <Feed />
        <Widgets />
      </div>
    </div>
  );
}

export default Home;
