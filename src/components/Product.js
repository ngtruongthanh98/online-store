import React, { PureComponent } from "react";

class Product extends PureComponent {
  // constructor(props) {
  //   super(props);
  //   this.onAddToCart = this.onAddToCart.bind(this);
  // }

  // onAddToCart() {
  //   alert(this.props.children + '___' + this.props.price);
  // }

  onAddToCart = () => {
    alert(this.props.children + "___" + this.props.price);
  };

  render() {
    return (
      <div>
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <div className="thumbnail">
            <img src={this.props.srcImg} alt={this.props.altImg} />
            <div className="caption">
              <h3>{this.props.children}</h3>
              <p>{this.props.price}</p>
              <p>
                <a className="btn btn-primary" onClick={this.onAddToCart}>
                  Buy Now
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
