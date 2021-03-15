import React, { PureComponent } from "react";
import Product from "./components/Product";
class App extends PureComponent {
  render() {
    var products = [
      {
        id: 1,
        name: "Iphone 12 Pro Max 256GB",
        price: "999 USD",
        altImg: "Iphone 12 Pro Max 256GB",
        srcImg:
          "https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-xanh-duong-new-600x600-200x200.jpg",
        status: true,
      },
      {
        id: 2,
        name: "Iphone 12 Pro Max 128GB",
        price: "999 USD",
        altImg: "Iphone 12 Pro Max 128GB",
        srcImg:
          "https://24hstore.vn/images/products/2020/10/14/large/iphone-12-pro-max-blue.jpg",
        status: true,
      },
      {
        id: 3,
        name: "AirPods Pro",
        price: "299 USD",
        altImg: "AirPods Pro",
        srcImg:
          "https://bizweb.dktcdn.net/100/324/157/products/3-94574bf8-44a3-40d8-87e2-2981053c4660.jpg?v=1602840587000",
        status: true,
      },
    ];

    let elements = products.map((product, index) => {
      if (product.status) {
        return (
          <Product
            key={product.id}
            price={product.price}
            altImg={product.altImg}
            srcImg={product.srcImg}
          >
            {product.name}
          </Product>
        );
      }
    });

    return (
      <React.Fragment>
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <a className="navbar-brand">Props</a>
          </div>
        </nav>

        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              {elements}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
