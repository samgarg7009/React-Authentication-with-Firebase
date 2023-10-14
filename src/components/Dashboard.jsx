import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {Card,Alert,Button} from "react-bootstrap"
import { useAuth } from "./Context/AuthContext";


const Dashboard = () => {

  const {currentUser,logout} = useAuth();
  const [error, setError] = useState("")
  const history = useNavigate()

  const handleLogOut = async () =>{
    setError('')

    try {
      await logout()
      history('/login')
    }catch{
      setError("failed to log out")
    }
  }

  return (
    <>
      {/* instead of using <a/>, use <link> or <NavLink> beacuse we want the page to render itself without reload */}
      {/* <div className="nav">

        <NavLink to="/login"
          // style={({ isActive }) => ({
          //   color: isActive ? "#545e6f" : '#fff',
          //   background: isActive ? '#f0f0f0' : '#024e4e',
          // })}
          >
          Log In
        </NavLink>
        <NavLink to="/"
          // style={({ isActive }) => ({
          //   color: isActive ? '#545e6f' : '#fff',
          //   background: isActive ? '#f0f0f0' : '#024e4e',
          // })}
          >
          About us
        </NavLink>
        <NavLink to="/signup"
          // style={({ isActive }) => ({
          //   color: isActive ? '#545e6f' : '#fff',
          //   background: isActive ? '#f0f0f0' : '#024e4e',
          // })}
          >
          Sign Up
        </NavLink>
      </div> */}

      <Card>
        <Card.Body>
          <h2 className='text-center mb-4'>Profile</h2>
          {error && <Alert variant='danger'>{error}</Alert>}
          <strong> Email:</strong> {currentUser && currentUser.email}
          <Link to="/update" className='btn btn-primary w-100 mt-3'> Update Profile</Link>
        </Card.Body>
      </Card>
      <div className='w-100 text-center mt-2'>
        <Button variant='link' onClick={handleLogOut}>Log Out</Button>
      </div>
      
    </>
  )
}

export default Dashboard
