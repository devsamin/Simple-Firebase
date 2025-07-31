import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <NavLink style={{margin: '20px'}} to={'/'}>Home</NavLink>
            <NavLink to={'/login'}>Google Sign Up</NavLink>
        </div>
    );
};

export default Header;