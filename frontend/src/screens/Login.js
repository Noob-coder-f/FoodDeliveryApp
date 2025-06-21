// import React, { useState } from 'react';
// import { json, Link, useNavigate } from 'react-router-dom';

// export default function Login() {
//   const [cardential, setCardential] = useState({ email: "", password: "" })
//   // localStorage.setItem("userEmail", json.cardential.email);


//   const navigate = useNavigate();


//   const handleSubmit = async (e) => {

//     e.preventDefault();
//     const response = await fetch('http://localhost:5000/api/loginuser', {
//       method: 'POST',
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({ email: cardential.email, password: cardential.password })
//     })

//     const resp = await response.json();
//     console.log(resp)

//     if (!resp.success) {
//       alert("invalid credential..")
//     }
//     if (resp.success) {
//       localStorage.setItem("authToken", json.authToken);
//       localStorage.setItem("userEmail", cardential.email);

//       navigate('/')
//     }


//   }

//   const onchange = (e) => {
//     setCardential({ ...cardential, [e.target.name]: e.target.value })
//   }




//   return (
//     <>

//       <h1>Login</h1>
//       <div className='container'>

//         <form onSubmit={handleSubmit}>

//           <div className="mb-3">
//             <label htmlFor="exampleInputEmail1" className="form-label" >Email address</label>
//             <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={cardential.email} onChange={onchange} />
//             <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//           </div>
//           <div className="mb-3">
//             <label htmlFor="exampleInputPassword1" className="form-label" >Password</label>
//             <input type="password" className="form-control" id="exampleInputPassword1" name='password' value={cardential.password} onChange={onchange} />
//           </div>


//           <button type="submit" className="btn btn-primary">Submit</button>
//           <Link to="/signup" className='m-3 btn btn-danger'>Signup a new User</Link>
//         </form>
//       </div>

//     </>
//   )
// }

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [cardential, setCardential] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/api/loginuser', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email: cardential.email, password: cardential.password })
    });

    const resp = await response.json();
    console.log(resp);

    if (!resp.success) {
      alert("Invalid credentials..");
    } else {
      localStorage.setItem("authToken", resp.authToken);
      localStorage.setItem("userEmail", cardential.email);
      navigate('/');
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

        .login-section .options {
          text-align: center;
          margin: 10px 0;
        }

        .login-section .social-icons {
          display: flex;
          justify-content: space-around;
          margin: 10px 0;
        }

        .social-icons img {
          width: 32px;
          cursor: pointer;
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
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                id="exampleInputEmail1"
                name="email"
                value={cardential.email}
                onChange={onchange}
                placeholder="username@gmail.com"
              />
            </div>

            <div>
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                id="exampleInputPassword1"
                name="password"
                value={cardential.password}
                onChange={onchange}
                placeholder="Password"
              />
            </div>

            <button type="submit" className="btn">Submit</button>
          </form>

          <a href="#" style={{ float: 'right', fontSize: '12px' }}>Forgot Password?</a>

          <div className="options">or continue with</div>
          <div className="social-icons">
            <img src="https://cdn-icons-png.flaticon.com/512/281/281764.png" alt="Google" />
            <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" />
            <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Apple" />
          </div>

          <p>
            Don't have an account yet? <Link to="/signup" className="btn">Register for free</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
