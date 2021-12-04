import React from "react"
import { Link } from "react-router-dom"

function Navbar(){
  return(
    <div style={{display:"flex",gap:"20px",justifyContent:"center"}}>
      <Link to="/" >Home</Link>
      <Link to="/about" >About</Link>
      <Link to="/users" >users</Link>
    </div>
  )
}

export default Navbar