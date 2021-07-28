import "./post.css"

export default function Post() {
    return (
        <div className="post">
            <img src="https://images.pexels.com/photos/8401822/pexels-photo-8401822.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="post-img" />
            <div className="post-categories">
                <span className="post-cat">SPORT</span>
                <span className="post-cat">HEALTH</span>
            </div>
            <div className="post-title">Lorem ipsum dolor sit amet</div>
            <div className="post-date">1 hour ago</div>
            <p className="post-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Veritatis reprehenderit laudantium distinctio incidunt repudiandae, 
            delectus eos vero commodi libero veniam eveniet placeat ex dicta sed id qui! Magni, eum magnam.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam voluptas ut voluptatem porro rem 
            voluptate sequi aliquid repellat, ipsum amet, beatae esse facere, 
            omnis nostrum! Harum explicabo laborum accusantium pariatur!</p>
        </div>
    )
}
