import React, {Component} from 'react';
import './Button.css';

class Button extends Component {

  render() {
    return (
      <div id="button" onClick={this.props.handleClick}>
        <a className="push">PUSH</a>
    </div>
    )
  }

}

export default Button;
