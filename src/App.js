import React from 'react';

class Checkbox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      checked: true
    }
    this.handleCheck = this.handleCheck.bind(this)
  }

  handleCheck() {
    this.setState({
      checked: !this.state.checked
    })      
  }

  render() {
    var msg;
    if(this.state.checked) {
      msg = "Button checked"
    } else {
      msg = "Button unchecked";
    }

    return (
      <div>
        <input type="checkbox" 
              onChange={this.handleCheck}
              defaultChecked={this.state.checked}/>
        <p>This box is {msg}</p>
      </div>
    );
  }
}

export default Checkbox;
