import React, { PureComponent } from "react";

class Navbar extends PureComponent {
    render() {
        return (
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <a className="navbar-brand">Online Store</a>
                </div>
            </nav>
        );
    }
}
export default Navbar;
