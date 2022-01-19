import { Component } from "react";

import styles from "./Card.module.css";

export function Card({ name, place, postText, image }) {
  return (
    <div style={{ border: "1px solid black", width: "200px" }}>
      <div style={{ display: "flex" }}>
        <img className={styles.img} src={image} />
        <div>
          <h2>{name}</h2>
          <p>{place}</p>
        </div>
      </div>
      <p>{postText}</p>
    </div>
  );
}

class CardClass extends Component {
  render() {
    const { name, place, postText, image } = this.props;
    return (
      <div style={{ border: "1px solid black", width: "200px" }}>
        <div style={{ display: "flex" }}>
          <img className={styles.img} src={image} />
          <div>
            <h2>{name}</h2>
            <p>{place}</p>
          </div>
        </div>
        <p>{postText}</p>
      </div>
    );
  }
}
