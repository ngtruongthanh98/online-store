import React, { PureComponent } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Footer from "./components/Footer/Footer"
class App extends PureComponent {
    render() {
        return (
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/cart" component={Cart} />
                </Switch>
                <Footer/>
            </BrowserRouter>
        );
    }
}

export default App;
