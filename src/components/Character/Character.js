import React, {Component} from 'react';
import './Character.css';

class Character extends Component {

  render() {
    return(
      <div className="card">
        <img className="picture" src={require('./img.png')} alt="star wars characters" />

        <div className="text">
          <p>You are {this.props.person.name}!</p>
          <p>Sex: {this.props.person.gender}</p>
          <p>Birth year: {this.props.person.birth_year}</p>
          <p>Height: {this.props.person.height} cm</p>
          <p>Hair colour: {this.props.person.hair_color}</p>
          <p>Eye colour: {this.props.person.eye_color}</p>

        </div>
      </div>
    )
  }

}

export default Character;
