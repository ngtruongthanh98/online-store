import React, { PureComponent } from 'react';
import CartItem from "./CartItem";
class Cart extends PureComponent {
    render() {
        return (
            <div>
                <div class="container">
                    
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Amount</th>
                                <th>Total</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <CartItem/>
                            <CartItem/>
                            <CartItem/>
                            <CartItem/>
                            <CartItem/>
                            <CartItem/>
                        </tbody>
                    </table>
                    
                </div>
            </div>
        );
    }
}

export default Cart;