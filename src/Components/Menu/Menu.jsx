import React from "react";
import styles from "./Menu.module.css";
import Link from "next/link";
import Image from "next/image";
import MenuPost from "../MenuPost/MenuPost";
import MenuCategories from "../MenuCategories/MenuCategories";

const Menu = () => {
  const menuData = [
    {
      id: 1,
      image: "/travel.png",
      catSlug: "travel",
      title: "Lorem ipsum dolor sit amet alim",
      userName: "nsoh peter",
      createdAt: "12-04-2023",
    },
    {
      id: 2,
      image: "/coding.png",
      catSlug: "coding",
      title: "Lorem ipsum dolor sit amet alim",
      userName: "nsoh pual",
      createdAt: "01-04-2023",
    },
    {
      id: 3,
      image: "/fashion.png",
      catSlug: "fashion",
      title: "Lorem ipsum dolor sit amet alim",
      userName: "super code",
      createdAt: "16-09-2023",
    },
    {
      id: 4,
      image: "/food.png",
      catSlug: "food",
      title: "Lorem ipsum dolor sit amet alim",
      userName: "Micheal Apao",
      createdAt: "19-22-2023",
    },
    {
      id: 5,
      image: "/style.png",
      catSlug: "style",
      title: "Lorem ipsum dolor sit amet alim",
      userName: "Simon Boby",
      createdAt: "12-04-2023",
    },
  ];
  return (
    <div className={styles.menu}>
      <h2 className={styles.subTitle}>{"what's hot"}</h2>
      <h1 className={styles.mainTitle}>Most Popular post</h1>
      <div className={styles.items}>
        {menuData.map((item, index) => (
          <Link href="#" className={styles.item} key={index}>
            <MenuPost item={item} withImage={false} />
          </Link>
        ))}
      </div>
      {/* categories */}
      <h2 className={styles.subTitle}>Discover by Topic</h2>
      <h1 className={styles.mainTitle}>Categories</h1>
      <MenuCategories />

      {/* second item */}
      <h2 className={styles.subTitle}>choose by the editor</h2>
      <h1 className={styles.mainTitle}>Editor Pick</h1>
      <div className={styles.items}>
        {menuData.map((item, index) => (
          <Link href="#" className={styles.item} key={index}>
            <MenuPost item={item} withImage={true} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Menu;
