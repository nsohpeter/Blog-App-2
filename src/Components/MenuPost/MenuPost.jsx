import React from "react";
import styles from "./MenuPost.module.css";
import Image from "next/image";

const MenuPost = ({ item, withImage }) => {
  return (
    <React.Fragment>
      {withImage && (
        <div className={styles.imageContainer}>
          <Image src={item.image} fill alt="photo" className={styles.image} />
        </div>
      )}

      <div className={styles.textContainer}>
        <span className={`${styles.category} ${styles[item.catSlug]}`}>
          {"#" + item.catSlug}
        </span>
        <h2 className={styles.title}>{item.title}</h2>

        <div className={styles.detail}>
          <span className={styles.userName}>{item.userName}</span>
          <span className={styles.date}>
            {item.createdAt.substring(0, 10)} -{" "}
          </span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MenuPost;
