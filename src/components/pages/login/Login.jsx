import { Link } from "react-router-dom";
import "./login.css"

export default function Login() {
    return (
        <div className="login">
            <span className="login-title">Log in</span>
            <form action="" className="login-form">
                <label className="login-label">Username</label>
                <input type="text" className="login-input" placeholder="Enter your username..."/>
                <label className="login-label">Password</label>
                <input type="password" className="login-input" placeholder="Enter your password..."/>
                <button className="login-log-button">Login</button>
                <Link to="/register" className="link"><button className="login-reg-button">Register</button></Link>
                
            </form>
        </div>
    )
}
