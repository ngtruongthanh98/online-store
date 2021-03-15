import React, { PureComponent } from "react";
import Product from "./components/Product";
class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      products: [
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
      ],
      isActive: true,
    };
  }

  //////////////////////////////////////////////
  onAddToCart = (id) => {
    alert(this.state.products[id].name);
    // console.log(this.state.products.name)
    console.log(id)
  };

  render() {
    let elements = this.state.products.map((product, index) => {
      let result = "";
      if (product.status) {
        result = (
          <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>
              <Product                
                altImg={product.altImg}
                srcImg={product.srcImg}
              />
            </td>
            <td>
              <span className="label label-success">{product.price}</span>
            </td>
            <td>
              <a className="btn btn-primary" onClick={this.onAddToCart(index)}>
                Buy Now
              </a>
            </td>
          </tr>
        );
      }
      return result;
    });

    return (
      <React.Fragment>
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <a className="navbar-brand">Online Store</a>
          </div>
        </nav>

        <div className="container">
          <div className="row">
            <div className="row">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Price</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>{elements}</tbody>
              </table>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
