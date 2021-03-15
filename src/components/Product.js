import React, { PureComponent } from 'react';

class Product extends PureComponent {
    render() {
        return (
            <div>
              
              <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <div className="thumbnail">
                  <img src={this.props.srcImg} alt={this.props.altImg}/>
                  <div className="caption">
                    <h3>
                      {this.props.children}
                    </h3>
                    <p>
                      {this.props.price}
                    </p>
                    <p>
                      <a href="#" className="btn btn-primary">Buy Now</a>
                    </p>
                  </div>
                </div>
              </div>
              
            </div>
        );
    }
}

export default Product;