import "./singlePage.css";
import "../../sidebar/Sidebar";
import "../../singlePost/SinglePost";
import SinglePost from "../../singlePost/SinglePost";
import Sidebar from "../../sidebar/Sidebar";

export default function SinglePage() {
    return (
        <div class="single-page">
            <SinglePost/>
            <Sidebar/>
        </div>
    )
}
