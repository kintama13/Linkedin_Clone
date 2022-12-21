import React, { useEffect, useState } from 'react'
import '../styles/Feed.css'
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Post';
// import { db } from '../firebase';
// import firebase from 'firebase'


function Feed() {
  const [input, setInput] = useState("")
  const[posts, setPosts] = useState([]);

  // useEffect(() => {
  //   db.collection('posts').onSnapshot((snapshot) => 
  //   setPosts(
  //     snapshot.docs.map((doc) => (
  //       {
  //         id: doc.id,
  //         data: doc.data(),
  //       }
  //     ))
  //   )
  //   );
  //   db.collection("posts").onSnapshot((snapshot) => 
  //   setPosts(
  //     snapshot.docs.map((doc) => (
  //       {
  //         id: doc.id,
  //         data: doc.data(),
  //       }
  //     ))
  //   )
  //   );
  // }, [])

  const sendPost = (e) => {
    e.preventDefault();

    // db.collection('posts').add({
    //   name: 'Sonny Shanga',
    //   description: 'this the test',
    //   message: input,
    //   photoUrl: '',
    //   timestamp: firebase.firestore.FieldValue.serverTimestamp()
    // });
    
  }
  return (
    <div className='feed'>
      <div className='feed__inputContainer'>
        <div className='feed__input'>
            <CreateIcon />
            <form>
                <input type='text' value={input} onChange={(e) => setInput(e.target.value)}/>
                <button onClick={sendPost} type='submit'>send</button>
            </form>
        </div>
        <div className='feed__inputOption'>
            <InputOption Icon={ImageIcon} title='Photo' color='#70B5F9'/>
            <InputOption Icon={SubscriptionsIcon} title='Video' color='#E7A33E'/>
            <InputOption Icon={EventNoteIcon} title='Event' color='#C0CBCD'/>
            <InputOption Icon={CalendarViewDayIcon} title='Write article' color='#7FC15E'/>
        </div>
      </div>

      {/* Posts */}
      {posts.map((posts) => (
        <Post/>
      ))}

      <Post
      name="Shny Sangha"
      description="This is the test"
      message="Wow this work"
      />


      {/* {posts.map((post) =>
        <Post />  
      )}
      <Post
      name='anonym' 
      description='testing' 
      message='bjirs'/> */}

    </div>
  )
}

export default Feed
