import React, { Component } from 'react';
import '../styles/App.css';
import axios from 'axios';

import Input from './Input';
import Options from './Options';
import Character from './Character';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      options: [],
      character: {},
      homeworld: {},
    };

    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onClick(item) {
    const homeworld = item.homeworld;
    return axios.get(homeworld)
    .then(home => {
      this.setState({
        character: item,
        homeworld: home.data
      })
    })
    .catch(err => console.log('Error: ', err));
  }

  onChange(event) {
    this.setState({
      value: event.target.value
    });
    axios.get(`https://swapi.co/api/people/?search=${this.state.value}`)
    .then(character => {
      this.setState({
        options: character.data.results
      });
    })
    .catch(err => console.log('Error: ', err));
  }

  render() {
    const { value, options, character, homeworld } = this.state;
    return (
      <div className="app">
        <div className="jumbotron text-center">
          <h1 className="jumbotron__heading">Star Wars Character API</h1>
          <p className="jumbotron__lead text-muted">
            Using SWAPI API, search for your favorite Star Wars characters.
          </p>
          <div className="jumbotron__search">
            <Input
              value={ value }
              onChange={ this.onChange }
            />
            <Options
              options={ options }
              onClick={ this.onClick }
            />
          </div>
        </div>
        <Character
          character={ character }
          homeworld={ homeworld }
        />
      </div>
    );
  }
}
