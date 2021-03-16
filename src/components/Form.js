import React, { PureComponent } from "react";

class Form extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  onHandleChange = (event) =>{
    // this.setState({
      // username: event.target.value
    // });

    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value
    });
  }

  onHandleSubmit = (event) =>{
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title">Form</h3>
              </div>
              <div className="panel-body">
                <form onSubmit={this.onHandleSubmit}>
                  <div className="form-group">
                    <label>Username:</label>
                    <input type="text" className="form-control" name="username" onChange={this.onHandleChange}/>
                  </div>
                  <div className="form-group">
                    <label>Password:</label>
                    <input type="password" className="form-control" name="password" onChange={this.onHandleChange}/>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                  &nbsp;
                  <button type="reset" className="btn btn-default">
                    Reset
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
