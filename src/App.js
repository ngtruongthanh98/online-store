import React, { PureComponent } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Cart from "./components/Cart";
class App extends PureComponent {
    render() {
        return (
            <React.Fragment>
                <Navbar />

                <Home />

                <Cart />
            </React.Fragment>
        );
    }
}

export default App;
