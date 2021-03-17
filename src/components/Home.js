import React, { PureComponent } from "react";
import Message from "./Message";
import ProductsContainer from "../containers/ProductsContainer";
import Cart from "./Cart";
class Home extends PureComponent {
    render() {
        return (
            <React.Fragment>
                <div className="container">
                </div>
                <ProductsContainer/>
                <Message />
                <Cart/>
            </React.Fragment>
        );
    }
}

export default Home;
