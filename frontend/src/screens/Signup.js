// import React ,{useState}from 'react'
// import {  Link ,useNavigate} from 'react-router-dom';

// export default function Signup() {

// const [cardential,setCardential]=useState({name:"",email:"",password:"",location:""})
// const navigate=useNavigate();

//   const handleSubmit= async (e) => {

//     e.preventDefault();
//     const response= await fetch('http://localhost:5000/api/createuser',{
//       method:'POST',
//       headers:{
//         "Content-Type":"application/json"
//       },
//       body:JSON.stringify({name:cardential.name,email:cardential.email,password:cardential.password,location:cardential.location} )
//     })
    
//     const resp= await response.json();
//     console.log(resp)
//     if(!resp.success){
//       alert("invalid credential..")
//     }
   
//     if(resp.success){
//       // alert("invalid credential..")
//       navigate('/login')
//     }
    
//   }

//   const onchange=(e)=>{
//     setCardential({...cardential,[e.target.name]:e.target.value})
//   }




//   return (
//     <>

//     <h1>Signup</h1>
// <div className='container'>
 
// <form onSubmit={handleSubmit}>
//   <div className="mb-3">
//     <label htmlFor="name" className="form-label" >Name</label>
//     <input type="text" className="form-control" name='name'  value={cardential.name}  onChange={onchange}  />
//   </div>
//   <div className="mb-3">
//     <label htmlFor="exampleInputEmail1" className="form-label" >Email address</label>
//     <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  name='email' value={cardential.email} onChange={onchange} />
//     <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//   </div>
//   <div className="mb-3">
//     <label htmlFor="exampleInputPassword1" className="form-label" >Password</label>
//     <input type="password" className="form-control" id="exampleInputPassword1"  name='password' value={cardential.password}  onChange={onchange}/>
//   </div>
//   <div className="mb-3">
//     <label htmlFor="exampleInputPassword1" className="form-label">Address</label>
//     <input type="text" className="form-control" id="address" name='location'  value={cardential.location} onChange={onchange} />
//   </div>
 
//   <button type="submit" className="btn btn-primary">Submit</button>
//   <Link to="/login" className='m-3 btn btn-danger'>Already a User</Link>
// </form>
// </div>
      
//     </>
//   )
// }


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Signup() {
  const [cardential, setCardential] = useState({ name: "", email: "", password: "", location: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/api/createuser', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: cardential.name,
        email: cardential.email,
        password: cardential.password,
        location: cardential.location
      })
    });

    const resp = await response.json();
    console.log(resp);
    if (!resp.success) {
      alert("invalid credential..");
    }

    if (resp.success) {
      navigate('/login');
    }
  };

  const onchange = (e) => {
    setCardential({ ...cardential, [e.target.name]: e.target.value });
  };

  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: Arial, sans-serif;
        }

        body {
          background-image: url('https://img.freepik.com/free-psd/delicious-burger-food-menu-facebook-cover-template_120329-1629.jpg?t=st=1745904849~exp=1745908449~hmac=c4bde4f0b4289d0edcfd27dd321780a70403d5f8c0c8e92e47721cab819b6482&w=996');
          background-size: cover;
          background-position: center;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .container {
          background-color: rgba(0, 0, 0, 0.7);
          display: flex;
          padding: 40px;
          border-radius: 15px;
          box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
          max-width: 800px;
          width: 90%;
          color: white;
        }

        .image-section {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .image-section img {
          width: 100%;
          max-width: 300px;
        }

        .login-section {
          flex: 1;
          padding: 0 20px;
        }

        .login-section h2 {
          margin-bottom: 20px;
        }

        .login-section input {
          width: 100%;
          padding: 12px;
          margin: 10px 0;
          border: none;
          border-radius: 8px;
        }

        .login-section .btn {
          width: 100%;
          padding: 12px;
          background-color: #ff4d4f;
          border: none;
          color: white;
          border-radius: 8px;
          font-size: 16px;
          margin: 10px 0;
          cursor: pointer;
        }

        .login-section .btn:hover {
          background-color: #e03e3f;
        }

        .login-section p {
          font-size: 14px;
          margin-top: 15px;
        }

        .login-section a {
          color: #ff4d4f;
          text-decoration: none;
        }
      `}</style>

      <div className="container">
        <div className="image-section">
          <img
            src="https://cdn-icons-png.freepik.com/256/7541/7541708.png?ga=GA1.1.2096234483.1746990112&semt=ais_hybrid"
            alt="Logo"
          />
        </div>

        <div className="login-section">
          <h2>Signup</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                value={cardential.name}
                onChange={onchange}
                placeholder="Full Name"
              />
            </div>

            <div>
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={cardential.email}
                onChange={onchange}
                placeholder="username@gmail.com"
              />
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={cardential.password}
                onChange={onchange}
                placeholder="Password"
              />
            </div>

            <div>
              <label htmlFor="location">Address</label>
              <input
                type="text"
                id="location"
                name="location"
                value={cardential.location}
                onChange={onchange}
                placeholder="Address"
              />
            </div>

            <button type="submit" className="btn">Submit</button>
            <Link to="/login" className="btn">Already a User</Link>
          </form>
        </div>
      </div>
    </>
  );
}
