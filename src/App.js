import React, { Component } from 'react';
import './App.css';
import Button from './Button';
import Character from './Character';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: {}
    }
  }

  handleClick = () => {
    const number = Math.floor(Math.random()*88);
    const getData = async () => {
      const response = await fetch(`https://swapi.co/api/people/${number}/`);
      const data = await response.json();
      this.setState({
        people: data
      });
    }
    getData();

  }


  render() {
    return (
      <div className="main">
        <h1>Which Star Wars Character Are You?</h1>
        <h2>Push the button and let the Force decide!</h2>
        <Button handleClick={this.handleClick}/>
        <Character/>
      </div>
    );
  }
}

export default App;
