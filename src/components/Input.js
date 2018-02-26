import React, { Component } from 'react';
import '../styles/Input.css';

export default class Input extends Component {
  render() {

    const { value, onChange } = this.props;

    return (
      <div className="input__wrapper">
        <input
          className="input__field"
          type="text"
          placeholder="Search Star Wars character..."
          value={ value }
          onChange={ onChange }
        />
      </div>
    )
  }
}
