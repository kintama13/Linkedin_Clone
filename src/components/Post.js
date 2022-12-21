import { Avatar } from '@mui/material';
import React from 'react';
import '../styles/Post.css';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import InputOption from './InputOption';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

function Post({name, description, message, photoUrl}) {
  return (
    <div className='post'>
        <div className='post__header'>
            <Avatar />
            <div className='post__info'>
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>
      <div className='post__body'>
        <p>{message}</p>
      </div>
      <div className='post__buttons'>
        <InputOption Icon={ThumbUpAltOutlinedIcon} title='like' color='gray'/>
        <InputOption Icon={ChatOutlinedIcon} title='comment' color='gray'/>
        <InputOption Icon={ShareOutlinedIcon} title='share' color='gray'/>
        <InputOption Icon={SendOutlinedIcon} title='send' color='gray'/>
      </div>
    </div>
  )
}

export default Post
