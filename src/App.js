import  React, { Component } from 'react';
import { CardList } from './components/card-list.jsx'
import { SearchBox } from './components/search-box.jsx'
import logo from './logo.svg';
import './App.css';

const appStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
};

const h1Style = {
  fontFamily: 'Bigelow Rules',
  fontSize: "72px",
  color: "#0ccac4"
}

class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchString: '',
    };

  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then(
      response => response.json().then(
        users => this.setState({monsters: users})
      )
    )
  }

  render() {
    var {monsters, searchString } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchString.toLowerCase()));

    return (
      <div className="App" style={appStyle}>
        <h1 style={h1Style}>Monsters Rolodex</h1>
        <SearchBox
          placeholder='search monsters'
          onChange={
            e => this.setState({searchString: e})
          }/>
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
