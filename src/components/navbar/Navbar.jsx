import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
    const user = true;
    return (
        <div className="navbar">
            <div className="navbar-social">
            <i className="navbar-social-icon fab fa-facebook-square"></i>
            <i className="navbar-social-icon fab fa-instagram-square navbar-social-ins"></i>
            <i className="navbar-social-icon fab fa-twitter-square"></i>
            <i className="navbar-social-icon fab fa-pinterest-square"></i>
            </div>
            <div className="navbar-categories">
                <ul className="navbar-categories-list">
                    <li className="navbar-categories-item"><Link to="/" className="link">HOME</Link></li>
                    <li className="navbar-categories-item"><Link to="/" className="link">ABOUT</Link></li>
                    <li className="navbar-categories-item"><Link to="/" className="link">CONTACT</Link></li>
                    <li className="navbar-categories-item"><Link to="/compose" className="link">{user && "COMPOSE"}</Link></li>
                    <li className="navbar-categories-item"><Link to="/login" className="link">{user && "LOGOUT"}</Link></li>
                </ul>
            </div>
            <div className="navbar-user">
                {
                    user ? (
                        <Link to="/settings" className="navbar-user-img link"><img src="https://images.pexels.com/photos/2194261/pexels-photo-2194261.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="navbar-user-img" /></Link>
                        
                    ) : (
                        <ul className="navbar-categories-list">
                            <li className="navbar-categories-item"><Link to="/login" className="link">LOGIN</Link></li>
                            <li className="navbar-categories-item"><Link to="/register" className="link">REGISTER</Link></li>
                        </ul>
                    )
                }
                
                <i className="navbar-user-icon fas fa-search"></i>
            </div>
        </div>
    )
}
