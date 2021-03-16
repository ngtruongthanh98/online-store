import React, { PureComponent } from "react";

class ButtonBuy extends PureComponent {
  onClickImage = () => {
    alert(this.props.name +"\n\n" + this.props.price);
  };

  render() {
    return (
      <button type="button" className="btn btn-primary" onClick={this.onClickImage}>
        Buy Now
      </button>
    );
  }
}

export default ButtonBuy;
