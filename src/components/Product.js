import React, { PureComponent } from "react";
import ButtonBuy from "./ButtonBuy";

class Product extends PureComponent {
    render() {
        var { product } = this.props;
        return (
            <>
                {/* <div className="col-sm-6 col-md-4">
                    <div className="thumbnail">
                        <img src={product.srcImg} alt={product.altImg} />
                        <div className="caption">
                            <h3>{product.name}</h3>
                            <p>{product.price}</p>
                            <p>
                                <ButtonBuy
                                    name={product.name}
                                    price={product.price}
                                />
                            </p>
                        </div>
                    </div>
                </div> */}

                <div className="col-lg-4 col-md-6 mb-r">
                    <div className="card text-center card-cascade narrower">
                        <div className="view overlay hm-white-slight z-depth-1">
                            <img
                                src={product.srcImg}
                                className="img-fluid"
                                alt={product.altImg}
                            />
                            <a>
                                <div className="mask waves-light waves-effect waves-light"></div>
                            </a>
                        </div>
                        <div className="card-body">
                            <h4 className="card-title">
                                <strong>
                                    <a>{product.name}</a>
                                </strong>
                            </h4>
                            <ul className="rating">
                                <li>{this.showRating(product.rating)}</li>
                            </ul>
                            <p className="card-text">
                                Sản phẩm do apply sản xuất
                            </p>
                            <div className="card-footer">
                                <span className="left">{product.price}</span>
                                <span className="right">
                                    <a
                                        className="btn-floating blue-gradient"
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        title=""
                                        data-original-title="Add to Cart"
                                    >
                                        <i className="fa fa-shopping-cart"></i>
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }

    showRating(rating) {
        var result = [];
        for(var i = 1; i<= rating; i++){
            result.push(<i key={i} className="fa fa-star"></i>);
        }
        for(var j = 1; j<= 5-rating; j++){
            result.push(<i key={i+j} className="fa fa-star-o"></i>);
        }
        return result;
    }
}

export default Product;
