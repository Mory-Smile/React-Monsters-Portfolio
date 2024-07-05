import { Component } from "react";

import "./card.styles.css";

class Card extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        {this.props.monster.map((monster) => {
          return (
            <div key={monster.id} className="card-container">
              <img
                src={`https://robohash.org/${Math.ceil(
                  monster.address.geo.lng
                )}?set=set2&size=180x180`}
                alt={`monster ${monster.id}`}
              />
              <h1>{monster.name}</h1>
              <p>{monster.email}</p>
              <p>{`street: ${monster.address.street}`}</p>
            </div>
          );
        })}
      </>
    );
  }
}

export default Card;
