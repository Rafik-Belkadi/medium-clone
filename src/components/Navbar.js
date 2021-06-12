import React from 'react';

const NavBar = () => {
    return (
        <div className="navbar">
            <div className='left'>
                <h1>Medium</h1>
            </div>

            <div className='right'>
                <p>Our Story</p>
                <p>Membership</p>
                <p>Write</p>
                <p>Sign In</p>
                <button>Get Started</button>
            </div>
    
        </div>
    );
}

export default NavBar;