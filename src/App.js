import React, { Component } from 'react';
import './App.css';
import Button from './Button';
import Character from './Character';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: []
    }
  }

  handleClick = () => {
    // console.log('Button is working');

  }

  componentDidMount() {
    const getData = async () => {
      const response = await fetch('https://swapi.co/api/people/');
      const data = await response.json();
      this.setState({
        people: data.results
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
