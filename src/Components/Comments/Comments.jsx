"use client";

import React from "react";
import styles from "./Comments.module.css";
import Link from "next/link";
import Image from "next/image";
import { useSession } from "next-auth/react";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const Comments = ({ postSlug }) => {
  console.log(postSlug);
  const { status } = useSession();

  const { data, error, isLoading } = useSWR(
    `http://localhost:3000/api/comments?postId=${postSlug}`,
    fetcher
  );
  console.log(data);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea className={styles.input}>write your comment</textarea>
          <button className={styles.btn}> send</button>
        </div>
      ) : (
        <Link href="/login">longin</Link>
      )}
      <div className={styles.comments}>
        {data?.map((item) => {
          return (
            <div className={styles.comment} key={item._id}>
              <div className={styles.userInfo}>
                {item?.user.image && (
                  <div className={styles.imageContainer}>
                    <Image
                      src={item?.user.image}
                      alt="image"
                      fill
                      className={styles.image}
                    />
                  </div>
                )}

                <div className={styles.userText}>
                  <div className={styles.spans}>
                    <span className={styles.userName}>{item?.user.name}</span>
                    <span className={styles.date}>
                      {" "}
                      {item.createdAt.substring(0, 10)} -{" "}
                    </span>
                  </div>
                  <p className={styles.commentDesc}>{item.desc}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Comments;
