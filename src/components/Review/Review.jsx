import React from "react";
import styles from "./Review.module.scss";
const Review = ({ image, name, username, body }) => {
  return (
    <div className={styles.content}>
      <div className={styles.userInfo}>
        <img src={image} alt="user" className={styles.image} />
        <div className={styles.user}>
          <p>{name}</p>
          <p className={styles.username}>{username}</p>
        </div>
      </div>
      <span>{body}</span>
    </div>
  );
};

export default Review;
