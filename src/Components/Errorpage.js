import React from 'react'
import { NavLink } from 'react-router-dom';

const Errorpage = () => {
    return (
        <>
            <div className="error-page" id='error-page'>
                <div className='error404'>
                    <h1>404</h1>
                </div>
                <div className='error-text'>
                    <h2>Oops! Page not found</h2>
                    <p className='mb-5'>The page you are looking for does not exist.</p>
                </div>
                <div className='error-button'>
                    <NavLink to='/' className="back-to-homepage" >Back to Home Page</NavLink>
                </div>
            </div>
        </>
    )
}

export default Errorpage;