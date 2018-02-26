import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/Character.css';

export default class Character extends Component {
  static propTypes = {
    character: PropTypes.shape({
      name: PropTypes.string,
      height: PropTypes.string,
      gender: PropTypes.string,
      birth_year: PropTypes.string,
    }),
    homeworld: PropTypes.shape({
      population: PropTypes.string,
      terrain: PropTypes.string,
      planet_name: PropTypes.string
    })
  }

  render() {
    const { character, homeworld } = this.props;
    const { name, height, gender, birth_year } = character;
    const { population, terrain, name: planet_name } = homeworld;
    return (
      <div className="character__info text-center">
        <h2 className="character__title bold-text">
          Character Information
        </h2>
        <p className="character__text">
          <span className="bold-text">Name:</span>
          { name }
        </p>
        <p className="character__text">
          <span className="bold-text">Height:</span>
          { height }
        </p>
        <p className="character__text">
          <span className="bold-text">Gender:</span>
          { gender }
        </p>
        <p className="character__text">
          <span className="bold-text">Birth Year:</span>
          { birth_year }
        </p>
        <p className="character__text">
          <span className="bold-text">Planet Name:</span>
          { planet_name }
        </p>
        <p className="character__text">
          <span className="bold-text">Population:</span>
          { population }
        </p>
        <p className="character__text">
          <span className="bold-text">Terrain:</span>
          { terrain }
        </p>
      </div>
    );
  }
}
