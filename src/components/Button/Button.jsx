import { Component } from "react";

import styles from "./Button.module.css";

class Button1 extends Component {
  render() {
    return (
      <button
        style={{
          width: "1000px",
          display: "flex",
          textDecoration: "underline",
          height: "100px",
        }}
      >
        Кнопка классавая
      </button>
    );
  }
}

export function Button({ text, onClick }) {
  return (
    <div>
      <button
        className={`${styles.primary} ${styles.button}`}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
}
