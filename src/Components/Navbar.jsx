import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
 function handlenav(ans){
 props.datatransfer(ans)

 }

  return (
    <div>
   <nav className="navbar navbar-expand-lg bg-warning text-danger">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">NewsApp</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link   className="nav-link active" aria-current="page" href="#">Home</Link>
        </li>
        <li className="nav-item">
          <Link onClick={()=>handlenav('sports')} className="nav-link" href="#">Sports</Link>
        </li>
        <li className="nav-item">
          <Link  onClick={()=>handlenav('cricket')}className="nav-link" href="#">Cricket</Link>
        </li>
        <li className="nav-item">
          <Link onClick={()=>handlenav('entertainment')} className="nav-link" href="#">Entertainment</Link>
        </li>
       
      
      </ul>
     
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar
