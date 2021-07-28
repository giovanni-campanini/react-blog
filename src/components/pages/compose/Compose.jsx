import "./compose.css"

export default function Compose() {
    return (
        <div className="compose">
            <img src="https://images.pexels.com/photos/7866304/pexels-photo-7866304.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="compose-img" />
            <form action="" className="compose-form">
            
                <div className="compose-area">
                    
                    <label htmlFor="fileImg" className="compose-img-label">
                    <i className="fas fa-folder-plus compose-img-icon"></i>
                    <span className="compose-img-title">Add an image</span>
                    </label>
                    <input type="file" className="compose-img-file" id="fileImg" />
                    <input type="text" className="compose-title" placeholder="Title" />
                </div>
                <div className="compose-area">
                    <textarea name="" className="compose-text" placeholder="What do you think?" id="" cols="30" rows="10"></textarea>
                </div>
                <button className="compose-submit">Publish</button>
            </form>
        </div>
    )
}
