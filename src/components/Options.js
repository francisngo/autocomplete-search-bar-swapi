import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/Options.css';

export default class Options extends Component {
  static propTypes = {
    showOptions: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    options: PropTypes.array
  }
  render() {
    const { showOptions, onClick } = this.props;
    return (
      <div>
        { showOptions ?
          <div className="options__list">
            { this.props.options.length > 0 && this.props.options.map( (item, index) => {
              return (
                <div
                  key={ index }
                  className="options__item"
                  onClick={ () => onClick(item) }
                >
                  <span className="options__text">
                    { item.name }
                  </span>
                </div>
              );
            } ) }
          </div> : null
        }
      </div>
    );
  }
}
