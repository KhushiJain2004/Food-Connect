import './Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar()
{
    return(
        <div className="nav">
            <div className="logo">
               <Link to="/" className="link"> <h2>Harvest Hope</h2></Link>
            </div>
            <div className="center">
                <Link to="/" className="link">Home</Link >
                <Link to="" className="link">About</Link >
                <Link to="" className="link">Contact Us</Link >
            </div>
            <div className="end">
                {/* <Link to="/login" className='login link'>Sign in</Link> */}
                <Link to="/connect" className='register link'>Sign up</Link>
            </div>
        </div>
    )
}