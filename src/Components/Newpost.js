import { useState } from "react";
import { useHistory } from "react-router-dom";

const Newpost = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Lili Ovalle');

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        const post = { title, body, author };

        fetch('http://localhost:8000/posts', {
            method:'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(post)
        }).then( () => {
            alert("new post added");
            //history.go(-1); //goesback to previus opened page.
            history.push('/'); //sends to the defined route
        })

        
    }

    return ( 
        <div className="newpost">
            <h2>Add New Post</h2>
            <form onSubmit={ handleSubmit }>
                <label>Post Title</label>
                <input 
                    type="text"
                    required
                    placeholder="Enter Post Title"
                    value={ title }
                    onChange={ (e) => setTitle(e.target.value) }
                />
                <label>Post Content</label>
                <textarea
                    required
                    value={ body }
                    onChange={ (e) => setBody(e.target.value) }
                />
                <label>Post Author</label>
                <select 
                    value={ author }
                    onChange={ (e) => setAuthor(e.target.value) }
                >
                    <option value="Avner Leon">Avner</option>
                    <option value="Lili Ovalle">Lili</option>
                </select>
                <button>Add Post</button>
            </form>
        </div>
    );
}
 
export default Newpost;