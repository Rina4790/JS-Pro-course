import { Component } from "react";

import styles from "./Card.module.css";

export function Card({ title, subtitle, author }) {
  return (
    <div className={`${styles.card}`}>
      <div className={`${styles.title}`}>
          <h4>{title}</h4>
          <p>{subtitle}</p>
        </div>
      <div className={`${styles.author}`}>
      Author: <span style={{color: 'rgb(51,121,250)'}}>{author}</span>
		  </div>
		  </div>
  );
}
