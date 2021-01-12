import React from 'react'

//functional component
const Header = (props) => {
    
    return (
        <div>
            <h1>{props.branding}</h1>
        </div>
    );
};


export default Header;