import React from "react";
import styles from "./blog.module.css";
import CardList from "@/Components/CardList/CardList";
import Menu from "@/Components/Menu/Menu";

const Blog = ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1;
  const { cat } = searchParams;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{cat} blog</h1>
      <div className={styles.content}>
        <CardList page={page} cat={cat} />
        <Menu />
      </div>
    </div>
  );
};

export default Blog;
