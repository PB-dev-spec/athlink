import { Link } from 'react-router-dom';
import '../assets/css/Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
        <Link to="/"><h1>Logo Title</h1></Link>
        <Link to="/create"><button>Create</button></Link>
    </nav>
  )
}

export default Navbar