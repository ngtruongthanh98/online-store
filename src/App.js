import React, { PureComponent } from "react";
import ButtonBuy from "./components/ButtonBuy";
import Form from "./components/Form"
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
        {
          id: 4,
          name: "iPad Air",
          price: "1999 USD",
          altImg: "iPad Air",
          srcImg:
            "https://macbookgiasi.vn/wp-content/uploads/2020/07/ipad-air-3-2020-macbookgiasi1.jpg",
          status: true,
        },
        {
          id: 5,
          name: "Apple Watch Series 6",
          price: "299 USD",
          altImg: "Apple Watch Series 6",
          srcImg:
            "https://24hstore.vn/images/products/2020/09/16/large/apple-watch-series-6-black.jpg",
          status: true,
        },
      ],
      isActive: true,
    };
  }

  render() {
    let elements = this.state.products.map((product, index) => {
      let result = "";
      if (product.status) {
        result = (
            <div key={index} className="col-sm-6 col-md-4">
              <div className="thumbnail">
                <img src={product.srcImg} alt={product.altImg} />
                <div className="caption">
                  <h3>{product.name}</h3>
                  <p>{product.price}</p>
                  <p>
                    <ButtonBuy name={product.name} price={product.price} />
                  </p>
                </div>
              </div>
            </div>
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
          <Form/>
        </div>
        

        <div className="container">{elements}</div>

        <div className="container">{elements}</div>


      </React.Fragment>
    );
  }
}

export default App;
