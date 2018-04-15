import React, { Component } from 'react';
import './App.css';
import Button from './Button';
import Character from './Character';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        name: '____',
        gender: '____',
        birth_year: '____',
        height: '____',
        hair_color: '____',
        eye_color: '____'
      }
    }
  }

  handleClick = () => {
    const number = Math.floor(Math.random()*88+1);
    const getPerson = async () => {
      const response = await fetch(`https://swapi.co/api/people/${number}/`);
      const person = await response.json();
      this.setState({
        person: person
      });
    }
    getPerson();

  }


  render() {
    return (
      <div className="main">
        <h1>Which Star Wars Character Are You?</h1>
        <h2>Push the button and let the Force decide!</h2>
        <Character person={this.state.person}/>
        <Button handleClick={this.handleClick}/>

      </div>
    );
  }
}

export default App;
