import { Link } from "react-router-dom";
import "./register.css"

export default function Register() {
    return (
        <div className="register">
            <span className="register-title">Register</span>
            <form action="" className="register-form">
                <label className="register-label">Username</label>
                <input type="text" className="register-input" placeholder="Enter your username..."/>
                <label className="register-label">Email</label>
                <input type="mail" className="register-input" placeholder="Enter your email..."/>
                <label className="register-label">Password</label>
                <input type="password" className="register-input" placeholder="Enter your password..."/>
                <button className="register-reg-button">Register</button>
                <Link to="/login" className="link"><button className="register-log-button">Login</button></Link>
                
            </form>
        </div>
    )
}
