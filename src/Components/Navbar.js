import { Link } from 'react-router-dom';


const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>New Blog Page</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/newpost" style={{ 
                    color: 'white', 
                    backgroundColor: '#f1356d',
                    borderRadius: '8px'
                 }}>New Post</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;