import React from 'react'
import { Link } from "react-router-dom";


/* eslint-disable react/prop-types */
const LoginList = ({ logins, title }) => {

    return (
        <div className="login-list">
            <h2>{title}</h2>

            {logins.map((login) => (
                <div className="login-preview" key={login.id}>
                    <Link to={`/logins/${login.id}`}><h2>{login.title}</h2>
                        <p>Written by {login.author}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default LoginList;