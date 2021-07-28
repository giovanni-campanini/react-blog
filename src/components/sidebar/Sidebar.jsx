import "./sidebar.css";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar-item">
                <span className="sidebar-item-title">About Me</span>
                <img src="https://images.pexels.com/photos/3756616/pexels-photo-3756616.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="sidebar-img" />
                <p className="sidebar-text">
                Numquam consectetur voluptatem, eligendi aperiam veniam sunt aspernatur recusandae 
                debitis qui earum a nulla consequaturm.</p>
            </div>
            <div className="sidebar-item">
                <span className="sidebar-item-title">Categories</span>
                <ul className="sidebar-list">
                    <li className="sidebar-list-item">SPORTS</li>
                    <li className="sidebar-list-item">HEALTH</li>
                    <li className="sidebar-list-item">FOOD</li>
                    <li className="sidebar-list-item">MOVIES</li>
                    <li className="sidebar-list-item">SERIES</li>
                    <li className="sidebar-list-item">RANDOM</li>
                </ul>
            </div>
            <div className="sidebar-item">
                <span className="sidebar-item-title">Follow Us</span>
                <div className="sidebar-social">
                    <i class="sidebar-social-icon fab fa-facebook-square"></i>
                    <i class="sidebar-social-icon fab fa-instagram-square"></i>
                    <i class="sidebar-social-icon fab fa-twitter-square"></i>
                    <i class="sidebar-social-icon fab fa-pinterest-square"></i>
                    </div>
                </div>
        </div>
    )
}
