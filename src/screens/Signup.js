import React ,{useState}from 'react'
import {  Link ,useNavigate} from 'react-router-dom';

export default function Signup() {

const [cardential,setCardential]=useState({name:"",email:"",password:"",location:""})
const navigate=useNavigate();

  const handleSubmit= async (e) => {

    e.preventDefault();
    const response= await fetch('http://localhost:5000/api/createuser',{
      method:'POST',
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({name:cardential.name,email:cardential.email,password:cardential.password,location:cardential.location} )
    })
    
    const resp= await response.json();
    console.log(resp)
    if(!resp.success){
      alert("invalid credential..")
    }
   
    if(resp.success){
      // alert("invalid credential..")
      navigate('/login')
    }
    
  }

  const onchange=(e)=>{
    setCardential({...cardential,[e.target.name]:e.target.value})
  }




  return (
    <>

    <h1>Signup</h1>
<div className='container'>
 
<form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="name" className="form-label" >Name</label>
    <input type="text" className="form-control" name='name'  value={cardential.name}  onChange={onchange}  />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label" >Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  name='email' value={cardential.email} onChange={onchange} />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label" >Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"  name='password' value={cardential.password}  onChange={onchange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Address</label>
    <input type="text" className="form-control" id="exampleInputPassword1" name='location'  value={cardential.location} onChange={onchange} />
  </div>
 
  <button type="submit" className="btn btn-primary">Submit</button>
  <Link to="/login" className='m-3 btn btn-danger'>Already a User</Link>
</form>
</div>
      
    </>
  )
}
