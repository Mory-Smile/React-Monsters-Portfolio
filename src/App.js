import { Component } from "react";

import Search from "./components/search/search.component";
import CardList from "./components/card-list/card-list.component";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState(() => {
          return { monsters: users };
        });
      });
  }

  handleChange(e) {
    const searchField = e.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    });
  }

  render() {
    const filter = this.state.monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(this.state.searchField);
    });
    return (
      <div className="App">
        <h1 className="title">Monsters Portfolio</h1>
        <Search change={this.handleChange} />
        <CardList monsters={filter} />
      </div>
    );
  }
}

export default App;
