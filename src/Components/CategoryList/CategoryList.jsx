import React from "react";
import styles from "./CategoryList.module.css";
import Link from "next/link";
import Image from "next/image";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("oop! request failled");
  }

  return res.json();
};
const CategoryList = async () => {
  const data = await getData();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>title</h1>
      <div className={styles.categories}>
        {data?.map((item, index) => (
          <Link
            href={`/blog?cat=${item.slug}`}
            key={index}
            className={`${styles.singCategory} ${styles[item.slug]}`}
          >
            {item.image && (
              <Image
                src={item.image}
                width={45}
                height={45}
                alt="photo"
                className={styles.image}
              />
            )}
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
