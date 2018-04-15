import React, {Component} from 'react';
import './Button.css';

class Button extends Component {

  render() {
    return (
      <div className="justify">
        <div id="button" onClick={this.props.handleClick}>
          <a className="push">PUSH</a>
        </div>
      </div>

    )
  }

}

export default Button;
