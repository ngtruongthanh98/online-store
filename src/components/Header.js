import React, { PureComponent } from 'react';

class Header extends PureComponent {
    render() {
        return (            
            <nav className="navbar navbar-inverse">
                <a className="navbar-brand">Shopping Store</a>
                <ul className="nav navbar-nav">
                    <li className="active">
                        <a href="#">Home</a>
                    </li>
                    <li className="active">
                        <a href="#">Products List</a>
                    </li>
                </ul>
            </nav>
            
        );
    }
}

export default Header;