"use client";

import React, { useEffect } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/Components/Button/Button";
import { useSession } from "next-auth/react";

import { useRouter } from "next/navigation";

const Dashboard = () => {
  const router = useRouter();
  const { status } = useSession();
  console.log(status);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/dashboard/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return <h1>loading....</h1>;
  }

  if (status === "authenticated") {
    return (
      <div className={styles.container}>
        <div className={styles.myPostHeader}>
          <h1>my posts</h1>
          <Button url="/dashboard/createPost" text="createPost" />
        </div>
        <hr />

        <div className={styles.postsContainer}>
          <div className={styles.imgContainer}>
            <Image
              className={styles.image}
              src="/coding.png"
              fill={true}
              priority={false}
              alt="name"
            />
          </div>
          <div className={styles.postText}>
            <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis doloribus deserunt maxime optio! Qui voluptatibus
              optio nostrum, labore asperiores dolores quasi ipsum ducimus
              laborum quisquam repellat impedit aut at culpa.
            </p>
          </div>

          <button className={styles.btn}>delete</button>
        </div>
        <div className={styles.postsContainer}>
          <div className={styles.imgContainer}>
            <Image
              className={styles.image}
              src="/coding.png"
              fill={true}
              priority={false}
              alt="name"
            />
          </div>
          <div className={styles.postText}>
            <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis doloribus deserunt maxime optio! Qui voluptatibus
              optio nostrum, labore asperiores dolores quasi ipsum ducimus
              laborum quisquam repellat impedit aut at culpa.
            </p>
          </div>

          <button className={styles.btn}>delete</button>
        </div>
      </div>
    );
  }
};

export default Dashboard;
