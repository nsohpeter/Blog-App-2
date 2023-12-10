import React from "react";
import styles from "./MenuCategories.module.css";
import Link from "next/link";
import Image from "next/image";

const MenuCategories = () => {
  const categoriesData = [
    {
      id: 1,
      image: "/style.png",
      category: "style",
    },
    {
      id: 2,
      image: "/style.png",
      category: "football",
    },
    {
      id: 3,
      image: "/style.png",
      category: "fashion",
    },
    {
      id: 4,
      image: "/style.png",
      category: "food",
    },
    {
      id: 5,
      image: "/style.png",
      category: "travel",
    },
    {
      id: 6,
      image: "/style.png",
      category: "coding",
    },
  ];
  return (
    <div className={styles.categories}>
      {categoriesData.map((item, index) => (
        <Link
          href="/blog?cat=style"
          key={index}
          className={`${styles.singCategory} ${styles[item.category]}`}
        >
          <Image
            src={item.image}
            width={45}
            height={45}
            alt="photo"
            className={styles.image}
          />
          {item.category}
        </Link>
      ))}
    </div>
  );
};

export default MenuCategories;
