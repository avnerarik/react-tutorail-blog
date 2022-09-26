import { useHistory, useParams } from "react-router-dom";
import useFetch from "../useFetch";
import Atom from "../Atom/Atom";

const Postcontent = () => {

    const { id } = useParams();
    const {data: post, loading, error } = useFetch('http://localhost:8000/posts/' + id);
    const history = useHistory();

    const handleDeleteClick = () => {
        fetch('http://localhost:8000/posts/' + post.id, {
            method: 'DELETE'
        }).then(()=>{
            history.push("/");
        })
    }

    return (  
        <div className="post-content">
            <h2>Post Content</h2>
            { loading && <Atom />}
            { error && <div style={{color: 'red'}}>{ error }</div> }
            { post && (
                <article className="content">
                    <h2>{ post.title }</h2>
                    <p>Written by { post.author }</p>
                    <div>{ post.body }</div>
                    <button onClick={handleDeleteClick}>Delete Post</button>
                </article>
            )}
        </div>
    );
}
 
export default Postcontent;