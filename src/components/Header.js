import React from 'react';


const Header  = ({titulo}) =>{
    return ( 
        <nav className="nav-wrapper ">
        <a href="#!" className="brand-logo center">{titulo}</a>
    </nav>
    );
}



export default Header;
