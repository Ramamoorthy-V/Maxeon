import React, { useState } from 'react'
import "../../styles/navbar.css"
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';
import Signup from '../../container/Signup/Signup';


function Navbar() {
    const [showSignup, setShowSignup] = useState(false);
    const signInHandler = (val) => {
        val ? document.body.style.overflow = 'hidden' : document.body.style.overflowY = 'scroll';
        setShowSignup(val);
    }
    const [showNav, setShowNav] = useState(false);

    const openNav = () => {
        setShowNav(true);
    }
    const getNavItems = (clsName) => {
        return (<div className={clsName}>
            <Link to='/' className='nav-routes' >Products</Link>
            <Link to='/' className='nav-routes' >Features</Link>
            <Link to='/' className='nav-routes' >Use Cases</Link>
            <Link to='/' className='nav-routes' >Pricing</Link>
            <Link to='/' className='nav-routes' onClick={() => signInHandler(true)}>SignUp</Link>
        </div>)
    }

    return (
        <>
            <div className='navbar-wrapper'>
                <div className='navbar-logo'>
                    <Link to='/' className='nav-routes-logo' >Maxeon</Link>
                </div>
                {getNavItems('navbar-routes')}
                <div className='navbar-icons'>
                    {!showNav && <GiHamburgerMenu onClick={() => openNav()} />}
                </div>

                {
                    showNav &&
                    <>
                        <MdClose className='mob-close-icon' onClick={() => setShowNav(false)} />
                        {getNavItems('mob-nav-wrapper')}
                    </>

                }
            </div>
            {showSignup ? <Signup setShowSignup={signInHandler} /> : null}
        </>

    )
}

export default Navbar