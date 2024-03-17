import React from 'react';
import logo from '../assets/logo.png';


function Header(){
    return(
        <div>
            <nav class="navbar navbar-dark ">
                <div class="container-fluid">
                     <a class="navbar-brand navA" href="#">
                    <img src={logo} alt="logo" class="d-inline-block align-text-top" className='navLogo'/>
                    <span className='navHead'>Plan IT</span>
                    </a>
                </div>
            </nav>
        </div>
    );
}

export default Header;