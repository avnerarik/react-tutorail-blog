import { Link } from "react-router-dom";

const Postslist = (props) => {

    const list = props.posts;
    const listTitle = props.title;
    //const handleOnClickDelete = props.handleDelete;

    return ( 
        <div className="posts-list">
            <h2>{ listTitle } </h2>
            { list.map((post) => (
                <div className="blog-preview" key={post.id}>
                    <Link to={`/postcontent/${post.id}`}>
                        <h2>{post.title}</h2>
                        <p>Writen by { post.author }</p>
                        {/*<button onClick={()=>handleOnClickDelete(post.id)}>Delete Post</button>*/}
                    </Link>
                </div>
            )) }
        </div>    
    );
}
 
export default Postslist;

//