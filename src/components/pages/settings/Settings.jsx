import "./settings.css";
import Sidebar from "../../sidebar/Sidebar";

export default function Settings() {
    return (
        <div className="settings">
            <div className="settings-container">
                <div className="settings-titles">
                <span className="settings-upload-title">Upload your acount</span>
                <span className="settings-delete-title">Delete acount</span>
                </div>
                
                <form action="" className="settings-form">
                    <label  className="settings-label">Profile picture</label>
                    <img src="https://images.pexels.com/photos/2194261/pexels-photo-2194261.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="settings-img" />
                    <label htmlFor="settingsImg" className="settings-img-label">
                    <i className="fas fa-user-edit"></i>
                    </label>
                    <label className="settings-label">Username</label>
                    <input type="text" className="settings-input" placeholder="Gio"/>
                    <label className="settings-label">Email</label>
                    <input type="mail" className="settings-input" placeholder="Gio@gmail.com"/>
                    <label className="settings-label">Password</label>
                    <input type="password" className="settings-input" placeholder=""/>
                    <button className="settings-submit">Upload</button>
                </form>
            </div>
            <Sidebar/>
        </div>
    )
}
