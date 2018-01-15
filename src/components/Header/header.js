import React from 'react';

const Header = () => {
    return (
        <div className="header">
            <div className="header-inner">
                <div className="logo"><img src={require('../../images/logo.jpg')} alt="eZie systems"/></div>
                <div className="pageTitle">Secure negotiation centre</div>
            </div>
        </div>
    );
}

export default Header;
