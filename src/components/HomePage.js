import React from 'react';

import { Link } from 'react-router-dom';
import './../styles/styles.scss';

const HomePage = () => {
    return (
    <div className = "_content-container">
       <div className = "box-layout">
            <div className="box-layout__box">
                <h1 className="box-layout__title">Post Board</h1>
                <p>Welcome, are you a Student or a Teacher?</p>
                <Link className="button" to="/student">Student</Link>
                <Link className="button" to="/teacher">Teacher</Link>
            </div>
       </div>
    </div>
    );
}

export default HomePage;