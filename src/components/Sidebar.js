import { Avatar } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/counter/userSlice';
import '../styles/Sidebar.css';

function Sidebar() {
    const user = useSelector(selectUser);
  const recentItem = (topic) => (
    <div className='sidebar__recentItem'>
        <span className='sidebar__hash'></span>
        <p>{topic}</p>
    </div>
  )
  return (
    <div className='sidebar'>
        <div className='sidebar__top'>
            <img src='https://pbs.twimg.com/media/Feo3_-kakAAYihV?format=jpg&name=4096x4096' 
            alt=''
            />
            <Avatar className='sidebar__avatar'/>
            <h2>Ayam</h2>
            <h4>randomUser69@gmail.com</h4>
            
        </div>

        <div className='sidebar__stats'>
            <div className='sidebar__stat'>
                <p>who viewed you</p>
                <p className='sidebar__statNumber'>2,522</p>
            </div>
            <div className='sidebar__stat'>
                <p>views on post</p>
                <p className='sidebar__statNumber'>1,756</p>                
            </div>
        </div>
        <div className='sidebar__bottom'>
            <p>recent</p>
            {recentItem('# reactjs')}
            {recentItem('# programming')}
            {recentItem('# softwareengineering')}
            {recentItem('# design')}
            {recentItem('# developer')}
        </div>
    </div>
  )
}

export default Sidebar
