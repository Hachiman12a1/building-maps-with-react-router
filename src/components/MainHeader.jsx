import React from 'react';
import { Link } from 'react-router-dom';

MainHeader.propTypes = {
    
};

function MainHeader(props) {
    return (
        <header>
            <ul>
                <li>
                    <Link to='/welcome'>Welcome</Link>
                </li>
                <li>
                    <Link to='/products'>Products</Link>
                </li>
            </ul>
        </header>
    );
}

export default MainHeader;