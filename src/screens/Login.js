import React, { useState } from 'react';
import { json, Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const [cardential, setCardential] = useState({ email: "", password: "" })
  // localStorage.setItem("userEmail", json.cardential.email);


  const navigate = useNavigate();


  const handleSubmit = async (e) => {

    e.preventDefault();
    const response = await fetch('http://localhost:5000/api/loginuser', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email: cardential.email, password: cardential.password })
    })

    const resp = await response.json();
    console.log(resp)

    if (!resp.success) {
      alert("invalid credential..")
    }
    if (resp.success) {
      localStorage.setItem("authToken", json.authToken);
      localStorage.setItem("userEmail", cardential.email);

      navigate('/')
    }


  }

  const onchange = (e) => {
    setCardential({ ...cardential, [e.target.name]: e.target.value })
  }




  return (
    <>

      <h1>Login</h1>
      <div className='container'>

        <form onSubmit={handleSubmit}>

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label" >Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={cardential.email} onChange={onchange} />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label" >Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" name='password' value={cardential.password} onChange={onchange} />
          </div>


          <button type="submit" className="btn btn-primary">Submit</button>
          <Link to="/signup" className='m-3 btn btn-danger'>Signup a new User</Link>
        </form>
      </div>

    </>
  )
}
