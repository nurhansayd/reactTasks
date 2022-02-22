import {Link} from "react-router-dom"
import {AiFillStar} from "react-icons/ai"
import { useSelector } from "react-redux"

export default function Navbar(){
 
  const favList = useSelector((state)=>state.star.favList)

    return(
        <>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link to="/" className="navbar-brand">Home</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
       <Link to="/" className="nav-link">Home</Link>
      </li>
      <li className="nav-item">
      <Link to="/login" className="nav-link">Login</Link>
      </li>
      <li className="nav-item">
      <Link to="/register" className="nav-link">Register</Link>
      </li>
      <li className="nav-item">
      <Link to="/movies" className="nav-link">Movies</Link>
      </li>
      <li className="nav-item">
      <Link to="/favmovies" className="nav-link">Favorite movies</Link>
      </li>

      <li className="nav-item">
      <p className="ms-1 pt-2"><AiFillStar className="text-warning float-end fs-3"/> <b>{favList.length}</b>  </p>
      </li>
    </ul>
  </div>
</nav>
        </>
    )

}