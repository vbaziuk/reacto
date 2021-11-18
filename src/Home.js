import React from 'react'
// import BlogList from './BlogList';
import LoginList from './LoginList';
import useFetch from './useFetch';


const Home = () => {

    const { data: logins, isPending, error } = useFetch('http://localhost:8000/blogs');

    return ( 
        <div className="home">
            { error && <div>{ error }</div> } 
            { isPending && <div>Loading...</div> }
            {/* { logins && <BlogList blogs={logins} title="All Logins" /> } */}
            { logins && <LoginList logins={logins} title="All Logins" /> }
        </div>
     );
}
 
export default Home;