import React from "react";
import styles from "./CardList.module.css";
import Card from "../Card/Card";
import Pagination from "../Pagination/Pagination";

const getData = async (page, cat) => {
  const res = await fetch(
    `http://localhost:3000/api/posts?page=${page}&cat=${cat || ""}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("oop! request failled");
  }

  return res.json();
};

const CardList = async ({ page, cat }) => {
  const { posts, count } = await getData(page, cat);
  // console.log(posts);

  const POST_PER_PAGE = 2;
  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

  return (
    <div className={styles.CardList}>
      <h1 className={styles.title}>Recent post</h1>

      {posts?.map((item, index) => (
        <div className={styles.cardItem} key={index}>
          <Card item={item} />
        </div>
      ))}

      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
    </div>
  );
};

export default CardList;
