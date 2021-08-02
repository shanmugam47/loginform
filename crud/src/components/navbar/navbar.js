import React from 'react'
import { Link } from "react-router-dom";
const  Navbar = ()=> {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand  m-auto" href="#">Register Form</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>



  <Link className="btn btn-primary mr-2" to="/view">Profile View</Link>

 
</nav>
        </div>
    )
}
export default Navbar;
