import { Component } from "react";
import { useState } from "react";
import styles from "./Onliner.module.css";

export function Onliner({ title, backgroundImageUrl, category, viewCount }) {
  return (
    <div className={`${styles.cardOnliner}`}>
      <img src={backgroundImageUrl} className={`${styles.photoIMG}`} />
      <div className={`${styles.cardContent}`}>
        <div className={`${styles.cardTop}`}>
          <div className={`${styles.category}`}>{category}</div>
          <div className={`${styles.viewCount}`}>{viewCount}</div>
        </div>
        <div className={`${styles.title}`}>{title}</div>
      </div>
    </div>
  );
}
