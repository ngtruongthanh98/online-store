import React, { PureComponent } from "react";

class Message extends PureComponent {
    render() {
        return (
            <h3>
                <span className="badge amber darken-2">Buy successfully!</span>
            </h3>
        );
    }
}

export default Message;
