import React, { PureComponent } from "react";

class Product extends PureComponent {
  render() {
    return (
      <div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div className="thumbnail">
            <img
              src="https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-xanh-duong-new-600x600-200x200.jpg"
              alt="Iphone 12"
            />
            <div className="caption">
              <h3>Iphone 12</h3>
              <p>999 USD</p>
              <button type="button" className="btn btn-success">
                Buy
              </button>{" "}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
