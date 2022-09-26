import Atom from "../Atom/Atom";
import useFetch from "../useFetch";
import Postslist from "./Postslist";

const Home = () => {

    //custom hook useFetch
    const {data, loading, error} = useFetch('http://localhost:8000/posts');

    return ( 
        <div className="home">
        { loading && <Atom />}
        { error && <div style={{color: 'red'}}>{ error }</div> }
        { data && <Postslist posts={data} title="Blog Posts"/> }
        <br />
        { data && <Postslist posts={data.filter((post) => post.author === 'Lili Ovalle')} title="Lil Posts"/> }
        </div>
     );
}

export default Home;


/*
//Use of state hooks for dynamic variable updates.
    const [name, setName] = useState('Avner'); 
    const [age, setAge] = useState(34);

//Array of content with status hook
    const [blogs, setBlogs] = useState([
        { title: "My first Post", body: "sgdsgdgsgsdfgsdgsgsdfgsgsd", author:"Avner", id:1 },
        { title: "My Second Post", body: "sgdsgdgsgsdfgsdgsgsdfgsgsd", author:"Lil", id:2 },
        { title: "My Third Post", body: "sgdsgdgsgsdfgsdgsgsdfgsgsd", author:"Avner", id:3 }
    ]);

//Function on JS that call state hooks to update variables
    const handleButtonClick = () => {
        //call the hook and update the variable on the template
        setName('Lili');
        setAge(33);
    }

    const handleButtonClickParameters = (name, event) => {
        console.log('Hello ' + name, event);
    }
//Updated the list of post after clicking on the button
    const handleDelete = (postId) => {
        const newPosts = data.filter(blog=> blog.id !== postId);
        setBlogs(newPosts);
    }
//Variable on the template that is updated via the state hooks
    { name } is { age } years old
// Referencing a function onClick of a button
    <button onClick={ handleButtonClick }>Click Me</button>
// Passing parameters to the function from the template
    <button onClick={ (e)=> handleButtonClickParameters('Avner',e) }>Click Me Parameters</button>
*/

