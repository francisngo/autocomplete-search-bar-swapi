import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/Options.css';

export default class Options extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    options: PropTypes.array
  }
  render() {
    const { onClick } = this.props;
    return (
      <div className="options__list">
        { this.props.options.length > 0 && this.props.options.map( (item, index) => {
          return (
            <div key={ index } className="options__item" onClick={ () => onClick(item) }>
              <span className="options__text">{ item.name }</span>
            </div>
          )
        } ) }
      </div>
    )
  }
}
