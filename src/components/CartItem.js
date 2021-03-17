import React, { PureComponent } from "react";

class CartItem extends PureComponent {
    render() {
        return (
            <React.Fragment>
                <tr>
                    <td>P1</td>
                    <td>Iphone</td>
                    <td>999USD</td>
                    <td>1</td>
                    <td>1</td>
                    <td>x</td>
                </tr>
            </React.Fragment>
        );
    }
}

export default CartItem;
