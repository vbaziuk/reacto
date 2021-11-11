// note: a component is just a function that exports a jsx template
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The Baz Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>


                {/* styling for the new blog button */}
                {/* <a href="/create" style={{
                    color: "white",
                    backgroundColor: '#f1356d',
                    borderRadius: '8px'
                }}>New Blog</a> */}
            </div>
        </nav>
    );
}
 
export default Navbar;