import React, { PureComponent } from "react";
import {connect} from "react-redux";
import Products from "../components/Products";

class ProductsContainer extends PureComponent {
    render() {
        var {products} = this.props;
        
        return(
            <Products products={products}/>
        );
    }

}

const mapStateToProps = state => {
    return{
        products: state.products
    }
}

export default connect(mapStateToProps, null)(ProductsContainer);
