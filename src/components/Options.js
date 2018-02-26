import React, { Component } from 'react';
import '../styles/Options.css';

export default class Options extends Component {
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
