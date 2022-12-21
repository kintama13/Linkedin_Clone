// import React, { useState } from 'react'
// import '../styles/Login.css';

// function Login() {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [name, setName] = useState("");
//     const [profilePic, setProfilePic] = useState("");

//     const loginToApp = (e) => {
//         e.preventDefault();
//     };

//     const register = () => {
//         if (!name) {
//             return alert("Please enter a full name")
//         }
//     };

//     return (
//         <div className='login'>
//             <img src='https://proinfluent.b-cdn.net/wp-content/uploads/2019/05/Logo-LinkedIn-officiel.png' alt=''></img>

//             <form>
//                 <input value={name} onChange={(e) => setName(e.target.value)} placeholder='Full name (required if registering)' type="text"/>

//                 <input value={profilePic} onChange={(e) => setProfilePic(e.target.value)} placeholder='Profile pic URL (optional)' type="text"></input>

//                 <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' type="email"></input>

//                 <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' type="password"></input>

//                 <button type='submit' onClick={loginToApp}>Sign In</button>
//             </form>

//             <p>Not a member?{" "}
//                 <span className="login__register" onClick={register}>
//                     Register Now
//                 </span>
//             </p>
//         </div>
//     );
// }

// export default Login