import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/Character.css';

class Character extends Component {
  static propTypes = {
    name: PropTypes.string,
    height: PropTypes.string,
    gender: PropTypes.string,
    birth_year: PropTypes.string,
    population: PropTypes.string,
    terrain: PropTypes.string,
    planet_name: PropTypes.string
  }

  render() {
    const { name, height, gender, birth_year } = this.props.character;
    const { population, terrain} = this.props.homeworld;
    const planet_name = this.props.homeworld.name;
    return (
      <div className="character__info text-center">
        <h2 className="character__title bold-text">Character Information</h2>
          <p className="character__text"><span className="bold-text">Name:</span> { name }</p>
          <p className="character__text"><span className="bold-text">Height:</span> { height }</p>
          <p className="character__text"><span className="bold-text">Gender:</span> { gender }</p>
          <p className="character__text"><span className="bold-text">Birth Year:</span> { birth_year }</p>
          <p className="character__text"><span className="bold-text">Planet Name:</span> { planet_name }</p>
          <p className="character__text"><span className="bold-text">Population:</span> { population }</p>
          <p className="character__text"><span className="bold-text">Terrain:</span> { terrain }</p>
      </div>
    )
  }
}

export default Character;
