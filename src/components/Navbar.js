import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
class Navbar extends PureComponent {
    render() {
        return (
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">Online Store</Link>

                    <ul className="nav navbar-nav narvar-right">
                        <li>
                            <Link to="/">Shop</Link>
                        </li>
                        <li>
                            <Link to="/cart">Cart</Link>
                        </li>
                    </ul>
                </div>

                
            </nav>

        );
    }
}
export default Navbar;
