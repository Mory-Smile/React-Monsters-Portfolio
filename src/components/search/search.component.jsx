import { Component } from "react";

import "./search.styles.css";

class Search extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <input
        type="search"
        className={`search-box ${this.props.className}`}
        placeholder="type to search"
        onChange={this.props.change}
      />
    );
  }
}

export default Search;
