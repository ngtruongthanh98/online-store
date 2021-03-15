import React, { PureComponent } from "react";

class Product extends PureComponent {
  // constructor(props) {
  //   super(props);
  //   this.onAddToCart = this.onAddToCart.bind(this);
  // }

  // onAddToCart() {
  //   alert(this.props.children + '___' + this.props.price);
  // }

  render() {
    return (
      <div>
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <div className="thumbnail">
            <img src={this.props.srcImg} alt={this.props.altImg} />
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
