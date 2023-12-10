import React from "react";
import styles from "./page.module.css";
import Menu from "@/Components/Menu/Menu";
import Image from "next/image";
import Comments from "@/Components/Comments/Comments";

const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("oop! request failled");
  }

  return res.json();
};
const SinglePost = async ({ params }) => {
  const { slug } = params;
  const data = await getData(slug);
  // console.log(data);
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{data?.title}</h1>
          <div className={styles.userInfo}>
            {data?.user?.image && (
              <div className={styles.UserImageContainer}>
                <Image
                  src={data?.user?.image}
                  alt=""
                  fill
                  className={styles.userImage}
                />
              </div>
            )}
            <div className={styles.userText}>
              <span className={styles.userName}>{data?.user.name}</span>
              <span className={styles.date}>
                {" "}
                {data.createdAt.substring(0, 10)} -{" "}
              </span>
            </div>
          </div>
        </div>
        {data?.image && (
          <div className={styles.imageContainer}>
            <Image src={data.image} alt="" fill className={styles.image} />
          </div>
        )}
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <p className={styles.desc}>{data.desc}</p>
          <div className={styles.comments}>
            <Comments postSlug={slug} />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePost;
