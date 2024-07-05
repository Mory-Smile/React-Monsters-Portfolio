import { Component } from "react";

import Card from "../card/card.component";

import "./card-list.styles.css";

class CardList extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="card-list">
        <Card monster={this.props.monsters} />
      </div>
    );
  }
}

export default CardList;
