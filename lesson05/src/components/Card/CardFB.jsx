import { Component } from "react";
import { useState } from "react";
import styles from "./Card.module.css";

export function CardFB({ photo, name, location, postDescription, timeText }) {
  const [text, setText] = useState("Like");
  const onClickLike = () => {
    setText("Liked");
  };

  const [repost, setRepost] = useState("Repost");
  const onClickReply = () => {
    setRepost("Reposted");
  };

  return (
    <div className={`${styles.cardFB}`}>
      <div className={`${styles.photo}`}>
        <img src={photo} className={`${styles.photoIMG}`} />
      </div>

      <div className={`${styles.content}`}>
        <div className={`${styles.name}`}>
          {`${name}  `}
          <span className={`${styles.location}`}>{` ·  ${location}`}</span>
        </div>
        <div className={`${styles.postDescription}`}>{postDescription}</div>
        <div className={`${styles.cardLink} `}>
          <a onClick={onClickLike} className={`${styles.link} `}>
            {" "}
            {text}
          </a>{" "}
          ·
          <a onClick={onClickReply} className={` ${styles.link} `}>
            {" "}
            {repost}{" "}
          </a>{" "}
          ·<span> {timeText}</span>
        </div>
      </div>
    </div>
  );
}
