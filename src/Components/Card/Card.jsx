import React from "react";
import styles from "./Card.module.css";
import Link from "next/link";
import Image from "next/image";

const Card = ({ item }) => {
  return (
    <>
      {item.image && (
        <div className={styles.imageContainer}>
          <Image src={item.image} alt="" fill className={styles.image} />
        </div>
      )}
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>
            {item.createdAt.substring(0, 10)} -{" "}
          </span>
          <span className={styles.category}>{item.catSlug}</span>
        </div>
        <Link href={`/post/${item.slug}`}>
          <h1>{item.title}</h1>
        </Link>
        <p className={styles.desc}>{item.desc.substring(0, 100)} ...</p>
        {/* <div
          className={styles.desc}
          dangerouslySetInnerHTML={{ __html: item?.desc.substring(0, 100) }}
        /> */}
        <Link href={`/post/${item.slug}`} className={styles.link}>
          Read More
        </Link>
      </div>
    </>
  );
};

export default Card;
