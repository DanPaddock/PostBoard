import React from 'react';

import { NavLink } from 'react-router-dom';
import './../styles/styles.scss';

const Navigation = () => {
    return (
    <div className = "_content-container">
       <div className = "box-layout">
            <div className="box-layout__box">
                <h1 className="box-layout__title">Post Board</h1>
                <p>Welcome, are you a Student or a Teacher?</p>
                <NavLink className="button" to="/student">Student</NavLink>
                <NavLink className="button" to="/teacher">Teacher</NavLink>
            </div>
       </div>
    </div>
    );
}

export default Navigation;