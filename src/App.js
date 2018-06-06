import React, { Component } from 'react';
import './App.css';
import Comment from './components/Comment';
import List from './components/List';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ''
    }

    this.items = [
      {value: 'random', id:0},
      {value: ' this is cool', id: 1},
      {value: 'yo', id: 2},
    ];

  }

  handleInputChange = (value) => {
    this.setState({name: value});
  }

  render() {  
    let element = <h1>Welcome to React</h1>
    return (
      <div>
        <div> {element}</div>
        <input 
        placeholder='What is your name?'
        value= {this.state.name}
        onChange={(event) => this.handleInputChange(event.target.value)}
        />
        <List 
        items = {this.items}
        />
        <Comment
          author={{ name: this.state.name , avatarUrl: 'https://i.ytimg.com/vi/NiEABxi8G4U/maxresdefault.jpg' }}
          text='this is my test rum using Component in React'
        />
      </div>

    );
  }

}

export default App;
