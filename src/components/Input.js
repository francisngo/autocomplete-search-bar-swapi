import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/Input.css';

export default class Input extends Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
  }

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
    );
  }
}
